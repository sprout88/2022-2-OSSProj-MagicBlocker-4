class Player {
    constructor(x,y) {
      this.pos = createVector(x,y);
      this.angle = 0;
      this.speed = 3;
      this.r = scl/4;
    }
    
    display() {
      push();
      translate(this.pos.x,this.pos.y);
      rotate(this.angle);
      fill(255);
      rect(0,-this.r,this.r * 1.5,this.r * 0.5);
      rect(0,this.r,this.r * 1.5,this.r * -0.5);
      ellipse(0,0,this.r * 2);
      pop();
    }
    
    update() {
      
    }
    
    
  }