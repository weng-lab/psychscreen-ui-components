export interface Edge {
    perturbed: string;
    target: string;
    effectSize: number;
    expressionImpact: string;
  }
  
  export interface Node {
    cCRE: string;
    category: string;
    simple: string;
  }
  
  export interface GraphProps {
    data: {
        data: any; edge: Edge[], node: Node[] 
    },
    title?: string,
    id: number | string,
    width?: string,
    height?: string,
  }
  