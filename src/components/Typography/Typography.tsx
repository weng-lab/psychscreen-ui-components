/**
 * Typography.tsx: PsychSCREEN-styled typography.
 */

import styled from '@emotion/styled';
import { Typography as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material';

type TypographyType = 'body' | 'title' | 'headline' | 'display';
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
    [ 'title', new Map([
        [ 'large', "24px" ],
        [ 'medium', "22px" ],
        [ 'small', "18px" ]
    ]) as Map<TypographySize, string> ],
    [ 'headline', new Map([
        [ 'large', "32px" ],
        [ 'small', "24px" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "64px" ],
        [ 'medium', "48px" ],
        [ 'small', "36px" ]
    ]) as Map<TypographySize, string> ]
]);

export const FONT_WEIGHTS: TypographyPropertyDictionary = new Map([
    [ 'body', new Map([
        [ 'large', "500" ],
        [ 'medium', "500" ],
        [ 'small', "500" ]
    ]) as Map<TypographySize, string> ],
    [ 'title', new Map([
        [ 'large', "500" ],
        [ 'medium', "700" ],
        [ 'small', "500" ]
    ]) as Map<TypographySize, string> ],
    [ 'headline', new Map([
        [ 'large', "500" ],
        [ 'small', "700" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "500" ],
        [ 'medium', "500" ],
        [ 'small', "500" ]
    ]) as Map<TypographySize, string> ]
]);

const LINE_HEIGHTS: TypographyPropertyDictionary = new Map([
    [ 'body', new Map([
        [ 'large', "19px" ],
        [ 'medium', "17px" ],
        [ 'small', "15px" ]
    ]) as Map<TypographySize, string> ],
    [ 'title', new Map([
        [ 'large', "29px" ],
        [ 'medium', "27px" ],
        [ 'small', "22px" ]
    ]) as Map<TypographySize, string> ],
    [ 'headline', new Map([
        [ 'large', "39px" ],
        [ 'small', "32px" ]
    ]) as Map<TypographySize, string> ],
    [ 'display', new Map([
        [ 'large', "78px" ],
        [ 'medium', "58px" ],
        [ 'small', "44px" ]
    ]) as Map<TypographySize, string> ]
]);

const Typography: React.FC<TypographyProps> = styled(MUITypography)<TypographyProps>(({ type, size }) => ({
    fontFamily: 'Gilroy',
    fontSize: FONT_SIZES.get(type)?.get(size),
    fontWeight: FONT_WEIGHTS.get(type)?.get(size),
    lineHeight: LINE_HEIGHTS.get(type)?.get(size)
}));
export default Typography;
