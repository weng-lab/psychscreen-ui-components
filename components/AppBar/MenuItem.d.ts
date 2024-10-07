import { default as React } from '../../../node_modules/react';
export type MenuItemProps = React.CSSProperties & {
    onClick?: () => void;
    children: React.ReactNode;
};
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
