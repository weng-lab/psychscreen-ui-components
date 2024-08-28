import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Node, Edge } from './types';
import { Typography } from '@mui/material';

interface LegendProps {
  toggles: { [key: string]: boolean };
  onToggle: (category: string) => void;
  /* all simple names for each node category or just the node categories 
  if legendToggle does not exist for simpler legend names 
  this will be looped over if an ordering does not exist */
  simpleOrNodeCategories: string[];
  // boolean for if all edges have a category type, unless we will not show the Edge Type block
  allEdgesHaveCategory: boolean;
  colorFunc?: (node: Node | Edge) => string;
  elements: Node[];
  edges: Edge[];
  // optional naming convention for the legend toggles based on node or edge
  legendToggle?: (node: Node | Edge) => string;
  legendNodeLabel?: string;
  legendEdgeLabel?: string;
  /* unique node categories, in correct order if ordering exists, else it is undefined such that
  it will loop on the unique simple or node categories array (based on simpleOrNodeCategories)
  */
  uniqueNodeCategoriesWithOrder?: string[];
}

const Legend: React.FC<LegendProps> = ({
  toggles,
  onToggle,
  simpleOrNodeCategories,
  allEdgesHaveCategory,
  colorFunc,
  elements,
  edges,
  legendToggle,
  legendNodeLabel,
  legendEdgeLabel,
  uniqueNodeCategoriesWithOrder,
}) => {
  const edgeCategories = Array.from(
    new Set(
      edges.map((e) => {
        if (legendToggle) return legendToggle(e);
        else if (e.category) {
          return e.category;
        } else {
          return;
        }
      })
    )
  );

  const uniqueSimpleOrNodeCategories = Array.from(
    new Set(simpleOrNodeCategories)
  ); // simple names

  /* loop on uniqueNodeCategoriesWithOrder if there is order
   else loop on simpleOrNodeCategories */
  return (
    <div
      style={{
        bottom: '10px',
        zIndex: 1000,
        backgroundColor: 'white',
        borderRadius: '5px',
        width: '225px',
        padding: '5px',
      }}
    >
      <Typography style={{ fontSize: '18px', margin: '3px' }}>
        {legendNodeLabel ? legendNodeLabel : 'Node Type'}
      </Typography>
      {/* LOOP ON UNIQUE NODE CATEGORIES WITH ORDER IF THERE IS A ORDERING CONVENTION,
       ELSE LOOP OVER UNIQUE SIMPLE NODE NAMES IF THEY EXIST, IF NOT LOOP OVER ALL UNIQUE NODE CATEGORIES */}
      {uniqueNodeCategoriesWithOrder
        ? uniqueNodeCategoriesWithOrder.map((category) => {
            let color = 'grey';
            let simpleNameForNodeCategory = '';

            // find matching node category to each element in unique simple or node categories
            // if found, use that node in color function and use that simple category name in the legend's display
            elements.forEach((node) => {
              uniqueSimpleOrNodeCategories.forEach((cat) => {
                if (
                  colorFunc &&
                  legendToggle &&
                  legendToggle(node) === cat &&
                  node.category === category
                ) {
                  color = colorFunc(node);
                  // simple name for node category if legend toggle exists for simple name
                  // else it will be null and only the given node category will show
                  simpleNameForNodeCategory = cat;
                  return;
                }
              });
            });
            return (
              <div
                key={category}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <Checkbox
                  checked={toggles[category]}
                  onChange={() => onToggle(category)}
                  color="primary"
                  size="small"
                  style={{ padding: 0 }}
                />
                <Typography
                  variant="body2"
                  style={{
                    color: color,
                    marginLeft: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                  onClick={() => onToggle(category)}
                >
                  {simpleNameForNodeCategory} {legendToggle ? '(' : null}
                  {legendToggle ? category : null}
                  {legendToggle ? ')' : null}
                </Typography>
              </div>
            );
          })
        : uniqueSimpleOrNodeCategories.map((category) => {
            {
              /* LOOP THROUGH SIMPLE NAMES FOR NODES OR NODE CATEGORIES IF THERE IS NO ORDERING*/
            }
            let color = 'grey';
            let nodeCat = '';

            // find matching node category or simple name to each element
            // if found, use that node in color function and get the node's category
            elements.forEach((node) => {
              if (
                colorFunc &&
                legendToggle &&
                legendToggle(node) === category
              ) {
                color = colorFunc(node);
                nodeCat = node.category; // category of node
              }
            });

            return (
              <div
                key={category}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <Checkbox
                  checked={toggles[category]}
                  onChange={() => onToggle(category)}
                  color="primary"
                  size="small"
                  style={{ padding: 0 }}
                />
                <Typography
                  variant="body2"
                  style={{
                    color: color,
                    marginLeft: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                  onClick={() => onToggle(category)}
                >
                  {category} {legendToggle ? '(' : null}
                  {legendToggle ? nodeCat : null}
                  {legendToggle ? ')' : null}
                </Typography>
              </div>
            );
          })}
      {/* IF EVERY EDGE HAS A CATEGORY AND ARRAY OF THE DIFFERENT EDGE TYPES IS NOT NULL 
LOOP THROUGH EACH EDGE CATEGORY AND FIND CORRECT COLOR, CHECK FOR BOTH SIMPLE NAME AND REGULAR CATEGORY
*/}
      {allEdgesHaveCategory && edgeCategories !== null ? (
        <div>
          <Typography style={{ fontSize: '18px', margin: '3px' }}>
            {legendEdgeLabel ? legendEdgeLabel : 'Edge Type'}
          </Typography>
          {edgeCategories.map((category) => {
            if (category === undefined) {
              return null;
            }
            let color = 'grey';

            edges.forEach((edge) => {
              if (
                colorFunc &&
                legendToggle &&
                legendToggle(edge) === category
              ) {
                color = colorFunc(edge);
              } else if (
                colorFunc &&
                edge.category &&
                edge.category === category
              ) {
                color = colorFunc(edge);
              }
            });

            return (
              <div
                key={category}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  checked={toggles[category]}
                  onChange={() => onToggle(category)}
                  color="primary"
                  size="small"
                  style={{ padding: 0 }}
                />
                <Typography
                  variant="body2"
                  style={{
                    color: color,
                    marginLeft: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                  onClick={() => onToggle(category)}
                >
                  {category}
                </Typography>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Legend;
