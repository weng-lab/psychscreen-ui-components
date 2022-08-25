import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { PSYCHSCREEN_LIGHT_THEME, PSYCHSCREEN_DARK_THEME, PSYCHSCREEN_TONAL_PALETTES, PSYCHSCREEN_DEFAULT_FONT_FAMILY, Typography } from '../src';
import "../src/App.css";
import { ColorPalette, ColorTone, Palette, ThemeColorTone, ThemePalette } from '../src/constants/theme';

const TONES: ColorTone[] = [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100 ];
const PALETTES: Palette[] = [ "Primary", "Secondary", "Tertiary", "Error", "Neutral", "NeutralVariant" ];
type View = "palettes" | "light-theme" | "dark-theme";

const TonalPaletteDemo: React.FC<{ palette: Palette }> = ({ palette }) => (
  <div style={{ marginBottom: "20px" }}>
    <div style={{ display: "inline-block", width: "120px" }}>
      <Typography type="body" size="medium">{palette}</Typography>
    </div>
    { TONES.map(tone => (
      <div style={{
        display: "inline-block",
        width: "61px",
        height: "108px",
        textAlign: "center",
        backgroundColor: PSYCHSCREEN_TONAL_PALETTES.get(palette)?.get(tone)!,
        color: tone <= 50 ? "#ffffff" : "#000000"
      }}>
        <Typography type="body" size="medium">{tone}</Typography>
      </div>
    ))}
  </div>
);

const ThemeDemo: React.FC<{ theme: Map<Palette, ThemePalette>, palette: Palette }> = ({ theme, palette }) => palette === "Neutral" ? (
  <div style={{ marginBottom: "20px" }}>
    <div style={{ display: "inline-block", width: "120px" }}>
      <Typography type="body" size="medium">{palette}</Typography>
    </div>
    { [ "Background", "OnBackground", "Surface", "OnSurface" ].map(tone => (
      <div style={{
        display: "inline-block",
        width: "216px",
        height: "108px",
        backgroundColor: theme.get(palette)?.get(tone as ThemeColorTone)!,
        color: "#888888"
      }}>
        <Typography type="body" size="medium">{tone}</Typography>
      </div>
    ))}
  </div>
) : palette === "NeutralVariant" ? (
  <div style={{ marginBottom: "20px" }}>
    <div style={{ display: "inline-block", width: "120px" }}>
      <Typography type="body" size="medium">{palette}</Typography>
    </div>
    { [ "SurfaceVariant", "OnSurfaceVariant", "Outline" ].map(tone => (
      <div style={{
        display: "inline-block",
        width: tone === "Outline" ? "432px" : "216px",
        height: "108px",
        backgroundColor: theme.get(palette)?.get(tone as ThemeColorTone)!,
        color: "#888888"
      }}>
        <Typography type="body" size="medium">{tone}</Typography>
      </div>
    ))}
  </div>
) : (
  <div style={{ marginBottom: "20px" }}>
    <div style={{ display: "inline-block", width: "120px" }}>
      <Typography type="body" size="medium">{palette}</Typography>
    </div>
    { [ "Base", "On", "Container", "OnContainer" ].map(tone => (
      <div style={{
        display: "inline-block",
        width: "216px",
        height: "108px",
        backgroundColor: theme.get(palette)?.get(tone as ThemeColorTone)!,
        color: "#888888"
      }}>
        <Typography type="body" size="medium" style={{ marginLeft: "5px", marginTop: "5px" }}>{tone}</Typography>
      </div>
    ))}
  </div>
);

const Demo: React.FC<{ view: View }> = ({ view }) => view === "palettes" ? (
  <div>
    { PALETTES.map(palette => <TonalPaletteDemo palette={palette} />) }
  </div>
) : view === "dark-theme" ? (
  <div>
    { PALETTES.map(palette => <ThemeDemo theme={PSYCHSCREEN_DARK_THEME} palette={palette} />) }
  </div>
) : (
  <div>
    { PALETTES.map(palette => <ThemeDemo theme={PSYCHSCREEN_LIGHT_THEME} palette={palette} />) }
  </div>
);

const meta: Meta = {
  title: 'Themes',
  component: Demo,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<{ view: View }> = args => (
  <Demo view={args.view} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Palettes = Template.bind({});
export const DarkTheme = Template.bind({});
export const LightTheme = Template.bind({});

Palettes.args = { view: "palettes" };
DarkTheme.args = { view: "dark-theme" };
LightTheme.args = { view: "light-theme" };
