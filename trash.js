class Trash{
    constructor(x, y,r) {
      var options = {	
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
         
      }
      
      this.x=x
      this.y=y
     
      this.r=this.r 
      this.body = Bodies.circle(x, y,r/2, options);
     
     
      World.add(world, this.body);
    }
    display(){
     
      var pos =this.body.position;
       push();
      translate(pos.x, pos.y);
      fill(255);
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  