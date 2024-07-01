export interface Edge {
    from: string;
    to: string;
    effectSize: number;
    expressionImpact?: string;
  }
  
  export interface Node {
    id: string;
   category: string;
   info?:{};
  }
  
  export interface GraphProps {
    data: {
      edge: Edge[], node: Node[], centered: {id: string}
    },
    title?: string,
    id: number | string,
    width?: string,
    height?: string,
    scale?: (n: number) => number,
    getLabel?: (node: Node) => string,
  }


  export type ToolTipData =  {
    cCRE?: string;
    type: string;
    centered?: string;
  }