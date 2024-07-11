import React, { CSSProperties, useState } from 'react';
import { Node, Edge } from './types';
import Button from '@mui/material/Button';
import Legend from './Legend';
import ScaleLegend from './ScaleLegend';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

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
    height: '92vh',
    width: collapsed ? '40px' : '250px',
    backgroundColor: 'white',
    transition: 'width 0.3s',
    zIndex: 1000,
    border: '1px solid grey',
  };

  const buttonStyle: CSSProperties = {
    left: collapsed ? '-12px' : '0px',
    width: collapsed ? '0px' : '100%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
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
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </Button>
      {!collapsed && (
        <>
          <Button
            onClick={downloadScreenshot}
            fullWidth
            sx={{ typography: 'body2', textTransform: 'none' }}
            style={{ fontSize: '15px' }}
          >
            Download Screenshot
          </Button>
          <Button
            onClick={randomize}
            fullWidth
            sx={{ typography: 'body2', textTransform: 'none' }}
            style={{ fontSize: '15px' }}
          >
            Randomize
          </Button>
          <Button
            onClick={organize}
            fullWidth
            sx={{ typography: 'body2', textTransform: 'none' }}
            style={{ fontSize: '15px' }}
          >
            Organize
          </Button>
          <Button
            onClick={toggleLabels}
            fullWidth
            sx={{ typography: 'body2', textTransform: 'none' }}
            style={{ fontSize: '15px' }}
          >
            Toggle Labels
          </Button>
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
          <ScaleLegend scales={scales} width={scaleWidth} />
        </>
      )}
    </div>
  );
};

export default ControlPanel;
