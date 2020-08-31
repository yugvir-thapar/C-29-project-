class Box {
  constructor(x, y, width, height) {
    var options = {
         
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.visibility =255
  }
  display(){
   push();
  
    if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      translate(pos.x,pos.y);
      rotate(angle);
      Engine.update(engine);
      rectMode(CENTER);
      fill(1);
      stroke("red");
      strokeWeight(2);
      rect(0,0, this.width, this.height);
     
   // console.log(this.body.speed)
    }
  else{
    World.remove(world,this.body)
   this.visibility= this.visibility-5
   tint(255,this.visibility)
   
  }
  pop();
}
}

