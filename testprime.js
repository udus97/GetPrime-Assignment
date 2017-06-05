describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("should return 0, 1, 2, 3, 5, 7 for 10", function() {
    expect(10).toBe(0, 1, 2, 3, 5, 7);
  });
  it("should return 0, 1, 2, 3, 5, 7, 11, 13, 17, 19 for 20", function() {
    expect(20).toBe(0, 1, 2, 3, 5, 7);
  });
  it("should return 10 != '10'", function() {
    expect('10').toBe(false);
  });
  it("should return false ", function() {
    expect(20).toBe(0, 1, 2, 3, 5, 7)
});
  it("should return 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 for 50", function (){
  	expect(50).toBe(0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47)
  });
  it("should return undefined for 0", function()){
  	expect(0).toBe(undefined)
  });
});