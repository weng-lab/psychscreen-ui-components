/**
 * Typography.tsx: PsychSCREEN-styled typography.
 */

import styled from '@emotion/styled';
import { Typography as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material';
import { PSYCHSCREEN_DEFAULT_FONT_FAMILY } from '../../constants/theme';

export type TypographyType = 'body' | 'title' | 'headline' | 'display' | 'label';
type TypographySize = 'large' | 'medium' | 'small';
type TypographyPropertyDictionary = Map<TypographyType, Map<TypographySize, string>>;

export type TypographyProps = MUITypographyProps & {
    type: TypographyType;
    size: TypographySize;
};

export const FONT_SIZES: TypographyPropertyDictionary = new Map([
    [ 'body', new Map([
        [ 'large', "16px" ],
        [ 'medium', "14px" ],
        [ 'small', "12px" ]
    ]) as Map<TypographySize, string> ],
    [ 'label', new Map([
        [ 'large', "14px" ],
        [ 'medium', "12px" ],
        [ 'small', "11px" ]
    ]) as Map<TypographySize, string> ],
    [ 'title', new Map([
        [ 'large', "22px" ],
        [ 'medium', "16px" ],
        [ 'small', "14px" ]
    ]) as Map<TypographySize, string> ],
    [ 'headline', new Map([
        [ 'large', "32px" ],
        [ 'medium', "28px" ],
        [ 'small', "24px" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "57px" ],
        [ 'medium', "45px" ],
        [ 'small', "36px" ]
    ]) as Map<TypographySize, string> ]
]);

export const FONT_WEIGHTS: TypographyPropertyDictionary = new Map([
    [ 'body', new Map([
        [ 'large', "400" ],
        [ 'medium', "400" ],
        [ 'small', "400" ]
    ]) as Map<TypographySize, string> ],
    [ 'label', new Map([
        [ 'large', "500" ],
        [ 'medium', "500" ],
        [ 'small', "500" ]
    ]) as Map<TypographySize, string> ],
    [ 'title', new Map([
        [ 'large', "400" ],
        [ 'medium', "500" ],
        [ 'small', "500" ]
    ]) as Map<TypographySize, string> ],
    [ 'headline', new Map([
        [ 'large', "400" ],
        [ 'medium', "400" ],
        [ 'small', "400" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "400" ],
        [ 'medium', "400" ],
        [ 'small', "400" ]
    ]) as Map<TypographySize, string> ]
]);

const LINE_HEIGHTS: TypographyPropertyDictionary = new Map([
    [ 'body', new Map([
        [ 'large', "24px" ],
        [ 'medium', "20px" ],
        [ 'small', "16px" ]
    ]) as Map<TypographySize, string> ],
    [ 'label', new Map([
        [ 'large', "20px" ],
        [ 'medium', "16px" ],
        [ 'small', "16px" ]
    ]) as Map<TypographySize, string> ],
    [ 'title', new Map([
        [ 'large', "28px" ],
        [ 'medium', "24px" ],
        [ 'small', "20px" ]
    ]) as Map<TypographySize, string> ],
    [ 'headline', new Map([
        [ 'large', "40px" ],
        [ 'medium', "36px" ],
        [ 'small', "32px" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "64px" ],
        [ 'medium', "52px" ],
        [ 'small', "44px" ]
    ]) as Map<TypographySize, string> ]
]);

const LETTER_SPACINGS: TypographyPropertyDictionary = new Map([
    [ 'title', new Map([
        [ 'medium', "0.15px" ],
        [ 'small', "0.1px" ]
    ]) as Map<TypographySize, string> ],
    [ 'label', new Map([
        [ 'large', "0.1px" ],
        [ 'medium', "0.5px" ],
        [ 'small', "0.5px" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "0.15px" ],
        [ 'medium', "0.25px" ],
        [ 'small', "0.4px" ]
    ]) as Map<TypographySize, string> ]
]);

const Typography: React.FC<TypographyProps> = styled(MUITypography)<TypographyProps>(({ type, size }) => ({
    fontFamily: PSYCHSCREEN_DEFAULT_FONT_FAMILY,
    fontSize: FONT_SIZES.get(type)?.get(size),
    fontWeight: FONT_WEIGHTS.get(type)?.get(size),
    lineHeight: LINE_HEIGHTS.get(type)?.get(size),
    letterSpacing: LETTER_SPACINGS.get(type)?.get(size)
}));
export default Typography;
