class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        //restitution:1.0,
        //friction:0.2,
        //density:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width=width
    this.height=height
    World.add(world,this.body)
 }
 display(){
     var pos=this.body.position;
     rectMode(CENTER);
     fill(255);
     rect(pos.x,pos.y,this.width,this.height)
 }
}