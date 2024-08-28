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
    // optional naming convention for the legend toggles based on node or edge
    legendToggle?: (node: Node | Edge) => string, 
    legendNodeLabel?: string, 
    legendEdgeLabel?: string,
<<<<<<< Updated upstream
    order?: string[],
=======
    // optional ordering of nodes in legend, only can be done by the node category
    order?: string[], 
    // optional fontFamily prop for font for entire graph
    fontFamily?: string, 
    onNodeClick?: (n: any) => any,
    onEdgeClick?: (n: any) => any,
    directional?: boolean,
    scaleLabel?: string,
>>>>>>> Stashed changes
  }


  export type ToolTipData =  {
    id?: string;
    type: string;
    centered?: string;
  }

