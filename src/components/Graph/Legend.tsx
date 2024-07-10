import React, { CSSProperties, useState } from 'react';
import { Node, Edge } from './types';

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
  const [collapsed, setCollapsed] = useState(false);

  const buttonStyle: CSSProperties = {
    zIndex: 1000,
    margin: '2px',
    backgroundColor: '#0095ff',
    border: '0px',
    borderRadius: '3px',
    color: '#fff',
    cursor: 'pointer',
    fontFamily:
      '-apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif',
    fontSize: '12px',
    outline: 'none',
    padding: '7px .8em',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const divStyle: CSSProperties = {
    position: 'absolute',
    bottom: '10px',
    right: '3px',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  };

  const d = { width: '237px' };
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
    <div className="legend" style={{ ...divStyle, ...(collapsed ? null : d) }}>
      <button style={buttonStyle} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Show' : 'Hide'}
      </button>

      {!collapsed && (
        <div>
          {uniqueCategories.map((category) => {
            let n = 'grey';
            let cat = '';

            elements.forEach((node) => {
              if (
                colorFunc &&
                legendToggle &&
                legendToggle(node) === category
              ) {
                n = colorFunc(node);
                cat = node.category;
              }
            });

            return (
              <div key={category}>
                <input
                  type="checkbox"
                  checked={toggles[category]}
                  onChange={() => onToggle(category)}
                />
                <span
                  style={{
                    color: n,
                    marginLeft: '8px',
                  }}
                  onClick={() => onToggle(category)}
                >
                  {category} {legendToggle ? cat : null}
                </span>
              </div>
            );
          })}
        </div>
      )}
      {!collapsed && edgeType && edgeTypes !== null ? (
        <div>
          {edgeTypes.map((category) => {
            if (category === undefined) {
              return;
            }
            let n = 'grey';
            edges.forEach((edge) => {
              if (
                colorFunc &&
                legendToggle &&
                legendToggle(edge) === category
              ) {
                n = colorFunc(edge);
              }
            });

            return (
              <div key={category}>
                <input
                  type="checkbox"
                  checked={toggles[category]}
                  onChange={() => onToggle(category)}
                />
                <span
                  style={{
                    color: n,
                    marginLeft: '8px',
                  }}
                  onClick={() => onToggle(category)}
                >
                  {category}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Legend;
