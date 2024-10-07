/**
 * theme.ts: defines the component library default color palette.
 */
export declare const PSYCHSCREEN_DEFAULT_FONT_FAMILY = "Roboto";
export declare const PSYCHSCREEN_DEFAULT_THEME: import('@mui/material').Theme;
export type Palette = "Primary" | "Secondary" | "Tertiary" | "Error" | "Neutral" | "NeutralVariant";
export type ColorTone = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100;
export type ColorPalette = Map<ColorTone, string>;
export type ThemeColorTone = "Base" | "On" | "Container" | "OnContainer" | "Background" | "OnBackground" | "Surface" | "OnSurface" | "SurfaceVariant" | "OnSurfaceVariant" | "Outline";
export type ThemePalette = Map<ThemeColorTone, string>;
export declare const PSYCHSCREEN_TONAL_PALETTES: Map<Palette, ColorPalette>;
export declare const PSYCHSCREEN_LIGHT_THEME: Map<Palette, ThemePalette>;
export declare const PSYCHSCREEN_DARK_THEME: Map<Palette, ThemePalette>;
