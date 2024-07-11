import React, { CSSProperties, useState } from 'react';
import { Node, Edge } from './types';
import Button from '@mui/material/Button';
import Legend from './Legend';
import ScaleLegend from './ScaleLegend';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

interface ControlPanelProps {
  toggles: { [key: string]: boolean };
  onToggle: (category: string) => void;
  simpleCategories: string[];
  edgeType: boolean;
  colorFunc?: (node: Node | Edge) => string;
  elements: Node[];
  edges: Edge[];
  scales: number[];
  scaleWidth: (n: number) => number;
  downloadScreenshot: () => void;
  randomize: () => void;
  organize: () => void;
  toggleLabels: () => void;
  legendToggle?: (node: Node | Edge) => string;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  toggles,
  onToggle,
  simpleCategories,
  edgeType,
  colorFunc,
  elements,
  edges,
  scales,
  scaleWidth,
  downloadScreenshot,
  randomize,
  organize,
  toggleLabels,
  legendToggle,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const panelStyle: CSSProperties = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: collapsed ? '40px' : '250px',
    backgroundColor: 'white',
    transition: 'width 0.3s',
    zIndex: 1000,
    border: '1px solid grey',
  };

  const buttonStyle: CSSProperties = {
    // left: collapsed ? '-12px' : '-10px',
    width: collapsed ? '0px' : '10px',

    height: '40px',
    display: 'inline-block',
    alignItems: 'left',
    justifyContent: 'left',
    cursor: 'pointer',
    padding: '0px',
  };
  return (
    <div style={panelStyle}>
      <Button
        onClick={() => setCollapsed(!collapsed)}
        fullWidth
        sx={{ typography: 'body2', textTransform: 'none' }}
        style={buttonStyle}
      >
        {collapsed ? (
          <KeyboardDoubleArrowLeftIcon style={{ marginLeft: '-27px' }} />
        ) : (
          <KeyboardDoubleArrowRightIcon style={{ marginRight: '30px' }} />
        )}
      </Button>

      {!collapsed && (
        <>
          <Typography
            variant="body2"
            style={{
              fontSize: '20px',
              marginLeft: '22px',
              marginTop: '5px',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'inline-block',
            }}
          >
            Controls
          </Typography>
          <Stack spacing={1}>
            <Button
              onClick={downloadScreenshot}
              fullWidth
              sx={{ typography: 'body2', textTransform: 'none' }}
              style={{ fontSize: '15px', margin: '5px', width: '95%' }}
              variant="outlined"
            >
              Download Screenshot
            </Button>
            <Button
              onClick={randomize}
              fullWidth
              sx={{ typography: 'body2', textTransform: 'none' }}
              style={{ fontSize: '15px', margin: '5px', width: '95%' }}
              variant="outlined"
            >
              Randomize
            </Button>
            <Button
              onClick={organize}
              fullWidth
              sx={{ typography: 'body2', textTransform: 'none' }}
              style={{ fontSize: '15px', margin: '5px', width: '95%' }}
              variant="outlined"
            >
              Organize
            </Button>
            <Button
              onClick={toggleLabels}
              fullWidth
              sx={{ typography: 'body2', textTransform: 'none' }}
              style={{ fontSize: '15px', margin: '5px', width: '95%' }}
              variant="outlined"
            >
              Toggle Labels
            </Button>

            <ScaleLegend scales={scales} width={scaleWidth} />
            <Legend
              toggles={toggles}
              onToggle={onToggle}
              simpleCategories={simpleCategories}
              edgeType={edgeType}
              colorFunc={colorFunc}
              elements={elements}
              edges={edges}
              legendToggle={legendToggle}
            />
          </Stack>
        </>
      )}
    </div>
  );
};

export default ControlPanel;
