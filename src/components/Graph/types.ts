export interface Edge {
    perturbed: string;
    target: string;
    effectSize: number;
    expressionImpact?: string;
  }
  
  export interface Node {
    cCRE: string;
    category: string;
  }
  
  export interface GraphProps {
    data: {
      edge: Edge[], node: Node[], centered: {cCRE: string}
    },
    title?: string,
    id: number | string,
    width?: string,
    height?: string,
  }
