import dynamic from "next/dynamic";
import { P5WrapperProps } from "react-p5-wrapper";

let totalCircles = 4//16
let dimension = 100
let margin = 0
let dimensionModulator = 1 // para hacerlo mas pequeno moverse entre 1.0 y 0, y para hacerlo mas grande 1.0 >
let frequence = 0.008
let colors = ["#ffd60a", "#ffc300", "#003566", "#001d3d", "#ffff", "#131317", "#390099"]
let x, y

function setup(p5: any) {
    
	return () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
		dimension = (p5.width - 2 * margin) / totalCircles
		p5.angleMode(p5.DEGREES)
	};
}

function draw(p5: any) {
	return () => {
		p5.background(colors[5])
		p5.noFill()
		p5.stroke(colors[6])
		p5.strokeWeight(2)
		for (let i = 0; i < totalCircles; i++) {
			for (let j = 0; j < totalCircles; j++) {
				x = margin + dimension / 2 + i * dimension
				y = margin + dimension / 2 + j * dimension
				dimensionModulator = p5.sin(frequence * p5.frameCount + .2 * p5.dist(window.innerWidth/2,  window.innerHeight/2, x, y)) * 10
				p5.circle(x, y, dimensionModulator * dimension)
			}
		}
	};
}

function sketch(p5: any) {
	p5.setup = setup(p5);
	p5.draw = draw(p5);
}

export const BackgroundFlowFragtal = () => {

	const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then(mod => mod.ReactP5Wrapper as any), { ssr: false }) as unknown as React.NamedExoticComponent<P5WrapperProps>

	return (
		<ReactP5Wrapper sketch={sketch} />
	)
}
