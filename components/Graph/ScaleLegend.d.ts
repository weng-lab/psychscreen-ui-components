import { default as React } from '../../../node_modules/react';
interface ScaleProps {
    scales: number[];
    width: (n: number) => number;
    scaleLabel?: string;
}
declare const ScaleLegend: React.FC<ScaleProps>;
export default ScaleLegend;
