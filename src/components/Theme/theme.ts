/**
 * theme.ts: defines the component library default color palette.
 */

import { createTheme } from '@mui/material/styles';

export const PSYCHSCREEN_DEFAULT_FONT_FAMILY = "Roboto";

export const PSYCHSCREEN_DEFAULT_THEME = createTheme({
    palette: {
        primary: {
            dark: "#000000",
            main: "#808080",
            light: "#b1b1b1"
        },
        secondary: {
            dark: "#95b7ce",
            main: "#c5d9e8",
            light: "#ddebf5"
        }
    }
});

export type Palette = "Primary" | "Secondary" | "Tertiary" | "Error" | "Neutral" | "NeutralVariant";
export type ColorTone = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100;
export type ColorPalette = Map<ColorTone, string>;
export type ThemeColorTone = "Base" | "On" | "Container" | "OnContainer" | "Background" | "OnBackground" | "Surface" | "OnSurface" | "SurfaceVariant" | "OnSurfaceVariant" | "Outline";
export type ThemePalette = Map<ThemeColorTone, string>;

export const PSYCHSCREEN_TONAL_PALETTES: Map<Palette, ColorPalette> = new Map([
    [ "Primary", new Map([
        [ 0 as ColorTone, "#000000" ],
        [ 10 as ColorTone, "#21005D" ],
        [ 20 as ColorTone, "#381E72" ],
        [ 30 as ColorTone, "#4F378B" ],
        [ 40 as ColorTone, "#6750A4" ],
        [ 50 as ColorTone, "#7F67BE" ],
        [ 60 as ColorTone, "#9A82DB" ],
        [ 70 as ColorTone, "#B69DF8" ],
        [ 80 as ColorTone, "#D0BCFF" ],
        [ 90 as ColorTone, "#EADDFF" ],
        [ 95 as ColorTone, "#F6EDFF" ],
        [ 99 as ColorTone, "#FFFBFE" ],
        [ 100 as ColorTone, "#FFFFFF" ]
    ])],
    [ "Secondary", new Map([
        [ 0 as ColorTone, "#000000" ],
        [ 10 as ColorTone, "#1D192B" ],
        [ 20 as ColorTone, "#332D41" ],
        [ 30 as ColorTone, "#4A4458" ],
        [ 40 as ColorTone, "#625B71" ],
        [ 50 as ColorTone, "#7A7289" ],
        [ 60 as ColorTone, "#958DA5" ],
        [ 70 as ColorTone, "#B0A7C0" ],
        [ 80 as ColorTone, "#CCC2DC" ],
        [ 90 as ColorTone, "#E8DEF8" ],
        [ 95 as ColorTone, "#F6EDFF" ],
        [ 99 as ColorTone, "#FFFBFE" ],
        [ 100 as ColorTone, "#FFFFFF" ]
    ])],
    [ "Tertiary", new Map([
        [ 0 as ColorTone, "#000000" ],
        [ 10 as ColorTone, "#31111D" ],
        [ 20 as ColorTone, "#492532" ],
        [ 30 as ColorTone, "#633B48" ],
        [ 40 as ColorTone, "#7D5260" ],
        [ 50 as ColorTone, "#986977" ],
        [ 60 as ColorTone, "#B58392" ],
        [ 70 as ColorTone, "#D29DAC" ],
        [ 80 as ColorTone, "#EFB8C8" ],
        [ 90 as ColorTone, "#FFD8E4" ],
        [ 95 as ColorTone, "#FFECF1" ],
        [ 99 as ColorTone, "#FFFBFA" ],
        [ 100 as ColorTone, "#FFFFFF" ]
    ])],
    [ "Error", new Map([
        [ 0 as ColorTone, "#000000" ],
        [ 10 as ColorTone, "#410E0B" ],
        [ 20 as ColorTone, "#601410" ],
        [ 30 as ColorTone, "#8C1D18" ],
        [ 40 as ColorTone, "#B3261E" ],
        [ 50 as ColorTone, "#DC362E" ],
        [ 60 as ColorTone, "#E46962" ],
        [ 70 as ColorTone, "#EC928E" ],
        [ 80 as ColorTone, "#F2B8B5" ],
        [ 90 as ColorTone, "#F9DEDC" ],
        [ 95 as ColorTone, "#FCEEEE" ],
        [ 99 as ColorTone, "#FFFBF9" ],
        [ 100 as ColorTone, "#FFFFFF" ]
    ])],
    [ "Neutral", new Map([
        [ 0 as ColorTone, "#000000" ],
        [ 10 as ColorTone, "#1C1B1F" ],
        [ 20 as ColorTone, "#313033" ],
        [ 30 as ColorTone, "#484649" ],
        [ 40 as ColorTone, "#605D62" ],
        [ 50 as ColorTone, "#787579" ],
        [ 60 as ColorTone, "#939094" ],
        [ 70 as ColorTone, "#AEAAAE" ],
        [ 80 as ColorTone, "#C9C5CA" ],
        [ 90 as ColorTone, "#E6E1E5" ],
        [ 95 as ColorTone, "#F4EFF4" ],
        [ 99 as ColorTone, "#FFFBFE" ],
        [ 100 as ColorTone, "#FFFFFF" ]
    ])],
    [ "NeutralVariant", new Map([
        [ 0 as ColorTone, "#000000" ],
        [ 10 as ColorTone, "#1D1A22" ],
        [ 20 as ColorTone, "#322F37" ],
        [ 30 as ColorTone, "#49454F" ],
        [ 40 as ColorTone, "#605D66" ],
        [ 50 as ColorTone, "#79747E" ],
        [ 60 as ColorTone, "#938F99" ],
        [ 70 as ColorTone, "#AEA9B4" ],
        [ 80 as ColorTone, "#CAC4D0" ],
        [ 90 as ColorTone, "#E7E0EC" ],
        [ 95 as ColorTone, "#F5EEFA" ],
        [ 99 as ColorTone, "#FFFBFE" ],
        [ 100 as ColorTone, "#FFFFFF" ]
    ])]
]);

