export interface Edge {
    from: string;
    to: string;
    effectSize: number;
    category?: string;
  }
  
  export interface Node {
    id: string;
   category: string;
   color?: string;
   info?:{
    [key: string]: any
   };
  }
  
  export interface GraphProps {
    data: {
      edge: Edge[], node: Node[], centered: {id: string}
    },
    id: number | string,
    title?: string,
    width?: string,
    height?: string,
    scale?: (n: number) => number,
    getLabel?: (node: Node) => string,
    getColor?: (node: Node | Edge) => string,
  }


  export type ToolTipData =  {
    cCRE?: string;
    type: string;
    centered?: string;
  }