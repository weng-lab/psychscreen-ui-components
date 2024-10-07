import { default as React, CSSProperties } from '../../../node_modules/react';
interface buttonProps {
    text: string;
    styles: CSSProperties;
    func: () => any;
}
declare const GraphButton: React.FC<buttonProps>;
export default GraphButton;
