class Snow{
    constructor(x,y){
        var options = {
            isStatic:false,
            friction:0.5,
            density:0.005
        }

        this.body=Bodies.circle(x,y,15,options);
        this.image=loadImage("snow5.webp");
        this.x=x;
        this.y=y;
        this.r=15;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push ()
        translate (pos.x,pos.y);
        imageMode (CENTER);
        ellipseMode(RADIUS);
        image (this.image,0,0,this.r*2, this.r*2);
        pop ();
    }
}