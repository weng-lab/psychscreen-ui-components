/**
 * Slider.tsx: provides PsychSCREEN-styled Sliders.
 */

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Slider from '@mui/material/Slider';
import { SliderProps as MuiSliderProps } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

/*
TODO: Have a browser popup when an invalid number is chosen
      Add functionality for an overlaid histogram
*/

export type SliderProps = MuiSliderProps & {
  title: string;
  width: number | string;
  defaultStart: number;
  defaultEnd: number;
  //Could do more strict input checking here by checking the min/max of the slider
  minDistance?: number;
  onSliderChange?: (value: number[]) => void;
  onSliderChangeCommitted?: (value: number[]) => void;
};

function valuetext(value: number) {
  return `${value}`;
}

const RangeSlider: React.FC<SliderProps> = (props: SliderProps) => {
  //value that the slider uses
  const [value, setValue] = React.useState<number[]>(
    [props.defaultStart, props.defaultEnd]
  );

  // Triggers when component updates, allows the value to be extraced in an onChange() function
  useEffect(() => {
    props.onSliderChange && props.onSliderChange(value);
  })

  //Check if declared, if not set to MUI slider defaults
  const sliderMin = props.min ? props.min : 0
  const sliderMax = props.max ? props.max : 100
  const sliderStep = props.step ? props.step : 0.01

  //Unless specified, the minimum distance between sliders is 0
  const minDistance = props.minDistance ? props.minDistance : 0;

  //temp value for input validation. It's what the text boxes display
  const [tempValue, setTempValue] = React.useState<Array<Number | String>>(
    [value[0], value[1]]
  );

  const handleSetTempValue0 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue([event.target.value, value[1]])
  }

  const handleSetTempValue1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue([value[0], event.target.value])
  }

  //Value change from using slider
  const handleSliderChange = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      //If activeThumb is Thumb 0, then set the first value. Use toFixed to eliminate floating point math errors
      setValue([Number(Math.min(newValue[0], value[1] - minDistance).toFixed(5)), value[1]]);
      setTempValue([Number(Math.min(newValue[0], value[1] - minDistance).toFixed(5)), value[1]]);
    } else {
      //If activeThumb is Thumb 1, then set the second value. Use toFixed to eliminate floating point math errors
      setValue([value[0], Number(Math.max(newValue[1], value[0] + minDistance).toFixed(5))]);
      setTempValue([value[0], Number(Math.max(newValue[1], value[0] + minDistance).toFixed(5))]);
    }
  };

  const handleSliderChangeCommited = () => {props.onSliderChangeCommitted && props.onSliderChangeCommitted(value)}


  //On a user pressing enter, decides if the temp value is valid and posts it, or corrects the temp value
  const handleInputEnter0 = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const newTempValue0: number = Number(tempValue[0]);
    const curValue1: number = value[1]

    if (event.key == "Enter") {
      //If the temp value is valid, set the true slider value
      if (newTempValue0 <= (curValue1 - minDistance) && newTempValue0 >= sliderMin) {
        setValue([newTempValue0, curValue1])
      }
      //If the value is too close to the other slider, reset the TempValue
      if (newTempValue0 > (curValue1 - minDistance)) {
        setTempValue([value[0], curValue1])
      }
      //If the value is below sliderMin, reset the tempValue
      if (newTempValue0 < sliderMin) {
        setTempValue([value[0], curValue1])
      }
    }
  };

  //Handles the user clicking away, decides if the temp value is valid and posts it, or corrects the temp value
  const handleBlur0 = () => {
    const newTempValue0: number = Number(tempValue[0]);
    const curValue1: number = value[1]

    //If the temp value is valid, set the true slider value
    if (newTempValue0 <= (curValue1 - minDistance) && newTempValue0 >= sliderMin) {
      setValue([newTempValue0, curValue1])
    }
    //If the value is too close to the other slider, reset the TempValue
    if (newTempValue0 > (curValue1 - minDistance)) {
      setTempValue([value[0], curValue1])
    }
    //If the value is below sliderMin, reset the tempValue
    if (newTempValue0 < sliderMin) {
      setTempValue([value[0], curValue1])
    }
  };

  //On a user pressing enter, decides if the temp value is valid and posts it, or corrects the temp value
  const handleInputEnter1 = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const curValue0: number = value[0]
    const newTempValue1: number = Number(tempValue[1]);

    if (event.key == "Enter") {
      //If the temp value is valid, set the true slider value
      if (newTempValue1 >= (curValue0 + minDistance) && newTempValue1 <= sliderMax) {
        setValue([curValue0, newTempValue1])
        // props.onSliderChange && props.onSliderChange(value)
      }
      //If the value is too close to the other slider, reset the TempValue
      if (newTempValue1 < (curValue0 + minDistance)) {
        setTempValue([curValue0, value[1]])
      }
      //If the value is above sliderMax, reset the tempValue
      if (newTempValue1 > sliderMax) {
        setTempValue([curValue0, value[1]])
      }
    }
  };

  //Handles the user clicking away, decides if the temp value is valid and posts it, or corrects the temp value
  const handleBlur1 = () => {
    //This should be able to be set as either tempValue or Value
    const curValue0: number = value[0]
    const newTempValue1: number = Number(tempValue[1]);

    //If the temp value is valid, set the true slider value
    if (newTempValue1 >= (curValue0 + minDistance) && newTempValue1 <= sliderMax) {
      setValue([curValue0, newTempValue1])
      // props.onSliderChange && props.onSliderChange(value)
    }
    //If the value is too close to the other slider, reset the TempValue
    if (newTempValue1 < (curValue0 + minDistance)) {
      setTempValue([curValue0, value[1]])
    }
    //If the value is above sliderMax, reset tempValue
    if (newTempValue1 > sliderMax) {
      setTempValue([curValue0, value[1]])
    }
  };

  return (
    <Box sx={{ width: props.width }}>
      <Typography>{props.title}</Typography>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommited}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        {...props}
      />
      <Grid2 container spacing={1}>
        <Grid2 xs={5.5}>
          <TextField
            value={tempValue[0]}
            size='small'
            fullWidth
            variant='outlined'
            onChange={handleSetTempValue0}
            onBlur={handleBlur0}
            onKeyDown={handleInputEnter0}
            inputProps={{
              variant: 'outlined',
              type: 'text',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid2>
        <Grid2 xs={1} sx={{display: "inline-grid", alignItems: "center"}}>
          <Typography sx={{justifySelf: "center"}}>
            –
          </Typography>
        </Grid2>
        <Grid2 xs={5.5}>
          <TextField
            value={tempValue[1]}
            size='small'
            fullWidth
            variant='outlined'
            onChange={handleSetTempValue1}
            onBlur={handleBlur1}
            onKeyDown={handleInputEnter1}
            inputProps={{
              type: 'text',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default RangeSlider;