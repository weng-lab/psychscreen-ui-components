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
}

function convertToSimple(str: string): string {
  switch (str) {
    case 'PLS':
      return 'Promoter';
    case 'dELS':
      return 'Distal Enhancer';
    case 'pELS':
      return 'Proximal Enhancer';
    case 'CA-CTCF':
      return 'Chromatin Accessible + CTCF';
    case 'CA-H3K4me3':
      return 'Chromatin Accessible + H3K4me3';
    case 'CA-TF':
      return 'Chromatin Accessible + Transcription Factor';
    case 'Low-DNase':
      return 'Low DNase';
    case 'CA-only':
      return 'Chromatin Accessible';
    case 'lower-expression':
      return 'Lower-Expression';
    case 'higher-expression':
      return 'Higher-Expression';
    default:
      return str;
  }
}

const Legend: React.FC<LegendProps> = ({
  toggles,
  onToggle,
  simpleCategories,
  edgeType,
  colorFunc,
  elements,
  edges,
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

  const edgeTypes = Array.from(new Set(edges.map((e) => e.category)));
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
              if (colorFunc && convertToSimple(node.category) === category) {
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
                  {category} ({cat})
                </span>
              </div>
            );
          })}
        </div>
      )}
      {!collapsed && edgeType && edgeTypes.every((e) => e !== undefined) ? (
        <div>
          {edgeTypes.map((category) => {
            if (category === undefined) {
              return;
            }
            let n = 'grey';
            edges.forEach((edge) => {
              if (
                colorFunc &&
                edge.category !== undefined &&
                edge.category === category
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
                  {convertToSimple(category)}
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
