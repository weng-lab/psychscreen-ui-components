import { CSSProperties } from "react";

export const cCREConstants = {
    "Promoter": { label: "Pr", color: "#FF0000" },
    "Distal Enhancer": { label: "D.E.", color: "#FFCD00" },
    "Proximal Enhancer": { label: "P.E.", color: "#FFA700" },
    "Transcription Factor": { label: "TF", color: "#d876ec" },
    "Chromatin Accessible + Transcription Factor": { label: "CA+TF", color: "#be28e5" },
    "Chromatin Accessible + CTCF": { label: "CA+CTCF", color: "#00B0F0" },
    "Chromatin Accessible + H3K4me3": { label: "CA+H3K4me3", color: "#ffaaaa" },
    "Lower-Expression": { label: "Edge", color: "#000000" },
    "Higher-Expression": { label: "Edge", color: "#0000FF" },
    "Edge": { label: "Edge", color: "grey"},
  };
  
  export type cCREClass = keyof typeof cCREConstants;
  
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