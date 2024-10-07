import { default as React } from '../../../node_modules/react';
import { SliderProps as MuiSliderProps } from '@mui/material/Slider';
export type SliderProps = MuiSliderProps & {
    title: string;
    width: number | string;
    defaultStart?: number;
    defaultEnd?: number;
    minDistance?: number;
    onSliderChange?: (value: number[]) => void;
    onSliderChangeCommitted?: (value: number[]) => void;
    value?: number[];
};
declare const RangeSlider: React.FC<SliderProps>;
export default RangeSlider;
