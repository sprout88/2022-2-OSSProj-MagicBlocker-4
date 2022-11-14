class JoyStick {
    constructor(x,y) {
      this.pos = createVector(x,y);
      this.stickPos = createVector(x,y);
      this.angle = 0;
    }
    
    display() {
      fill(170,170);
      ellipse(this.pos.x,this.pos.y,scl * 2.4);
      
      fill(255);
      ellipse(this.stickPos.x,this.stickPos.y,scl * 0.7);
      // console.log(this.pos);
    
    }
    
    track(finger) {
      this.stickPos.x = finger.x;
      this.stickPos.y = finger.y;
      
      this.angle = p5.Vector.sub(this.stickPos,this.pos).heading();
      return p5.Vector.sub(this.stickPos,this.pos);
    }
    
    resetStick() {
      this.stickPos.x = 1.5 * scl;
      this.stickPos.y = height - 1.5 * scl;
    }
  }
  