import React, { CSSProperties } from 'react';
import Typography from '@mui/material/Typography';

interface ScaleProps {
  scales: number[];
  width: (n: number) => number;
}

const ScaleLegend: React.FC<ScaleProps> = ({ scales, width }) => {
  if (scales.length === 0) return null;

  const sorted = [...scales].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const mid1 = sorted[Math.floor(sorted.length / 4)];
  const mid2 = sorted[Math.floor((sorted.length * 3) / 4)];

  const scaleFunctionStr = width.toString();
  const scaleFormula =
    scaleFunctionStr
      .match(/=>\s*(.*)/)?.[1]
      ?.trim()
      .replace('Math.', '') || scaleFunctionStr;

  const divStyle: CSSProperties = {
    top: '20vh',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '13px',
    width: '225px',
    textAlign: 'left',
  };

  const scaleItemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: '5px',
  };

  return (
    <div style={divStyle}>
      <>
        <Typography
          variant="body2"
          component="h4"
          style={{
            margin: '3px 0',
            fontSize: '16px',
          }}
        >
          Edge Weight Scale:
        </Typography>
        <Typography
          variant="body2"
          component="h4"
          style={{
            margin: '3px 0',
            fontSize: '14px',
          }}
        >
          {scaleFormula}
        </Typography>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            marginTop: '10px',
          }}
        >
          <div style={scaleItemStyle}>
            <div
              style={{
                width: width(min),
                height: '10px',
                backgroundColor: 'black',
                display: 'inline-block',
              }}
            ></div>
            <Typography
              variant="body2"
              style={{
                marginLeft: '10px',
                fontSize: '14px',
              }}
            >
              {min.toFixed(2)}
            </Typography>
          </div>
          <div style={scaleItemStyle}>
            <div
              style={{
                width: width(mid1),
                height: '10px',
                backgroundColor: 'black',
                display: 'inline-block',
              }}
            ></div>
            <Typography
              variant="body2"
              style={{
                marginLeft: '10px',
                fontSize: '14px',
              }}
            >
              {mid1.toFixed(2)}
            </Typography>
          </div>
          <div style={scaleItemStyle}>
            <div
              style={{
                width: width(mid2),
                height: '10px',
                backgroundColor: 'black',
                display: 'inline-block',
              }}
            ></div>
            <Typography
              variant="body2"
              style={{
                marginLeft: '10px',
                fontSize: '14px',
              }}
            >
              {mid2.toFixed(2)}
            </Typography>
          </div>
          <div style={scaleItemStyle}>
            <div
              style={{
                width: width(max),
                height: '10px',
                backgroundColor: 'black',
                display: 'inline-block',
              }}
            ></div>
            <Typography
              variant="body2"
              style={{
                marginLeft: '10px',
                fontSize: '14px',
              }}
            >
              {max.toFixed(2)}
            </Typography>
          </div>
        </div>
      </>
    </div>
  );
};

export default ScaleLegend;
