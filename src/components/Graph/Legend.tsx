import React, { useState } from 'react';
import { cCREConstants } from './constants';
// import '../styles/Legend.css';

interface LegendProps {
  toggles: { [key: string]: boolean };
  onToggle: (category: string) => void;
}

const Legend: React.FC<LegendProps> = ({ toggles, onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Show' : 'Hide'}
      </button>

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
