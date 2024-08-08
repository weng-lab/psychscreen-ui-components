import React, { CSSProperties, useState } from 'react';
import { Node, Edge } from './types';
import Button from '@mui/material/Button';
import Legend from './Legend';
import ScaleLegend from './ScaleLegend';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LabelIcon from '@mui/icons-material/Label';
import LabelOffIcon from '@mui/icons-material/LabelOff';
import InsightsIcon from '@mui/icons-material/Insights';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

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
  labelsOn: boolean;
  legendToggle?: (node: Node | Edge) => string;
  legendNodeLabel?: string;
  legendEdgeLabel?: string;
  uniqueCat?: string[];
  scaleLabel?: string;
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
  labelsOn,
  legendToggle,
  legendNodeLabel,
  legendEdgeLabel,
  uniqueCat,
  scaleLabel,
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
    overflowX: 'hidden',
    marginRight: '5px',
    marginTop: '5px',
    overflowY: 'auto',
    maxHeight: '100vh',
  };

  const buttonStyle: CSSProperties = {
    width: collapsed ? '0px' : '10px',
    height: '40px',
    display: 'inline-block',
    alignItems: 'left',
    justifyContent: 'left',
    cursor: 'pointer',
    padding: '0px',
  };

  return (
    <Paper style={panelStyle} elevation={3}>
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
            <Legend
              toggles={toggles}
              onToggle={onToggle}
              simpleCategories={simpleCategories}
              edgeType={edgeType}
              colorFunc={colorFunc}
              elements={elements}
              edges={edges}
              legendToggle={legendToggle}
              legendNodeLabel={legendNodeLabel}
              legendEdgeLabel={legendEdgeLabel}
              uniqueCat={uniqueCat}
            />

            <ScaleLegend
              scales={scales}
              width={scaleWidth}
              scaleLabel={scaleLabel}
            />

            <Stack direction="row" spacing={2} style={{ marginBottom: '5px' }}>
              <Button
                onClick={downloadScreenshot}
                style={{ fontSize: 'small', minWidth: '40px' }}
              >
                <Tooltip
                  title="Download"
                  color="primary"
                  sx={{ ml: 1 }}
                  placement="bottom"
                >
                  <DownloadIcon />
                </Tooltip>
              </Button>
              <Button
                onClick={randomize}
                style={{ fontSize: 'small', minWidth: '40px' }}
              >
                <Tooltip
                  title="Randomize"
                  color="primary"
                  sx={{ ml: 1 }}
                  placement="bottom"
                >
                  <ShuffleIcon />
                </Tooltip>
              </Button>
              <Button
                onClick={organize}
                style={{ fontSize: 'small', minWidth: '40px' }}
              >
                <Tooltip
                  title="Organize"
                  color="primary"
                  sx={{ ml: 1 }}
                  placement="bottom"
                >
                  <InsightsIcon />
                </Tooltip>
              </Button>
              <Button
                onClick={toggleLabels}
                style={{ fontSize: 'small', minWidth: '40px' }}
              >
                <Tooltip
                  title="Toggle Labels"
                  color="primary"
                  sx={{ ml: 1 }}
                  placement="bottom"
                >
                  {labelsOn ? <LabelOffIcon /> : <LabelIcon />}
                </Tooltip>
              </Button>
            </Stack>
          </Stack>
        </>
      )}
    </Paper>
  );
};

export default ControlPanel;
