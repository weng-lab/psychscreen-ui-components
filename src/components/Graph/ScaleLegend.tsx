import React, { useState } from 'react';
// import '../styles/ScaleLegend.css';

interface ScaleProps {
  scales: number[];
}

const ScaleLegend: React.FC<ScaleProps> = ({ scales }) => {
  const [collapsed, setCollapsed] = useState(false);
  if (scales.length === 0) return null;

  const sorted = [...scales].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const mid1 = sorted[Math.floor(sorted.length / 4)];
  const mid2 = sorted[Math.floor((sorted.length * 3) / 4)];

  const calculateWidth = (weight: number) => 10 * Math.log(weight * 4 + 1); // my scaling

  return (
    <div
      style={{
        position: 'absolute',
        top: '150px',
        right: '10px',
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    >
      {!collapsed && (
        <>
          <h4>
            Edge Weight Scale: (log<sub>10</sub> * 4) + 1
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '5px' }}>
              <div
                style={{
                  width: calculateWidth(min),
                  height: '10px',
                  backgroundColor: 'black',
                  display: 'inline-block',
                }}
              ></div>
              <span style={{ marginLeft: '10px' }}>{min.toFixed(2)}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div
                style={{
                  width: calculateWidth(mid1),
                  height: '10px',
                  backgroundColor: 'black',
                  display: 'inline-block',
                }}
              ></div>
              <span style={{ marginLeft: '10px' }}>{mid1.toFixed(2)}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div
                style={{
                  width: calculateWidth(mid2),
                  height: '10px',
                  backgroundColor: 'black',
                  display: 'inline-block',
                }}
              ></div>
              <span style={{ marginLeft: '10px' }}>{mid2.toFixed(2)}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div
                style={{
                  width: calculateWidth(max),
                  height: '10px',
                  backgroundColor: 'black',
                  display: 'inline-block',
                }}
              ></div>
              <span style={{ marginLeft: '10px' }}>{max.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};

export default ScaleLegend;
