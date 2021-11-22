class ComputerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

 display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
if(this.body.volicity.x0 && this.body.positionx > 300) {
  var position=[this.body.position.x,this.body.position.y];
  this.trajectory.push(position)
  
  //setting image to the trajectory 
  for(var i=0; i< this trajectory.length; i++) {
    image(this.image,this.trajectory [i][0],this.trajectory[i][1],5,5)
  } 
  
  
  }
  display()
