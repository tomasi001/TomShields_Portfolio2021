var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield = [];

var counter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');


  flowfield = new Array(cols * rows);

  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }

}

function draw() {

  //print(counter);



  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();


  }
  
  // noStroke();
  // fill(255, 10)
  // rectMode(RADIUS);
  // rect(windowWidth / 2, windowHeight / 2, 500, 70, 100)
  // rect(windowWidth / 2 -200, windowHeight-100, 140, 35, 100)
  // rect(windowWidth / 2 + 200, windowHeight-100, 150, 35, 100)
  textShower();
  PorfoliotextAnimator();
  optionalText();
   noStroke();
  fill(255, 20)
  rectMode(RADIUS);
  rect(windowWidth / 2, windowHeight / 2, 500, 70, 100)
  rect(windowWidth / 2 -200, windowHeight-100, 140, 35, 100)
  rect(windowWidth / 2 + 200, windowHeight-100, 150, 35, 100)


  //fr.html(floor(frameRate()));

}

function textShower() {

  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont('Georgia');

}

function mousePressed() {
  counter += 1;
}

function mouseWheel(event) {
  print(event.delta);
  
}

function PorfoliotextAnimator() {

  if (counter == 0) {
    text('Hello,', windowWidth / 2, windowHeight / 2 - 30);
    text('I\'m Tom Shields.', windowWidth / 2, windowHeight / 2);
    text('You can call me Tomasi', windowWidth / 2, windowHeight / 2 + 30);
  }
  if (counter == 1) {
    text('Let me begin by giving you a warm welcome to my portfolio.', windowWidth / 2, windowHeight / 2 - 35);
    text('My creative solution to the problem', windowWidth / 2, windowHeight / 2);
    text('of how to showcase my work.', windowWidth / 2, windowHeight / 2 + 35);
  }
  if (counter == 2) {
    text('I\'m an aspiring Creative Technologist,', windowWidth / 2, windowHeight / 2 - 35);
    text('ambitious to find innovative ways to blur the lines', windowWidth / 2, windowHeight / 2);
    text('between the digital and physical worlds.', windowWidth / 2, windowHeight / 2 + 35);
  }
  if (counter == 3) {
    text('I\'ve tried my hand at many skills; cheffing,', windowWidth / 2, windowHeight / 2 - 50);
    text('digital marketing, designing and  hosting immersive events.', windowWidth / 2, windowHeight / 2 - 20);
    text('Through studying interactive media and game design,', windowWidth / 2, windowHeight / 2 + 20);
    text('I found my true passion is in creative technology.', windowWidth / 2, windowHeight / 2 + 50);
  }
  if (counter == 4) {
    text('The common thread between many of these experiences', windowWidth / 2, windowHeight / 2 - 50);
    text('has become clear to me recently.', windowWidth / 2, windowHeight / 2 - 20);
    text('I am passionate about solving problems.', windowWidth / 2, windowHeight / 2 + 20);
    text('The more diverse the better.', windowWidth / 2, windowHeight / 2 + 50);
  }
  if (counter == 5) {
    text('I am a fast learner and a hard worker.', windowWidth / 2, windowHeight / 2 - 35);
    text('I hope to contribute to the challenging', windowWidth / 2, windowHeight / 2);
    text('and wonderful world of problem solving.', windowWidth / 2, windowHeight / 2 + 35);
  }
  if (counter == 6) {
    text('Thank you for taking the time to read about me.', windowWidth / 2, windowHeight / 2 - 20);
    text('Scroll to see my creations up to date.', windowWidth / 2, windowHeight / 2 + 20);
  }
  if (counter == 7) {
    text('Feel free to contact me if you have any questions,', windowWidth / 2, windowHeight / 2 - 35);
    text('if you would like to work together,', windowWidth / 2, windowHeight / 2);
    text('or if you just want to talk about life.', windowWidth / 2, windowHeight / 2 + 35);
  }
  if (counter == 8) {
    text('One Love', windowWidth / 2, windowHeight / 2);
  }
  
}

function optionalText (){
  if(counter == 0 || counter == 1 || counter == 2 || counter == 3 || counter == 4 || counter == 5 || counter == 6 || counter == 7){
     text('Click to Read More', windowWidth / 2 -200, windowHeight-100);
}
 if(counter == 0 || counter == 1 || counter == 2 || counter == 3 || counter == 4 || counter == 5 || counter == 6 || counter == 7 ){
  text('Scroll to See Portfolio', windowWidth / 2 + 200, windowHeight-100);
}
}