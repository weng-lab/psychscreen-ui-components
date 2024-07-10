import { CSSProperties } from "react";
  
  export const buttonStyle: CSSProperties = {
    position: 'absolute',
    zIndex: 1000,
    margin: '2px',
    border: '0px',
    backgroundColor: '#0095ff',
    borderRadius: '3px',
    boxShadow: 'rgba(255, 255, 255, .4) 0 1px 0 0 inset',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    fontFamily:
      '-apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif',
    fontSize: '12px',
    outline: 'none',
    padding: '7px .8em',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.3s, color 0.3s',
  };

  export const downloadStyle = {
    ...buttonStyle,
    top: '0px',
    right: '5px',
  };

  export const randomizeStyle = {
    ...buttonStyle,
    top: '45px',
    right: '5px',
  };

  export const organizeStyle = {
    ...buttonStyle,
    top: '90px',
    right: '5px',
  };

  export const toggleControlsStyle = {
    ...buttonStyle,
    top: '0px',
    padding: '3px',
    backgroundColor: 'white',
    color: '#0095ff',
  };

  export const labelStyle = {
    ...buttonStyle,
    top: '135px',
    right: '5px',
  };