export const PSYCHSCREEN_LIGHT_THEME: Map<Palette, ThemePalette> = new Map([
    [ "Primary", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(40)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(100)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(90)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(10)! ],
    ])],
    [ "Secondary", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(40)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(100)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(90)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(10)! ],
    ])],
    [ "Tertiary", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(40)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(100)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(90)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(10)! ],
    ])],
    [ "Error", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(40)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(100)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(90)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(10)! ],
    ])],
    [ "Neutral", new Map([
        [ "Background" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(99)! ],
        [ "OnBackground" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(10)! ],
        [ "Surface" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(99)! ],
        [ "OnSurface" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(10)! ],
    ])],
    [ "NeutralVariant", new Map([
        [ "SurfaceVariant" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("NeutralVariant")!.get(90)! ],
        [ "OnSurfaceVariant" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("NeutralVariant")!.get(30)! ],
        [ "Outline" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("NeutralVariant")!.get(50)! ]
    ])],
]);

export const PSYCHSCREEN_DARK_THEME: Map<Palette, ThemePalette> = new Map([
    [ "Primary", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(80)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(20)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(30)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(90)! ],
    ])],
    [ "Secondary", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(80)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(20)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(30)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Secondary")!.get(90)! ],
    ])],
    [ "Tertiary", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(80)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(20)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(30)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Tertiary")!.get(90)! ],
    ])],
    [ "Error", new Map([
        [ "Base" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(80)! ],
        [ "On" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(20)! ],
        [ "Container" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(30)! ],
        [ "OnContainer" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Error")!.get(90)! ],
    ])],
    [ "Neutral", new Map([
        [ "Background" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(10)! ],
        [ "OnBackground" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(90)! ],
        [ "Surface" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(10)! ],
        [ "OnSurface" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("Neutral")!.get(80)! ],
    ])],
    [ "NeutralVariant", new Map([
        [ "SurfaceVariant" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("NeutralVariant")!.get(30)! ],
        [ "OnSurfaceVariant" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("NeutralVariant")!.get(80)! ],
        [ "Outline" as ThemeColorTone, PSYCHSCREEN_TONAL_PALETTES.get("NeutralVariant")!.get(60)! ]
    ])],
]);
