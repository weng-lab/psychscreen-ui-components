import React, { CSSProperties, useState } from 'react';
import GraphButton from './GraphButton';

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
    top: '200px',
    right: '10px',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  };

  const d = {
    width: '230px',
  };
  return (
    <div style={{ ...divStyle, ...(collapsed ? null : d) }}>
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
      <GraphButton
        text={collapsed ? 'Show' : 'Hide'}
        func={() => setCollapsed(!collapsed)}
        styles={buttonStyle}
      ></GraphButton>
    </div>
  );
};

export default ScaleLegend;
