class Particle{
    constructor(x,y,Radius){
        var options={
            isStatic:false
        
        }
        this.body=Bodies.circle(x,y,Radius,options);
        this.Radius=Radius;
        World.add(world,this.body);

    }
    display(){
    var pos=this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.Radius);
    }
}