class bob {
    constructor(x, y, r) {
      var options = {
          'restitution' : 1,
          'friction' : 1,
          'density': 0.7
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;

        push();
        translate(pos.x, pos.y);
        
        rectMode(CENTER);
        strokeWeight(3);
        
        fill(255,0,255);
        circle(0, 0, this.r, this.r);
        
        pop();
    }
  }
  
