require("../lib/./demo");


describe("Demo Test ES5", function(){

  it("Add One ES5", function(){
    expect(addOne([1,0.1,1,1,1])).toEqual([2,1.1,2,2,2]);
  });

});
