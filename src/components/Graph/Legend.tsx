import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Node, Edge } from './types';
import { Typography } from '@mui/material';

interface LegendProps {
  toggles: { [key: string]: boolean };
  onToggle: (category: string) => void;
  simpleCategories: string[];
  edgeType: boolean;
  colorFunc?: (node: Node | Edge) => string;
  elements: Node[];
  edges: Edge[];
  legendToggle?: (node: Node | Edge) => string;
}

const Legend: React.FC<LegendProps> = ({
  toggles,
  onToggle,
  simpleCategories,
  edgeType,
  colorFunc,
  elements,
  edges,
  legendToggle,
}) => {
  const edgeTypes = Array.from(
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

  const uniqueCategories = Array.from(new Set(simpleCategories));

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
      {uniqueCategories.map((category) => {
        let color = 'grey';
        let cat = '';

        elements.forEach((node) => {
          if (colorFunc && legendToggle && legendToggle(node) === category) {
            color = colorFunc(node);
            cat = node.category;
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
              {legendToggle ? cat : null}
              {legendToggle ? ')' : null}
            </Typography>
          </div>
        );
      })}

      {edgeType && edgeTypes !== null ? (
        <div>
          {edgeTypes.map((category) => {
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
