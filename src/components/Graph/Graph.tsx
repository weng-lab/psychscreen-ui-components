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

// CYTOSCAPE LIBRARIES

/** https://github.com/cytoscape/cytoscape.js-cose-bilkent */
/**https://github.com/cytoscape/cytoscape.js-popper */

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

const Graph: React.FC<GraphProps> = ({
  data,
  title,
  id,
  width = '100%',
  height = '100%',
  scale = (n: number) => 10 * Math.log(n * 4 + 1),
  getLabel,
  getColor,
  legendToggle,
  legendNodeLabel,
  legendEdgeLabel,
  onNodeClick,
  onEdgeClick,
  order,
  fontFamily = 'Arial',
  scaleLabel,
  directional = false,
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

  // unique categories for legend toggles simpler naming conventions
  // OR if no legend toggle exists, the node / edge categories
  const uniqueSimpleNamesOrCategories = new Set<string>();

  if (legendToggle !== undefined) {
    // holds unique simpler names based on legend toggle function for each node and edge
    data.node.forEach((node) => {
      uniqueSimpleNamesOrCategories.add(legendToggle(node));
    });

    data.edge.forEach((edge) => {
      if (edge.category) {
        uniqueSimpleNamesOrCategories.add(legendToggle(edge));
      }
    });
  } else {
    // holds unique edge or node category
    data.node.forEach((node) => {
      uniqueSimpleNamesOrCategories.add(node.category);
    });

    data.edge.forEach((edge) => {
      if (edge.category) {
        uniqueSimpleNamesOrCategories.add(edge.category);
      }
    });
  }

  let allCategories = new Set<string>(); // holds all unique categories of nodes based on legendToggle and order

  data.node.forEach((node) => {
    if (legendToggle && !order) {
      // if legend toggle exists and order does not, the legend will switch off of the legendToggle's naming convention
      // of each node
      allCategories.add(legendToggle(node)); // adds simple legend name
    } else {
      // else it will the node category
      allCategories.add(node.category); // node category
    }
  });
  data.edge.forEach((edge) => {
    if (edge.category && legendToggle) {
      // if the edge has a category and legend toggle exists
      // legend will switch off of its edge's legendToggle function
      allCategories.add(legendToggle(edge));
    } else if (edge.category) {
      //else if it has a category it will switch off of its category
      allCategories.add(edge.category);
    }
  });

  let orderedCategories = Array.from(allCategories);

  // ORDERS ALL CATEGORIES TO SWITCH OFF OF IF THERE IS AN ORDERING CONVENTION
  if (order) {
    orderedCategories = orderedCategories.sort(
      (a, b) => order.indexOf(a) - order.indexOf(b)
    );
  }

  // toggles are set based on legendToggle and ordering
  const initialToggles: { [key: string]: boolean } = {};
  orderedCategories.forEach((category) => {
    initialToggles[category] = true;
  });

  // SET DATA
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

  let elementCategories = elements.map((e) => e.category);
  let uniqueNodeCategories = Array.from(new Set(elementCategories)); // holds unique node categories only

  // sort unique node categories if there is an ordering,
  // this will be used in legend
  if (order) {
    uniqueNodeCategories = uniqueNodeCategories.sort(
      (a, b) => order.indexOf(a) - order.indexOf(b)
    );
  }

  // simple legendToggle names for each node if there is no ordering and a legendToggle function
  // else it will just be each node's category
  // THIS WILL BE WHAT IS USED TO CHECK IN TOGGLES FOR GRAPH
  const simple: string[] = elements.map((e) => {
    // used for toggles
    if (legendToggle && !order) return legendToggle(e);
    else {
      return e.category;
    }
  });

  // if there is a simple legend name, map to each elements simple legend name
  // else just have each node's categories
  const simpleOrNodeCategories: string[] = elements.map((e) => {
    // used for legend calculations
    if (legendToggle) return legendToggle(e);
    else {
      return e.category;
    }
  });

  // unique ID of each element
  const createID = (index: number): string => elements[index].id;
  useEffect(() => {
    if (
      elements.length === 0 ||
      scales.length === 0 ||
      edgeTypes.length === 0 ||
      edges.length === 0
    )
      return;

    const allIDs: string[] = elements.map((e) => e.id);

    // connect holds all the connections between nodes
    // connect[0] holds the TARGET node INDICES for the FIRST node
    // connect[1] holds the TARGET node INDICES for the SECOND node
    let connect: number[][] = [];
    for (let i = 0; i < elements.length; i++) {
      connect.push([]); // does not work with Array.fill
    }

    edges.forEach((e) => {
      const fromIndex = allIDs.indexOf(e.from);
      const toIndex = allIDs.indexOf(e.to);

      // push each edge's to and from index in corresponding spot for the connect array to properly populate
      if (fromIndex !== -1 && toIndex !== -1) {
        connect[fromIndex].push(toIndex);
      }
    });

    // create cy cytoscape graph

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
    // loop over each node element
    for (var i = 0; i < elements.length; i++) {
      // if that element's simple (or node category) name is true, we show it
      // else we do not show the element
      if (toggles[simple[i]] !== false) {
        // if centered node
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
              fontFamily: 'Roboto',
            },
          });
        }
      }
    }

    // ADD EDGES
    let edgeCount = 0; // keeps track of actual edge element we are on
    // loop over each NODE ELEMENT
    for (var j = 0; j < elements.length; j++) {
      // add # of edges FOR EACH NODE based on the target connections
      // if that element's simple (or node category) name is true, we show it
      // else we do not show the edge
      if (toggles[simple[j]] !== false) {
        let len = connect[j].length; // connect[j] is the array of target indices from node j-1
        for (let s = 0; s < len; s++) {
          const edgeCategory = edges[edgeCount]?.category;
          // if that element's simple (or node category) TARGET's name is true, we show it, else we do not show the edge
          // also check if the edge has a category and if it is toggled on, else if it has no category continue

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
                // if every element has a category we will give each edge a category type
                // else it will have category type "Edge"
                // this is done for edge tooltip
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
      if (data.centered && allIDs[idx].toString() === data.centered.id) {
        content.innerHTML = `ID: ${allIDs[idx]}<br>Type: ${
          legendToggle ? legendToggle(elements[idx]) : elements[idx].category
        }<br>Centered Node`;
      } else {
        content.innerHTML = `ID: ${allIDs[idx]}<br>Type: ${
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
          /**@todo unhard code this */
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
          onEdgeClick(edge);
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

  // TOGGLE LABELS
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
              simpleOrNodeCategories={simpleOrNodeCategories}
              allEdgesHaveCategory={data.edge.every((e) => e.category)}
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
              uniqueNodeCategoriesWithOrder={
                order ? uniqueNodeCategories : undefined
              }
              scaleLabel={scaleLabel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Graph;
