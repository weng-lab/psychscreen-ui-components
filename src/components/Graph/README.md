# Graph Component Documentation

This graph component was designed to be generic enough to be used in multiple use cases so this documentation provides information needed to properly use this graph component.

## Graph Component Types:

### Edge:

```bash
export interface Edge {
    from: string;
    to: string;
    effectSize: number;
    category?: string;
    id: number;
}
```

Edge’s have mandatory from, to, effectSize, and id properties. They also have an optional category property. If edge’s do not have a category they will be classified as a regular Edge.

### Node:

```bash
export interface Node {
    id: string;
    category: string;
    color?: string;
    info?:{
    [key: string]: any
};
```

Node’s have mandatory id and category properties. They also have optional color and info properties where info can be an object with multiple key-value pairs. This is useful when determining color/label functions entered into the graph component if you want to categorize by other information. If node’s do not have a color property they default to grey.

## Graph Component Props

```bash
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
    onNodeClick?: (n: any) => any,
    onEdgeClick?: () => any,
    directional?: boolean,
    scaleLabel?: string,
}
```

### This graph has many different properties:

- **data**: a mandatory object passing in the data which has two mandatory properties, **edge** and **node** which are arrays of Edge’s and Node’s. There is an optional centered object if there is a **centered** node and the ID of that centered node is in this object. This must be the format of the data being passed in.
- **id**: a mandatory number or string which ensures the graph has a unique id from other graphs. This is in the case that multiple graphs may be displayed on the same page.
- **title**: optional string for the title of the graph
- **height & width**: optional string for height and width values for the graph
- **scale**: optional scale function to be used on each edge’s effectSize for user friendliness. Default is set to: `const defaultScale = (n: number) => 10 * Math.log(n * 4 + 1);`
- **getLabel**: optional labeling function for each node based on the node. Node labels are it’s ID by default.
- **getColor**: optional color function for each node or edge
- **legendToggle**: optional naming convention for the legend toggles based on node or edge
- **legendNodeLabel & legendEdgeLabel**: optional legend titles for nodes and edges. Defaults are set to: Node Type and Edge Type.
- **order**: an optional ordering of the nodes in the legend only based on node category.
- **fontFamily**: optional fontFamily convention across the entire graph & control panel
- **onNodeClick**: optional function to be applied on node click with input (where handle open cCRE happens in SCREEN)
- **onEdgeClick**: optional function to be applied on edge click without any input
- **directional**: optional boolean to determine if edges should be directional (with arrows) or not. Default set to false.
- **scaleLabel**: optional label for scale’s formula. Default parses through an inline function given. (ex. `(n: number) => Math.log(n) ` would return `log(n)`)

## Example Function Inputs

Here are some example inputs of functions for certain graph properties to make it easier to understand. These are also the functions currently being used for the cCRE graph in SCREEN

### getColor:

```bash
function setColor(node: Node | Edge): string {
    if (node.category !== undefined) {
        switch (node.category) {
            case 'PLS':
        return '#FF0000';
            case 'dELS':
        return '#FFCD00';
            case 'pELS':
        return '#FFA700';
            case 'CA-CTCF':
        return '#00B0F0';
            case 'CA-H3K4me3':
        return '#ffaaaa';
            case 'CA-TF':
        return '#be28e5';
            case 'Low-DNase':
        return '#e1e1e1';
            case 'lower-expression':
        return 'black';
            case 'higher-expression':
        return 'blue';
        default:
            return 'grey';
        }
    }
return 'grey';
}
```

Make sure to check if node.category exists because node could actually be of type Edge which may not have a category. You can also use switch cases on certain node information passed in instead of category if you would like to alter color based on that.

### legendToggle:

```bash
function convertToSimple(node: Node | Edge): string {
    if (node.category) {
        switch (node.category) {
            case 'PLS':
        return 'Promoter';
            case 'dELS':
        return 'Distal Enhancer';
            case 'pELS':
        return 'Proximal Enhancer';
            case 'CA-CTCF':
        return 'Chromatin Accessible + CTCF';
            case 'CA-H3K4me3':
        return 'Chromatin Accessible + H3K4me3';
            case 'CA-TF':
        return 'Chromatin Accessible + Transcription Factor';
            case 'Low-DNase':
        return 'Low DNase';
            case 'CA-only':
        return 'Chromatin Accessible';
            case 'lower-expression':
        return 'Lower-Expression';
            case 'higher-expression':
        return 'Higher-Expression';
        default:
            return node.category;
        }
    }
    return 'Edge';
}
```

This provides an easier, more readable legend for the user while still including the given category. This will also be used in the tooltip if passed in, else it will just use the original category name. Again check if node.category exists incase node is actually type Edge, or do not use legendToggle based on category.

### scale:

```bash
const createScaleFunction = (min: number, max: number) => {
    return (n: number) => {
        const minWidth = 0.5
        const maxWidth = 5
        if (min === max) {
            return minWidth
        }
        return minWidth + ((n - min) / (max - min)) * (maxWidth - minWidth)
    }
}

let min = data.data.edge[0].effectSize
let max = data.data.edge[0].effectSize

data.data.edge.forEach((e) => {
    if (e.effectSize > max) {
        max = e.effectSize
    } else if (e.effectSize < min) {
        min = e.effectSize
    }
})


const scaleFunction = createScaleFunction(min, max)
```

