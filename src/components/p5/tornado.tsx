import { ReactP5Wrapper } from "react-p5-wrapper";

let vertices: any[] = []; // arreglo para almacenar los vértices
let totalVertices = 2500; // número total de vértices
let velocidad = 0.001; // velocidad del movimiento sinusoidal
let amplitudInicial = 25; // amplitud inicial del movimiento sinusoidal
let amplitudAumentada = 300; // amplitud aumentada cuando el mouse está sobre un vértice
let amplitud = amplitudInicial; // amplitud actual del movimiento sinusoidal
let hoverTransitionSpeed = 1; // velocidad de transición de la amplitud al hacer hover
let hoverRadius = 40; // radio alrededor del mouse para expandir la amplitud


function setup(p5: any) {
	return () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		// Crear los vértices
		for (let i = 0; i < totalVertices; i++) {
			let x = p5.random(window.innerWidth); // posición inicial aleatoria en x
			let y = p5.random(window.innerHeight); // posición inicial aleatoria en y
			let col = p5.color(p5.random(255), p5.random(255), p5.random(255)); // color aleatorio
			vertices.push({ x: x, y: y, targetX: x, targetY: y, col: col });
		}
	};
}

function draw(p5: any) {
	return () => {
		p5.background(0);

		// Verificar si el mouse está sobre algún vértice y ajustar la amplitud
		let sobreVertice = false;
		for (let i = 0; i < totalVertices; i++) {
			let vertice = vertices[i];
			let d = p5.dist(p5.mouseX, p5.mouseY, vertice.x, vertice.y);
			if (d < hoverRadius) { // Si el vértice está dentro del radio de hover
				sobreVertice = true;
				break; // Salir del bucle una vez que se encuentre un vértice dentro del radio
			}
		}

		// Ajustar la amplitud según el estado del hover
		if (sobreVertice) {
			if (amplitud < amplitudAumentada) {
				amplitud += hoverTransitionSpeed;
			}
		} else {
			if (amplitud > amplitudInicial) {
				amplitud -= hoverTransitionSpeed;
			}
		}

		// Actualizar y dibujar cada vértice
		for (let i = 0; i < totalVertices; i++) {
			let vertice = vertices[i];

			// Movimiento sinusoidal en el eje y
			vertice.y = window.innerHeight / 2 + p5.sin(p5.frameCount * velocidad + i) * amplitud;
			vertice.x += 1; // Mover hacia la derecha

			// Si el vértice sale de la pantalla, restablecer su posición
			if (vertice.x > window.innerWidth) {
				vertice.x = -5;
				vertice.y = p5.random(window.innerHeight);
				vertice.col = p5.color(p5.random(255), p5.random(255), p5.random(255)); // Cambiar color
			}

			// Dibujar el vértice
			p5.stroke(vertice.col);
			p5.strokeWeight(8);
			p5.point(vertice.x, vertice.y);
		}
	}
}

function sketch(p5: any) {
	p5.setup = setup(p5);
	p5.draw = draw(p5);
}

export const Tornado = () => {

	return (
		<ReactP5Wrapper sketch={sketch} />
	)
}
