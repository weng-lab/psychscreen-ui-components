import React, { useRef, useEffect, useState } from 'react';
import cytoscape, { Core, EdgeSingular, NodeSingular } from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { useScreenshot } from 'use-react-screenshot';
import { cCREConstants, cCREClass, buttonStyle } from './constants';
// import './Graph.css';
import { GraphProps, Node, Edge } from './types';
import Legend from './Legend';
import ScaleLegend from './ScaleLegend';
import GraphButton from './GraphButton';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

cytoscape.use(coseBilkent);

interface ToolTipData {
  cCRE?: string;
  type: string;
}

const download = (image: string, { name = 'img', extension = 'jpg' } = {}) => {
  const a = document.createElement('a');
  a.href = image;
  a.download = `${name}.${extension}`;
  a.click();
};

const Graph: React.FC<GraphProps> = ({
  data,
  title,
  id,
  width = '100%',
  height = '100%',
}) => {
  const cyRef = useRef<Core | null>(null);

  // state hooks
  const [showControls, setShowControls] = useState(true);
  const [elements, setElements] = useState<Node[]>([]);
  const [scales, setScales] = useState<number[]>([]);
  const [expressionType, setExpressions] = useState<string[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [toggles, setToggles] = useState<{ [key: string]: boolean }>({
    Promoter: true,
    'Distal Enhancer': true,
    'Proximal Enhancer': true,
    'Transcription Factor': true,
    'Chromatin Accessible + Transcription Factor': true,
    'Chromatin Accessible + H3K4me3': true,
    'Chromatin Accessible + CTCF': true,
    'Lower-Expression': true,
    'Higher-Expression': true,
  });

  const toggleControls = () => {
    setShowControls(!showControls);
  };

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

  const handleMouseOver = (event: cytoscape.EventObject, datum: any) => {
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

  useEffect(() => {
    setElements(data.data.node);
    setEdges(data.data.edge);
    setScales(data.data.edge.map((e: Edge) => e.effectSize));
    setExpressions(
      data.data.edge.map((e: Edge) =>
        e.expressionImpact === 'higher-expression'
          ? 'Higher-Expression'
          : 'Lower-Expression'
      )
    );
  }, [data]);

  useEffect(() => {
    if (
      elements.length === 0 ||
      scales.length === 0 ||
      expressionType.length === 0 ||
      edges.length === 0
    )
      return;

    const allcCREs: string[] = elements.map((e) => e.cCRE);

    const connect: number[][] = [];
    for (let i = 0; i < elements.length; i++) {
      connect.push([]); // does not work with Array.fill
    }

    // connect holds all the connections between nodes
    // connect[0] holds the target node INDICES for the FIRST node
    edges.forEach((e) => {
      connect[allcCREs.indexOf(e.perturbed)].push(allcCREs.indexOf(e.target));
    });

    const createID = (index: number): string => elements[index].cCRE;
    const edgeColor = (idx: number): string =>
      expressionType[idx] === 'Lower-Expression' ? 'black' : 'blue';

    function chooseColor(index: number): string {
      const simple = elements[index].simple as cCREClass;
      return cCREConstants[simple]?.color || 'grey';
    }

    function shortHand(str: string): string {
      const simple = str as cCREClass;
      return cCREConstants[simple]?.label || 'n/a';
    }

    const cy = cytoscape({
      container: document.getElementById(k),
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(id)',
            'font-size': 15,
          },
        },
        {
          selector: 'edge',
          style: {
            'line-color': '#ccc',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
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
      if (toggles[elements[i].simple] !== false) {
        cy.add({
          data: { id: createID(i) }, // create name
          position: {
            // random position
            x: Math.random() * (1250 - 100) + 100,
            y: Math.random() * (600 - 100) + 100,
          },
          style: {
            // find color based on CRE
            'background-color': chooseColor(i),
            label: shortHand(elements[i].simple),
          },
        });
      }
    }

    // ADD EDGES
    let edgeCount = 0;
    for (var j = 0; j < elements.length; j++) {
      // add # of edges per node based on the target connections
      if (toggles[elements[j].simple] !== false) {
        // toggle
        let len = connect[j].length;
        for (let s = 0; s < len; s++) {
          if (
            toggles[elements[connect[j][s]].simple] !== false && // toggle
            toggles[expressionType[j]] !== false
          ) {
            cy.add({
              data: {
                id: 'edge ' + edgeCount,
                source: createID(j),
                target: createID(connect[j][s]),
              },
              style: {
                'line-color': edgeColor(j),
                'target-arrow-color': edgeColor(j),
                width: 10 * Math.log(scales[j] * 4 + 1),
              },
            });
            edgeCount++;
          }
        }
      }
    }

    let idx = 0;
    cy.nodes().forEach((node: NodeSingular) => {
      let cre = allcCREs[idx].toString();
      let simple = elements[idx].simple.toString();
      node.on('mousemove', (event) =>
        handleMouseOver(event, {
          cCRE: cre,
          type: simple,
        })
      );
      idx++;
      node.on('mouseout', hideTooltip);
    });

    cy.edges().forEach((edge: EdgeSingular) => {
      edge.on('mousemove', (event) =>
        handleMouseOver(event, {
          type:
            edge.style('line-color').toString() === 'rgb(0,0,0)'
              ? 'Lower-Expression'
              : 'Higher-Expression',
        })
      );
      edge.on('mouseout', hideTooltip);
    });

    return () => {
      cy.destroy();
    };
  }, [
    elements,
    scales,
    expressionType,
    edges,
    toggles,
    showTooltip,
    hideTooltip,
  ]);

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

  // organize on any toggle change
  useEffect(() => {
    if (cyRef.current) {
      organize();
    }
  }, [toggles]);

  const downloadStyle = {
    ...buttonStyle,
    top: '5px',
    right: '5px',
  };

  const randomizeStyle = {
    ...buttonStyle,
    top: '50px',
    right: '5px',
  };

  const organizeStyle = {
    ...buttonStyle,
    top: '95px',
    right: '5px',
  };

  const toggleControlsStyle = {
    ...buttonStyle,
    top: '5px',
    padding: '3px',
    backgroundColor: 'white',
    color: '#0095ff',
  };

  const r = {
    collapsed: {
      right: '175px',
    },
    uncollapsed: {
      right: '2px',
    },
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
      {showControls && (
        <>
          <GraphButton
            text="Download Screenshot"
            styles={downloadStyle}
            func={downloadScreenshot}
          ></GraphButton>

          <GraphButton
            text="Randomize"
            styles={randomizeStyle}
            func={randomize}
          ></GraphButton>
          <GraphButton
            text="Organize"
            styles={organizeStyle}
            func={organize}
          ></GraphButton>

          <Legend toggles={toggles} onToggle={handleToggle} />
          <ScaleLegend scales={scales} />
        </>
      )}

      <button
        onClick={toggleControls}
        style={{
          ...toggleControlsStyle,
          ...(showControls ? r.collapsed : r.uncollapsed),
        }}
      >
        {showControls ? (
          <KeyboardDoubleArrowRightIcon />
        ) : (
          <KeyboardDoubleArrowLeftIcon />
        )}
      </button>

      <div
        ref={ref}
        style={{
          position: 'relative',
        }}
      >
        <header
          style={{
            opacity: 0.5,
            fontSize: '1em',
            margin: 0,
          }}
        >
          <h1 style={{ fontSize: '14px' }}>{title}</h1>
        </header>
        <div
          ref={containerRef}
          id={k}
          style={{
            width: '100%',
            height: '95vh',
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
          {tooltipData.cCRE ? (
            <div style={{ fontFamily: 'helvetica' }}>
              cCRE: {tooltipData.cCRE} <br />
              Type: {tooltipData.type}
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
