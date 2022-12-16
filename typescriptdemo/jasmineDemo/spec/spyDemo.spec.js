const {Shape,CreateShape,ColorShape} = require('../src/spyDemo');

describe('ColorDemo has some functionality to be tested',function(){


    it("should call getDetails by spying CreateShape's getDetails()",function(){
    
        let sh=new Shape(4,100,150);
        let crSh=new CreateShape(sh);
        let color=new ColorShape(crSh);
        
        spyOn(crSh,'getDetails').and.returnValue("4 100 150");

        expect(color.getDetails()).toEqual("4 100 150");



    });


});