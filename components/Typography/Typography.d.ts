import { TypographyProps as MUITypographyProps } from '@mui/material';
export type TypographyType = 'body' | 'title' | 'headline' | 'display' | 'label';
type TypographySize = 'large' | 'medium' | 'small';
type TypographyPropertyDictionary = Map<TypographyType, Map<TypographySize, string>>;
export type TypographyProps = MUITypographyProps & {
    type: TypographyType;
    size: TypographySize;
};
export declare const FONT_SIZES: TypographyPropertyDictionary;
export declare const FONT_WEIGHTS: TypographyPropertyDictionary;
declare const Typography: React.FC<TypographyProps>;
export default Typography;
