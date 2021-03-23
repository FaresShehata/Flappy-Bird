// Flappy Bird
// https://editor.p5js.org/FaresShehata/present/tYFHO103W

let bird;
let pipes = [];
let score = 0;

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	textAlign(CENTER, CENTER);
}

function keyPressed() {
	if (key == ' ') bird.hop();
}

function draw() {
	background(0, 50, 200);

	if (frameCount % 100 == 0) pipes.push(new Pipe());

	for (let i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].offscreen()) pipes.splice(i, 1);

		if (bird.hits(pipes[i])) {
			textSize(100);
			stroke(0);
			strokeWeight(3);
			fill(255);
			text("HIT", width / 2, height / 2);
			noLoop();
		}
	}
	if (frameCount > 295) {
		if ((frameCount % 100) - 96 == 0) {
			score++;
		}
	}
	stroke(0);
	strokeWeight(2);
	fill(255);
	textSize(40);
	text(score, width / 2, 50);
	// console.log(frameCount);

	bird.update();
	bird.show();

}