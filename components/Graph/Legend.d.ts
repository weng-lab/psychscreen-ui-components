import { default as React } from '../../../node_modules/react';
import { Node, Edge } from './types';
interface LegendProps {
    toggles: {
        [key: string]: boolean;
    };
    onToggle: (category: string) => void;
    simpleCategories: string[];
    edgeType: boolean;
    colorFunc?: (node: Node | Edge) => string;
    elements: Node[];
    edges: Edge[];
    legendToggle?: (node: Node | Edge) => string;
    legendNodeLabel?: string;
    legendEdgeLabel?: string;
    order?: string[];
    uniqueCat?: string[];
}
declare const Legend: React.FC<LegendProps>;
export default Legend;
