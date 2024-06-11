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
  };
  
  export type cCREClass = keyof typeof cCREConstants;
  