import { default as React } from '../../../node_modules/react';
import { Node, Edge } from './types';
interface ControlPanelProps {
    toggles: {
        [key: string]: boolean;
    };
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
declare const ControlPanel: React.FC<ControlPanelProps>;
export default ControlPanel;
