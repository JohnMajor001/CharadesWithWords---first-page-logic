var myCanvas = document.querySelector('canvas');
myCanvas.height = window.innerHeight;
myCanvas.width = window.innerWidth;
var c = myCanvas.getContext('2d');

var arrayOfTeams = [];

var team1 = {
  position: 400,
};
var team2 = {
  position: 20,
};
var team3 = {
  position: 30,
};
var team4 = {
  position: 40,
};
arrayOfTeams.push(team1);
arrayOfTeams.push(team2);
arrayOfTeams.push(team3);
arrayOfTeams.push(team4);

var noOfTeams = 2;
// var teamPosition = 50;
var pointsToWin = 60;
var piepiece = (Math.PI*2)/pointsToWin;
var rPie = myCanvas.width/5;
var xPie = myCanvas.width/2;
var yPie = myCanvas.height/2;
var blackCircleR = rPie/3;
var arrayOfColours = ['red', 'green', 'orange', 'yellow', 'blue'];
var arrayOfTeamColours = ['purple', 'white', 'black', 'gray', 'blue'];
var distBetweenParticles = (rPie - blackCircleR)/noOfTeams;


function drawPieSlice(c,centerX, centerY, radius, startAngle, endAngle, color ){
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(centerX,centerY);
  // c.font = 'italic 7pt Calibri, sans-serif';
  // c.fillText('Hello World!', centerX, centerY);
  c.arc(centerX, centerY, radius, startAngle, endAngle);
  c.closePath();
  c.fill();
}

// Draws black circle in middle
function blackCircle() {
  c.beginPath();
  c.arc(xPie, yPie, blackCircleR, 0, Math.PI*2, false);
  c.fillStyle = 'black';
  c.fill();
  // c.stroke();
}

// circle constructor
function Circle(x, y, color, radius, distFromCentre, teamPosition) {
      // Ensure particles don't go past finish
      if(teamPosition > pointsToWin) {
        this.teamPosition = pointsToWin;
      } else {
        this.teamPosition = teamPosition;
      }

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.PI*2;
  this.velocity = 0.02;
  this.distanceFromCentre = {
        x: blackCircleR + this.radius + distFromCentre + 1, // WILL NEED TO INCREMENT THIS IN ORDER TO GET SPECIFIC DISTANCES FOR TEAMS
      };

  this.angle = piepiece*(this.teamPosition);
  this.specTheta = this.angle - (piepiece/2);
  this.k = (Math.PI/2) - this.specTheta;
  this.h = this.distanceFromCentre.x;
  this.xCo = xPie + (Math.sin(this.k)*this.h);
  this.yCo = yPie + (Math.cos(this.k)*this.h);

  this.update = () => {
    this.radians += this.velocity;
    this.x =  x + Math.cos(this.radians) * this.distanceFromCentre.x;
    this.y =  y + Math.sin(this.radians) * this.distanceFromCentre.x;
    this.draw();
  }
  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = 'black';
    c.stroke();
    c.closePath();
  }
}

// when the particle needs to stop moving, see four quadrent if statements
function stopParticle(particle, xnum, ynum) {
  particle.x = xnum;
  particle.y = ynum;
  particle.draw();

  return;
}

function animate() {
    requestAnimationFrame(animate);
    // c.fillStyle = 'rgba(0, 0, 0, 0.05)'; // color is wrong
    c.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for(i=0;i<pointsToWin;i++) {
      var number = Math.floor((i+1)%(arrayOfColours.length));

      drawPieSlice(
          c,
          xPie,
          yPie,
          rPie,
          piepiece*i,
          piepiece*(i+1),
          arrayOfColours[number]
      );
    }

    blackCircle();
    // drawTestCircle();
    // blackCircle();

    particles.forEach(element => {
       // Four quadrent if statements
      if (element.teamPosition <= (pointsToWin/4) - 1) {
          if (element.x <= element.xCo && element.y >= element.yCo) {
            stopParticle(element, element.xCo, element.yCo);
          } else {
            element.update();
          }
      } else if (element.teamPosition == (pointsToWin/4) // NEW ONE!!!
        && element.teamPosition <= ((pointsToWin/2) - 1)) {
          if ((element.y <= element.yCo + 10 && element.y >= element.yCo - 10)
          && (element.x <= element.xCo + 10 && element.x >= element.xCo - 10)) {
            stopParticle(element, element.xCo, element.yCo);
          } else {
            element.update();
          }
      } else if (element.teamPosition > (pointsToWin/4)
        && element.teamPosition <= ((pointsToWin/2) - 1)) {
          if (element.x <= element.xCo && element.y <= element.yCo) {
            stopParticle(element, element.xCo, element.yCo);
          } else {
            element.update();
          }
      } else if (element.teamPosition == (pointsToWin/2) // NEW ONE!!!
        && element.teamPosition <= ((3*(pointsToWin/4)) - 1)) {
          if ((element.y <= element.yCo + 10 && element.y >= element.yCo - 10)
          && (element.x <= element.xCo + 10 && element.x >= element.xCo - 10)) {
            stopParticle(element, element.xCo, element.yCo);
          } else {
            element.update();
          }
      } else if (element.teamPosition > (pointsToWin/2)
        && element.teamPosition <= ((3*(pointsToWin/4)) - 1)) {
          if (element.x >= element.xCo && element.y <= element.yCo) {
            stopParticle(element, element.xCo, element.yCo);
          } else {
            element.update();
          }
      } else if (element.teamPosition > (3*(pointsToWin/4) - 1)) {
          if ((element.y <= element.yCo + 10 && element.y >= element.yCo - 10)
          && (element.x <= element.xCo + 10 && element.x >= element.xCo - 10)) {
            stopParticle(element, element.xCo, element.yCo);
        } else {
          element.update();
      }
    }
  });
}
let particles;
function init() {
  particles = [];

// get a radius for each of the circles which is based on the size of each pieslice
var specR = (Math.sin(piepiece/2))*(rPie/2);
var dynamicR = specR*2;

// noOfTeams = number of particles you want
  for(i=0; i<noOfTeams;i++) {
    particles.push(new Circle(xPie, yPie, arrayOfTeamColours[i], specR, 0+(i*distBetweenParticles), arrayOfTeams[i].position));
  }

}
init();
animate();
