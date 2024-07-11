import React, { useRef, useEffect, useState } from 'react';
import cytoscape, { Core, EdgeSingular, NodeSingular } from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { useScreenshot } from 'use-react-screenshot';
import { GraphProps, Node, Edge, ToolTipData } from './types';

import ControlPanel from './ControlPanel';
import { Typography } from '@mui/material';

cytoscape.use(coseBilkent);

const download = (image: string, { name = 'img', extension = 'jpg' } = {}) => {
  const a = document.createElement('a');
  a.href = image;
  a.download = `${name}.${extension}`;
  a.click();
};

const defaultScale = (n: number) => 10 * Math.log(n * 4 + 1);

const Graph: React.FC<GraphProps> = ({
  data,
  title,
  id,
  width = '100%',
  height = '100%',
  scale = defaultScale,
  getLabel,
  getColor,
  legendToggle,
}) => {
  const cyRef = useRef<Core | null>(null);

  // state hooks
  const [showControls] = useState(true);
  const [elements, setElements] = useState<Node[]>([]);
  const [scales, setScales] = useState<number[]>([]);
  const [edgeTypes, setEdgeTypes] = useState<string[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [showLabels, setShowLabels] = useState(true);
  const [toggles, setToggles] = useState<{ [key: string]: boolean }>({});
  const [degree, setDegree] = useState<number>(3);

  // unique categories for legend toggles
  const uniqueCategories = new Set<string>();

  if (legendToggle !== undefined) {
    data.node.forEach((node) => {
      uniqueCategories.add(legendToggle(node));
    });

    data.edge.forEach((edge) => {
      if (edge.category) {
        uniqueCategories.add(legendToggle(edge));
      }
    });
  } else {
    data.node.forEach((node) => {
      uniqueCategories.add(node.category);
    });

    data.edge.forEach((edge) => {
      if (edge.category) {
        uniqueCategories.add(edge.category);
      }
    });
  }

  const initialToggles: { [key: string]: boolean } = {};
  uniqueCategories.forEach((category) => {
    initialToggles[category] = true;
  });

  // DOWNLOAD SCREENSHOT
  const ref = useRef<HTMLDivElement>(null);
  const [_, takeScreenShot] = useScreenshot();

  const downloadScreenshot = () => {
    if (ref.current && typeof takeScreenShot === 'function') {
      takeScreenShot(ref.current).then(download);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<ToolTipData>();

  const { TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });

  const handleMouseMove = (event: cytoscape.EventObject, datum: any) => {
    if (!containerRef.current) {
      console.error('Container ref is not set');
      return;
    }

    const coords = {
      x: event.renderedPosition.x,
      y: event.renderedPosition.y,
    };

    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum,
    });
  };

  // each graph needs a unique id
  let k = 'cy-' + id;

  if (data.centered) {
    // function to filter nodes and edges based on degree - do some check here for if centered even exists in data
    const filterNodesAndEdges = (degree: number) => {
      const centeredNode = data.centered.id;
      let nodesToInclude = new Set<string>([centeredNode]);
      let edgesToInclude: Edge[] = [];
      let visited = new Set<string>([centeredNode]);

      // queue to manage BFS traversal
      let queue: { node: string; depth: number }[] = [
        { node: centeredNode, depth: 0 },
      ];

      while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // if the curr depth = to the degree, skip further expansion
        if (depth >= degree) continue;

        // find edges involving the current node
        data.edge.forEach((edge) => {
          const neighbors = [
            { to: edge.to, from: edge.from },
            { to: edge.from, from: edge.to },
          ];

          neighbors.forEach(({ to, from }) => {
            if (from === node && !visited.has(to)) {
              visited.add(to);
              nodesToInclude.add(to);
              edgesToInclude.push(edge);
              queue.push({ node: to, depth: depth + 1 });
            }
          });
        });
      }

      // filter nodes to include only those found within the specified degrees of separation
      const filteredNodes = data.node.filter((node) =>
        nodesToInclude.has(node.id)
      );
      return { nodes: filteredNodes, edges: edgesToInclude };
    };

    useEffect(() => {
      const filteredData = filterNodesAndEdges(degree);
      setElements(filteredData.nodes);
      setEdges(data.edge);
      setScales(filteredData.edges.map((e) => e.effectSize));
      setEdgeTypes(
        data.edge.map((e) => {
          if (legendToggle) return legendToggle(e);
          if (e.category !== undefined) return e.category;
          return '';
        })
      );
      setToggles(initialToggles);
    }, [data, degree]);
  } else {
    useEffect(() => {
      setElements(data.node);
      setEdges(data.edge);
      setScales(data.edge.map((e: Edge) => e.effectSize));
      setEdgeTypes(
        data.edge.map((e) => {
          if (legendToggle) return legendToggle(e);
          if (e.category !== undefined) return e.category;
          return '';
        })
      );
      setToggles(initialToggles);
    }, [data]);
  }
  const simple: string[] = elements.map((e) => {
    if (legendToggle) return legendToggle(e);
    else {
      return e.category;
    }
  });
  const createID = (index: number): string => elements[index].id;
  useEffect(() => {
    if (
      elements.length === 0 ||
      scales.length === 0 ||
      edgeTypes.length === 0 ||
      edges.length === 0
    )
      return;

    const allcCREs: string[] = elements.map((e) => e.id);

    let connect: number[][] = [];
    for (let i = 0; i < elements.length; i++) {
      connect.push([]); // does not work with Array.fill
    }

    // connect holds all the connections between nodes
    // connect[0] holds the target node INDICES for the FIRST node
    edges.forEach((e) => {
      const fromIndex = allcCREs.indexOf(e.from);
      const toIndex = allcCREs.indexOf(e.to);

      if (fromIndex !== -1 && toIndex !== -1) {
        connect[fromIndex].push(toIndex);
      }
    });
    const cy = cytoscape({
      container: document.getElementById(k),
      style: [
        {
          selector: 'node',
          style: {
            label: '',
            'font-size': 12,
          },
        },
        {
          selector: 'edge',
          style: {
            'line-color': '#ccc',
            'curve-style': 'bezier',
          },
        },
      ],
      minZoom: 0.25,
      maxZoom: 5,
    });

    cyRef.current = cy; // save Cytoscape instance to ref

    cy.ready(() => {
      cy.nodes().forEach((node: NodeSingular) => {
        const width = [30, 70, 110];
        const size = width[Math.floor(Math.random() * 3)];
        node.css('width', size);
        node.css('height', size);
      });

      cy.layout({
        name: 'cose-bilkent',
        animate: 'end',
        animationDuration: 1000,
      } as any).run();
    });

    // ADD NODES
    for (var i = 0; i < elements.length; i++) {
      if (toggles[simple[i]] !== false) {
        if (data.centered && elements[i].id === data.centered.id) {
          cy.add({
            data: { id: createID(i) }, // create name
            position: {
              // random position
              x: Math.random() * (1250 - 100) + 100,
              y: Math.random() * (600 - 100) + 100,
            },
            style: {
              // find color based on CRE
              'background-color': getColor ? getColor(elements[i]) : 'grey',
              label: showLabels ? elements[i].id : '',
              fontSize: '12px',
              borderWidth: '2px',
              borderColor: 'black',
              fontFamily: 'Roboto',
            },
          });
        } else {
          cy.add({
            data: { id: createID(i) }, // create name
            position: {
              // random position
              x: Math.random() * (1250 - 100) + 100,
              y: Math.random() * (600 - 100) + 100,
            },
            style: {
              // find color based on CRE
              'background-color': getColor ? getColor(elements[i]) : 'grey',
              label: showLabels
                ? getLabel
                  ? getLabel(elements[i])
                  : elements[i].id
                : '',
              fontSize: '12px',
            },
          });
        }
      }
    }

    // ADD EDGES
    let edgeCount = 0;
    for (var j = 0; j < elements.length; j++) {
      // add # of edges per node based on the target connections
      if (toggles[simple[j]] !== false) {
        let len = connect[j].length;
        for (let s = 0; s < len; s++) {
          if (
            toggles[simple[connect[j][s]]] !== false && // toggle
            toggles[edgeTypes[j]] !== false
          ) {
            cy.add({
              data: {
                id: 'edge ' + edgeCount,
                source: createID(j),
                target: createID(connect[j][s]),
              },
              style: {
                'line-color': getColor ? getColor(edges[j]) : 'grey',
                'target-arrow-shape':
                  edgeTypes[j] !== 'Edge' ? 'triangle' : null,
                'target-arrow-color': getColor ? getColor(edges[j]) : 'grey',
                width: scale(scales[j]),
              },
            });
            edgeCount++;
          }
        }
      }
    }
    let idx = 0;
    cy.nodes().forEach((node: NodeSingular) => {
      let ID = allcCREs[idx].toString();
      let s = simple[idx].toString();
      if (data.centered && ID === data.centered.id) {
        node.on('mousemove', (event) =>
          handleMouseMove(event, {
            id: ID,
            type: s,
            centered: 'Centered Node',
          })
        );
      } else {
        node.on('mousemove', (event) =>
          handleMouseMove(event, {
            id: ID,
            type: s,
          })
        );
      }
      idx++;
      node.on('mouseout', hideTooltip);
    });

    cy.edges().forEach((edge: EdgeSingular) => {
      if (data.edge.every((e) => e.category)) {
        edge.on('mousemove', (event) =>
          handleMouseMove(event, {
            type:
              edge.style('line-color').toString() === 'rgb(0,0,0)'
                ? 'Lower-Expression'
                : 'Higher-Expression',
          })
        );
      } else {
        edge.on('mousemove', (event) =>
          handleMouseMove(event, {
            type: 'Edge',
          })
        );
      }
      edge.on('mouseout', hideTooltip);
    });
    organize();

    return () => {
      cy.destroy();
    };
  }, [elements, scales, edgeTypes, edges, toggles, showTooltip, hideTooltip]);

  useEffect(() => {
    if (!cyRef.current) return;
    let ind = 0;

    cyRef.current.nodes().forEach((node) => {
      node.style({
        label: showLabels ? createID(ind) : '',
      });
      ind++;
    });
  }, [showLabels]);

  // RANDOMIZE
  const randomize = () => {
    const cy = cyRef.current;
    if (cy) {
      const options = {
        name: 'random',
        animate: true,
        animationDuration: 1000,
        animationEasing: 'ease-out',
      } as any;
      cy.layout(options).run();
    }
  };

  // ORGANIZE
  const organize = () => {
    const cy = cyRef.current;
    const options = {
      name: 'cose-bilkent',
      animate: 'end',
      animationEasing: 'ease-out',
      animationDuration: 1000,
      randomize: true,
    } as any;
    if (cy) {
      cy.layout(options).run();
    }
  };

  // TOGGLE
  const handleToggle = (category: string) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [category]: !prevToggles[category],
    }));
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        position: 'relative',
        overflow: 'hidden',
        fontSize: '14px',
        fontFamily: 'helvetica',
      }}
    >
      <Typography
        variant="h1"
        style={{
          marginLeft: '3px',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        {title}
      </Typography>

      {data.centered ? (
        <div
          style={{
            top: '55px',
            left: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            style={{
              marginLeft: '3px',
              marginTop: '5px',
              fontSize: '15px',
            }}
          >
            Degrees of Separation:
          </Typography>
          <input
            id="degree"
            type="number"
            value={degree}
            min={1}
            max={5}
            onChange={(e) => setDegree(parseInt(e.target.value))}
            style={{ marginLeft: '5px', marginTop: '5px' }}
          />
        </div>
      ) : null}

      {showControls && (
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          <ControlPanel
            toggles={toggles}
            onToggle={handleToggle}
            simpleCategories={simple}
            edgeType={data.edge.every((e) => e.category)}
            elements={elements}
            edges={edges}
            scales={scales}
            scaleWidth={scale}
            downloadScreenshot={downloadScreenshot}
            randomize={randomize}
            organize={organize}
            toggleLabels={() => setShowLabels(!showLabels)}
            colorFunc={getColor}
            legendToggle={legendToggle}
          />
        </div>
      )}

      <div
        ref={ref}
        style={{
          position: 'relative',
        }}
      >
        <div
          ref={containerRef}
          id={k}
          style={{
            width: '95%',
            height: '90vh',
            zIndex: 999,
          }}
        ></div>
      </div>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          style={{
            ...defaultStyles,
            backgroundColor: 'black',
            color: 'white',
            zIndex: 1000,
            fontSize: '12px',
          }}
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
        >
          {tooltipData.id ? (
            <div style={{ fontFamily: 'helvetica' }}>
              ID: {tooltipData.id} <br />
              Type: {tooltipData.type}
              {tooltipData.centered ? <div> Centered Node </div> : null}
            </div>
          ) : (
            <div style={{ fontFamily: 'helvetica' }}>
              Type: {tooltipData.type}
            </div>
          )}
        </TooltipInPortal>
      )}
    </div>
  );
};

export default Graph;
