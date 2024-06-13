import React, { CSSProperties, useState } from 'react';
import { cCREConstants } from './constants';
import GraphButton from './GraphButton';
// import '../styles/Legend.css';

interface LegendProps {
  toggles: { [key: string]: boolean };
  onToggle: (category: string) => void;
}

const Legend: React.FC<LegendProps> = ({ toggles, onToggle }) => {
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

  return (
    <div
      className="legend"
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '3px',
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '7px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      }}
    >
      <GraphButton
        text={collapsed ? 'Show' : 'Hide'}
        func={() => setCollapsed(!collapsed)}
        styles={buttonStyle}
      ></GraphButton>

      {!collapsed && (
        <div>
          {Object.entries(cCREConstants).map(([key, value]) => (
            <div key={key}>
              <input
                type="checkbox"
                checked={toggles[key]}
                onChange={() => onToggle(key)}
              />
              <span style={{ color: value.color, marginLeft: '8px' }}>
                {key} ({value.label})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Legend;
