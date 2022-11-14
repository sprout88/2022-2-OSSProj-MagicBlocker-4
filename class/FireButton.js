class FireButton {
    constructor(x,y) {
      this.pos = createVector(x,y);
      this.firing = false;
      this.r = scl * 1;
    }
    
    display() {
      if(this.firing) {
        fill(255,0,0);
      } else {
        fill(170,0,0);
      }
      ellipse(this.pos.x,this.pos.y,this.r * 2);
      fill(0);
      textSize(scl * 0.8);
      text("Fire!",this.pos.x,this.pos.y);
    }
}