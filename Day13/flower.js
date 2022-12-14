class Flower{
    constructor(){
        this.flower="Rose";
        console.log("Flower Demo initialised");
    }

    /*function1(arr){
        return arr.filter(function(element){
            return (element===this.flower);
        });
    }*/

    arrowFunction1(arr){
        return arr.filter(elm=>(elm===this.flower));
    }
}
const f1=new Flower();
//f1.function1(["Rose"]);
f1.arrowFunction1(["Rose"]);