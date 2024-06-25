import React, { CSSProperties, useState } from 'react';
import { cCREClass, cCREConstants } from './constants';

interface LegendProps {
  toggles: { [key: string]: boolean };
  onToggle: (category: string) => void;
  simpleCategories: string[];
  edgeType: boolean;
}

const Legend: React.FC<LegendProps> = ({
  toggles,
  onToggle,
  simpleCategories,
  edgeType,
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
  const lower = 'Lower-Expression';
  const higher = 'Higher-Expression';

  const uniqueCategories = Array.from(new Set(simpleCategories));

  return (
    <div className="legend" style={{ ...divStyle, ...(collapsed ? null : d) }}>
      <button style={buttonStyle} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Show' : 'Hide'}
      </button>

      {!collapsed && (
        <div>
          {uniqueCategories.map((category) => {
            const typedCategory = category as cCREClass;
            const categoryData = cCREConstants[typedCategory];
            return (
              <div key={category}>
                <input
                  type="checkbox"
                  checked={toggles[category]}
                  onChange={() => onToggle(category)}
                />
                <span
                  style={{
                    color: categoryData?.color || '#000',
                    marginLeft: '8px',
                  }}
                  onClick={() => onToggle(category)}
                >
                  {category} ({categoryData?.label || 'n/a'})
                </span>
              </div>
            );
          })}
        </div>
      )}
      {/* Conditional rendering based on edgeType */}
      {edgeType ? (
        <>
          <div>
            <input
              type="checkbox"
              checked={toggles[lower]}
              onChange={() => onToggle(lower)}
            />
            <span
              style={{
                color: cCREConstants[lower].color,
                marginLeft: '8px',
              }}
              onClick={() => onToggle(lower)}
            >
              {lower} (Edge)
            </span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={toggles[higher]}
              onChange={() => onToggle(higher)}
            />
            <span
              style={{
                color: cCREConstants[higher].color,
                marginLeft: '8px',
              }}
              onClick={() => onToggle(higher)}
            >
              {higher} (Edge)
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Legend;
