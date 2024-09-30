import React, { useRef, useEffect, useState } from 'react';
import cytoscape, { Core, EdgeSingular, NodeSingular } from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import cytoscapePopper from 'cytoscape-popper';
import { useScreenshot } from 'use-react-screenshot';
import { GraphProps, Node, Edge } from './types';
import tippy, { Instance, Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import ControlPanel from './ControlPanel';
import { Typography } from '@mui/material';

cytoscape.use(coseBilkent);
cytoscape.use(cytoscapePopper(popperFactory));

function popperFactory(
  ref: any,
  content: string | HTMLElement,
  opts?: Partial<Props>
): Instance<Props> {
  const dummyDomElem = document.createElement('div');
  document.body.appendChild(dummyDomElem);
  return tippy(dummyDomElem, {
    getReferenceClientRect: ref.getBoundingClientRect,
    trigger: 'manual',
    content: content,
    arrow: true,
    placement: 'bottom',
    hideOnClick: false,
    sticky: 'reference',
    interactive: true,
    appendTo: document.body,
    ...opts,
  });
}

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
  legendNodeLabel,
  legendEdgeLabel,
  order,
  fontFamily = 'Arial',
  onNodeClick,
  onEdgeClick,
  directional = false,
  scaleLabel,
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

  // unique categories for legend toggles or the node / edge categories
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

  let allCategories = new Set<string>(); // holds all unique categories of nodes based on legendToggle and order
  data.node.forEach((node) => {
    if (legendToggle && !order) {
      allCategories.add(legendToggle(node)); // simple legend name
    } else {
      allCategories.add(node.category); // node category
    }
  });
  data.edge.forEach((edge) => {
    if (edge.category && legendToggle) {
      allCategories.add(legendToggle(edge));
    } else if (edge.category) {
      allCategories.add(edge.category);
    }
  });

  let orderedCategories = Array.from(allCategories);

  if (order) {
    orderedCategories = orderedCategories.sort(
      (a, b) => order.indexOf(a) - order.indexOf(b)
    );
  }

  const initialToggles: { [key: string]: boolean } = {};
  orderedCategories.forEach((category) => {
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

  // each graph needs a unique id
  let k = 'cy-' + id;

  useEffect(() => {
    setElements(data.node);
    setEdges(data.edge);
    setScales(data.edge.map((e: Edge) => e.effectSize));
    setEdgeTypes(
      data.edge.map((e) => {
        if (legendToggle) return legendToggle(e);
        if (e.category !== undefined) return e.category;
        return 'Edge';
      })
    );
    setToggles(initialToggles);
  }, [data]);

  let elem = elements.map((e) => e.category);
  let unique = Array.from(new Set(elem)); // holds unique node categories only

  if (order) {
    unique = unique.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  }

  const simple: string[] = elements.map((e) => {
    // used for toggles
    if (legendToggle && !order) return legendToggle(e);
    else {
      return e.category;
    }
  });
  const simpleCat: string[] = elements.map((e) => {
    // used for legend calculations
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
    // connect[0] holds the TARGET node INDICES for the FIRST node
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

    const starSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
`;
    const starSVGURL = `data:image/svg+xml;utf8,${encodeURIComponent(starSVG)}`;

    // ADD NODES
    for (var i = 0; i < elements.length; i++) {
      if (toggles[simple[i]] !== false) {
        if (data?.centered && elements[i].id === data.centered.id) {
          // if centered node
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
              fontFamily: fontFamily,
              backgroundFit: 'contain',
              backgroundClip: 'none',
              backgroundImage: `url(${starSVGURL})`,
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
              fontFamily: fontFamily,
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
          const edgeCategory = edges[edgeCount]?.category;

          if (
            toggles[simple[connect[j][s]]] !== false &&
            (edgeCategory ? toggles[edgeTypes[edgeCount]] !== false : true)
          ) {
            let c = data.edge.every((e) => e.category);
            cy.add({
              data: {
                id: 'edge ' + edgeCount,
                source: createID(j),
                target: createID(connect[j][s]),
                category: c ? edges[edgeCount].category : 'Edge',
              },
              style: {
                'line-color': getColor ? getColor(edges[edgeCount]) : 'grey',
                'target-arrow-shape': directional ? 'triangle' : null,
                'target-arrow-color': getColor
                  ? getColor(edges[edgeCount])
                  : 'grey',
                width: scale(scales[edgeCount]),
              },
            });
          }
          edgeCount++;
        }
      }
    }

    // TOOLTIP NODES
    cy.nodes().forEach((node: NodeSingular, idx: number) => {
      const ref = node.popperRef();
      const content = document.createElement('div');
      if (data?.centered && allcCREs[idx].toString() === data.centered.id) {
        content.innerHTML = `ID: ${allcCREs[idx]}<br>Type: ${
          legendToggle ? legendToggle(elements[idx]) : elements[idx].category
        }<br>Centered Node`;
      } else {
        content.innerHTML = `ID: ${allcCREs[idx]}<br>Type: ${
          legendToggle ? legendToggle(elements[idx]) : elements[idx].category
        }`;
      }

      content.style.fontSize = '12px';
      content.style.fontFamily = fontFamily;
      const tip = popperFactory(ref, content, {});

      node.on('mouseover', () => {
        tip.show();
        document.body.style.cursor = 'pointer';
      });

      node.on('click', () => {
        if (onNodeClick) {
          const c = {
            accession: node.style('label'),
            start: 0,
            end: 0,
            chromosome: '',
          };
          onNodeClick(c);
        }

        tip.hide();
        document.body.style.cursor = 'default';
      });

      node.on('mouseout', () => {
        tip.hide();
        document.body.style.cursor = 'default';
      });
    });

    // TOOLTIP EDGES
    cy.edges().forEach((edge: EdgeSingular) => {
      const ref = edge.popperRef();
      const content = document.createElement('div');

      if (data.edge.every((e) => e.category)) {
        let c = '';
        edges.forEach((e) => {
          if (
            legendToggle &&
            e.category &&
            edge.data('category') &&
            edge.data('category') === e.category
          ) {
            c = legendToggle(e);
            return;
          } else if (
            e.category &&
            edge.data('category') &&
            edge.data('category') === e.category
          ) {
            c = e.category;
            return;
          }
        });

        if (c.length === 0) {
          content.innerHTML = `Edge`;
        } else {
          content.innerHTML = `Edge Type: ${c}`;
        }
      } else {
        content.innerHTML = `Edge`;
      }

      content.style.fontSize = '12px';
      content.style.fontFamily = fontFamily;
      const tip = popperFactory(ref, content, {});
      edge.on('click', () => {
        if (onEdgeClick) {
          onEdgeClick();
        }

        tip.hide();
        document.body.style.cursor = 'default';
      });

      edge.on('mouseover', () => tip.show());
      edge.on('mouseout', () => tip.hide());
    });

    organize();

    return () => {
      cy.destroy();
    };
  }, [elements, scales, edgeTypes, edges, toggles]);

  // toggle labels
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

  // TOGGLE CATEGORIES
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
          fontFamily: fontFamily,
        }}
      >
        {title}
      </Typography>

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
              simpleCategories={simpleCat}
              edgeType={data.edge.every((e) => e.category)}
              elements={elements}
              edges={edges}
              scales={scales}
              scaleWidth={scale}
              downloadScreenshot={downloadScreenshot}
              randomize={randomize}
              organize={organize}
              toggleLabels={() => setShowLabels(!showLabels)}
              labelsOn={showLabels}
              colorFunc={getColor}
              legendToggle={legendToggle}
              legendNodeLabel={legendNodeLabel}
              legendEdgeLabel={legendEdgeLabel}
              uniqueCat={order ? unique : undefined}
              scaleLabel={scaleLabel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Graph;
