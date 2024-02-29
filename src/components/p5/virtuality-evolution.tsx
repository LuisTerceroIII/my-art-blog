import { ReactP5Wrapper } from "react-p5-wrapper";

type Node = {
  position?: { x: number; y: number; z: number };
  neighbors?: number[];
  size?: number;
  color?: string;
};

let nodes: Node[] = [];
let maxNodes = 80;
let edgeProbability = 0.0001; // Menos probabilidad de aristas
let minNodeSize = 5;
let maxNodeSize = 50; // Límite máximo para el tamaño de los nodos
let scaleFactor = 50; // Factor de escala inicial para la generación de posiciones

function setup(p5: any) {
  return () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    setInterval(() => generateNode(p5), 1000); // Agregar un nodo cada segundo
  };
}
function draw(p5: any) {
  return () => {
    p5.background("#390099");
    p5.orbitControl();
    p5.rotateY(p5.frameCount * 0.004);
    generateEdges(p5);
    drawGraph(p5);
  };
}

function generateNode(p5: any) {
  if (nodes.length < maxNodes) {
    let index = nodes.length;
    let scaleFactorAdjusted = scaleFactor * index;
    let positionX =
      p5.random(-scaleFactorAdjusted, scaleFactorAdjusted) +
      (index > 0 ? (index * (index + 1)) / 2 : 0); // Ajuste para centrar los primeros nodos
    let positionY = p5.random(-scaleFactorAdjusted, scaleFactorAdjusted);
    let positionZ = p5.random(-scaleFactorAdjusted, scaleFactorAdjusted);
    let newNode: Node = {
      position: p5.createVector(positionX, positionY, positionZ),
      neighbors: [],
      size: minNodeSize,
      color: p5.color(255),
    };
    nodes.push(newNode);
  }
}
function generateEdges(p5: any) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (p5.random() < edgeProbability) {
        nodes[i].neighbors.push(j);
        nodes[j].neighbors.push(i);
      }
    }
  }
}
function drawGraph(p5: any) {
  p5.stroke(255); // Color de las aristas: blanco
  p5.strokeWeight(2);
  for (let i = 0; i < nodes.length; i++) {
    let currentNode = nodes[i];
    for (let j = 0; j < currentNode.neighbors.length; j++) {
      let neighborIndex = currentNode.neighbors[j];
      let neighborNode = nodes[neighborIndex];
      p5.line(
        currentNode.position.x,
        currentNode.position.y,
        currentNode.position.z,
        neighborNode.position.x,
        neighborNode.position.y,
        neighborNode.position.z
      );
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    // Limitar el tamaño máximo del nodo
    node.size = Math.min(node.size, maxNodeSize);
    // Tamaño proporcional a la cantidad de vecinos
    node.size =
      minNodeSize + node.neighbors.length * 2; // Ajusta el factor de escala según sea necesario
    p5.push();
    p5.translate(node.position.x, node.position.y, node.position.z);
    p5.fill(node.color); // Usamos el color del nodo
    p5.sphere(node.size);
    p5.pop();
  }
}

function sketch(p5: any) {
  p5.setup = setup(p5);
  p5.draw = draw(p5);
}

export const VirtualityEvolution = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};
