export interface Edge {
    from: string;
    to: string;
    effectSize: number;
    category?: string;
    id: number;
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
    legendToggle?: (node: Node | Edge) => string,
    legendNodeLabel?: string, 
    legendEdgeLabel?: string,
    order?: string[],
    fontFamily?: string,
    onNodeClick?: (n: { accession: string; start: number; end: number; chromosome: string }) => any,
    directional?: boolean,
    scaleLabel?: string,
  }



  export type ToolTipData =  {
    id?: string;
    type: string;
    centered?: string;
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
      edge: Edge[];
      node: Node[];
      centered: {id: string};
    };
  };

