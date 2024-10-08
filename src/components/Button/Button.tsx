/**
 * Button.tsx: provides PsychSCREEN-styled buttons.
 */

import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  styled,
} from '@mui/material';
import {
  PSYCHSCREEN_DEFAULT_FONT_FAMILY,
  PSYCHSCREEN_TONAL_PALETTES,
} from '../Theme/theme';
import { FONT_WEIGHTS, FONT_SIZES } from '../Typography/Typography';

export type ButtonVariant =
  | 'filled'
  | 'outlined'
  //Jonathan 10/8/24 - commenting these out since they cause an error. Other button variants are missing from theme maps below
  // | 'text'
  // | 'elevated'
  // | 'tonal';
export type ButtonState =
  | ''
  | '&:active'
  | '&:focus'
  | '&:hover'
  | '&:pressed'
  | '&:disabled';

export type ButtonStyling = {
  backgroundColor: string;
  color: string;
  opacity?: number;
  boxShadow?: string;
  border?: string;
  fontWeight?: number;
};

export type ButtonProps = MUIButtonProps & {
  btheme: 'light' | 'dark';
  bvariant: ButtonVariant;
};

export type ButtonTheme = Map<ButtonState, ButtonStyling>;

export const PSYCHSCREEN_BUTTON_LIGHT_THEME: Map<ButtonVariant, ButtonTheme> =
  new Map([
    [
      'filled',
      new Map([
        [
          '' as ButtonState,
          {
            backgroundColor: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
            color: '#ffffff',
          },
        ],
        [
          '&:hover' as ButtonState,
          {
            backgroundColor: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
            color: '#ffffff',
            boxShadow:
              '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          },
        ],
        [
          '&:focus' as ButtonState,
          {
            backgroundColor: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
            color: '#ffffff',
          },
        ],
        [
          '&:pressed' as ButtonState,
          {
            backgroundColor: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
            color: '#ffffff',
          },
        ],
        [
          '&:disabled' as ButtonState,
          {
            backgroundColor: 'rgba(31, 31, 31, 0.12)',
            color: '#1C1B1F',
            opacity: 0.38,
          },
        ],
      ]),
    ],
    [
      'outlined',
      new Map([
        [
          '' as ButtonState,
          {
            border: `1px solid ${PSYCHSCREEN_TONAL_PALETTES.get(
              'NeutralVariant'
            )!.get(50)!}`,
            backgroundColor:
              PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(100)!,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
          },
        ],
        [
          '&:hover' as ButtonState,
          {
            border: `1px solid ${PSYCHSCREEN_TONAL_PALETTES.get(
              'NeutralVariant'
            )!.get(50)!}`,
            backgroundColor: '#F2F2F2',
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
          },
        ],
        [
          '&:focus' as ButtonState,
          {
            border: '1px solid #000000',
            backgroundColor: 'rgba(103, 80, 164, 0.12)',
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
            fontWeight: 500,
          },
        ],
        [
          '&:pressed' as ButtonState,
          {
            backgroundColor: 'rgba(103, 80, 164, 0.12)',
            border: `1px solid ${PSYCHSCREEN_TONAL_PALETTES.get(
              'NeutralVariant'
            )!.get(50)!}`,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(0)!,
            fontWeight: 500,
          },
        ],
        [
          '&:disabled' as ButtonState,
          {
            backgroundColor: '#ffffff',
            border: '1px solid rgba(31, 31, 31, 0.12)',
            color: '#1C1B1F',
            opacity: 0.38,
            fontWeight: 500,
          },
        ],
      ]),
    ],
  ]);

export const PSYCHSCREEN_BUTTON_DARK_THEME: Map<ButtonVariant, ButtonTheme> =
  new Map([
    [
      'filled',
      new Map([
        [
          '' as ButtonState,
          {
            backgroundColor:
              PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(20)!,
          },
        ],
        [
          '&:hover' as ButtonState,
          {
            backgroundColor:
              PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(20)!,
          },
        ],
        [
          '&:focus' as ButtonState,
          {
            backgroundColor:
              PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(20)!,
          },
        ],
        [
          '&:pressed' as ButtonState,
          {
            backgroundColor:
              PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(20)!,
          },
        ],
        [
          '&:disabled' as ButtonState,
          {
            backgroundColor: 'rgba(227, 227, 227, 0.12)',
            color: '#E6E1E5',
            opacity: 0.38,
          },
        ],
      ]),
    ],
    [
      'outlined',
      new Map([
        [
          '' as ButtonState,
          {
            border: `1px solid ${PSYCHSCREEN_TONAL_PALETTES.get(
              'NeutralVariant'
            )!.get(60)!}`,
            backgroundColor: '#1F1F1F',
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
          },
        ],
        [
          '&:hover' as ButtonState,
          {
            border: `1px solid ${PSYCHSCREEN_TONAL_PALETTES.get(
              'NeutralVariant'
            )!.get(60)!}`,
            backgroundColor: 'rgba(208, 188, 255, 0.12)',
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            fontWeight: 500,
          },
        ],
        [
          '&:focus' as ButtonState,
          {
            border: '1px solid #000000',
            backgroundColor: 'rgba(208, 188, 255, 0.12)',
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            fontWeight: 500,
          },
        ],
        [
          '&:pressed' as ButtonState,
          {
            backgroundColor: 'rgba(208, 188, 255, 0.12)',
            border: `1px solid ${PSYCHSCREEN_TONAL_PALETTES.get(
              'NeutralVariant'
            )!.get(80)!}`,
            color: PSYCHSCREEN_TONAL_PALETTES.get('Primary')!.get(80)!,
            fontWeight: 500,
          },
        ],
        [
          '&:disabled' as ButtonState,
          {
            backgroundColor: '#ffffff',
            border: '1px solid rgba(227, 227, 227, 0.12)',
            color: '#1F1F1F',
            opacity: 0.38,
            fontWeight: 500,
          },
        ],
      ]),
    ],
  ]);

const Button = styled(MUIButton)<ButtonProps>(
  ({ bvariant, btheme: ttheme }) => {
    const theme =
      ttheme === 'light'
        ? PSYCHSCREEN_BUTTON_LIGHT_THEME
        : PSYCHSCREEN_BUTTON_DARK_THEME;
    return {
      borderRadius: '100px',
      ...theme.get(bvariant)!.get(''),
      fontFamily: PSYCHSCREEN_DEFAULT_FONT_FAMILY,
      fontSize: FONT_SIZES.get('body')?.get('medium'),
      fontWeight: FONT_WEIGHTS.get('body')?.get('medium'),
      fontVariantCaps: 'normal',
      '&:active': theme.get(bvariant)?.get('&:active'),
      '&:focus': theme.get(bvariant)?.get('&:focus'),
      '&:hover': theme.get(bvariant)?.get('&:hover'),
      '&:pressed': theme.get(bvariant)?.get('&:pressed'),
      '&:disabled': theme.get(bvariant)?.get('&:disabled'),
    };
  }
);
export default Button;
