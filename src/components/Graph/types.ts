export interface Edge {
    from: string;
    to: string;
    effectSize: number;
    expressionImpact?: string;
  }
  
  export interface Node {
    id: string;
    info?: {category: string};
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
  }

  export interface GraphPropsWithData {
    accession: string;
    celltype: string;
    degreeOfSeparation: number;
    id: number,
  }

  export type NewEdge = {
    source: string;
    destination: string;
    distance: number;
    path: string;
    weights: string;
  };

  export type NewNode = {
    accession: string;
    ccre_group: string;
  };
  

  export type OldFormat = {
    data: {
      node: Node[];
      edge: Edge[];
      centered: {cCRE: string};
    };
  };

  export type ToolTipData =  {
    cCRE?: string;
    type: string;
    centered?: string;
  }