class Shape{
    constructor(numOfSides, length, breadth){
        this.numOfSides=numOfSides;
        this.length=length;
        this.breadth=breadth;
    }
   
}
class CreateShape{
    createShape(shape){
        this.shape=shape;
    }
    getDetails(){
        return null;
    }
}
class ColorShape{
    constructor(createShape){
        this.createShape=createShape;
       
    }
    getDetails(){
        return this.createShape.getDetails();
    }
}

module.exports={Shape,CreateShape,ColorShape};