Here is an optional scaling function based on the given data’s minimum and maximum. 0.5 is min edge weight and 5 is max edge weight which can be changed to the user's liking. This is good for SCREEN where the formula changes based on each cCRE’s data.

### order

For order, enter a string array of the different node categories in the order you want them presented in the legend. For example the order passed in for the cCRE Graph in SCREEN is : `["PLS", "pELS", "dELS", "CA-H3K4me3", "CA-CTCF", "CA-TF", "CA-only", "TF", "Low-DNase"]`. Right now, order is only coded to be based on node category. This could be updated in the future.

### Inputs in cCRE Graph in SCREEN

Below are the inputs for the graph in SCREEN for clarification on other possible inputs.

```bash
 return (
    <Graph
      data={data.data}
      id={id}
      scale={(n: number) => scaleFunction(n)}
      legendNodeLabel="cCRE Type"
      legendToggle={convertToSimple}
      getColor={setColor}
      order={["PLS", "pELS", "dELS", "CA-H3K4me3", "CA-CTCF", "CA-TF", "CA-only", "TF", "Low-DNase"]}
      onNodeClick={handleOpencCRE}
      directional={false}
      scaleLabel={"0.5 + ((n - min) / (max - min)) * 4.5"}
    />
  )
```

## Converting Fetched Data into Data for Graph

This is useful for the cCRE Graph in SCREEN but also can be useful in similar cases so no code needs to be rewritten. Transforming from the fetched data from GraphQL to the old format data that the graph takes in requires the types below. All this code can be found in ccre-graph in SCREEN2.0 repo.

```bash
type NewEdge = {
    source: string
    destination: string
    distance: number
    path: string
    weights: string
}

type NewNode = {
    accession: string
    ccre_group: string
}

type OldFormat = {
    data: {
    edge: Edge[]
    node: Node[]
    centered: { id: string }
    }
}
```

The functions to fetch RNAPII and CTCF data specifically can be found in SCREEN2.0 repo under ccre-graph.
Here is the function which converts from the fetched data to the data being imputed into the Graph component:

```bash
const convertData = (newEdges: NewEdge[], newNodes: NewNode[], cCRE: string, id: number): OldFormat => {
const nodes: { [key: string]: { id: string; category: string } } = {}
const edges: Edge[] = []
const edgeMap = new Map<string, Edge>()

function findGroup(str: string): string {
const node = newNodes.find((node) => node.accession === str)
return node ? node.ccre_group : ""
}

newEdges.forEach((entry) => {
const { path, weights } = entry
const pathNodes = path.split("->").filter(Boolean)
const scaleValues = weights.split("->").filter(Boolean).map(parseFloat)

for (let i = 0; i < pathNodes.length - 1; i++) {
const from = pathNodes[i]
const to = pathNodes[i + 1]
const effectSize = scaleValues[i]

     if (!nodes[from]) {
       nodes[from] = {
         id: from,
         category: findGroup(from),
       }
     }


     if (!nodes[to]) {
       nodes[to] = {
         id: to,
         category: findGroup(to),
       }
     }


     const edgeKey = `${from}-${to}-${effectSize}`


     if (!edgeMap.has(edgeKey)) {
       const edge = {
         from,
         to,
         effectSize,
         id,
       }
       edgeMap.set(edgeKey, edge)
       id++
     }


     edges.push(edgeMap.get(edgeKey)!)

}
})

const uniqueEdges = Array.from(new Set(edges.map((a) => a.id)))
.map((id) => edges.find((a) => a.id === id))
.filter((edge): edge is Edge => edge !== undefined)

return {
    data: {
        edge: uniqueEdges,
        node: Object.values(nodes),
        centered: { id: cCRE },
    },
}
}
```

Code in SCREEN combining two fetched data and then inputting into graph in proper format:

```bash
const fetchedDataRNA = await fetchDataRNA(accession, celltype, degreeOfSeparation)
const fetchedDataCTCF = await fetchDataCTCF(accession, celltype, degreeOfSeparation, "CTCF-ChIAPET")

       const convertedDataRNA = convertData(fetchedDataRNA.ccrelinks, fetchedDataRNA.ccrenodegroups, accession, 1)
       const convertedDataCTCF = convertData(
         fetchedDataCTCF.ccrelinks,
         fetchedDataCTCF.ccrenodegroups,
         accession,
         convertedDataRNA.data.edge.length + 1
       )


       const allEdges = [
         ...convertedDataRNA.data.edge.map((edge) => ({
           ...edge,
           category: "RNAPII-ChIAPET",
         })),
         ...convertedDataCTCF.data.edge.map((edge) => ({
           ...edge,
           category: "CTCF-ChIAPET",
         })),
       ]


       const allNodes = [
         ...convertedDataRNA.data.node,
         ...convertedDataCTCF.data.node.filter((node) => !convertedDataRNA.data.node.some((n) => n.id === node.id)),
       ]


       setData({
         data: {
           edge: allEdges,
           node: allNodes,
           centered: { id: accession },
         },
       })
```
