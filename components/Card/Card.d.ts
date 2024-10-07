import { CardProps as MUICardProps } from '@mui/material/Card';
export type HorizontalCardProps = MUICardProps & {
    width?: number;
    cardSpacing?: number;
    cardContentText: {
        cardLabel: string;
        val?: string;
        cardDesc: string;
    }[];
    onCardClick?: (val?: string) => void;
    onArrowClick?: (val?: string) => void;
};
declare const HorizontalCard: (props: HorizontalCardProps) => import("react/jsx-runtime").JSX.Element;
export default HorizontalCard;
