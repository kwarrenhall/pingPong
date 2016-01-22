
describe("countUp", function(){
  it("will count from one to user specified number", function() {
  expect(countUp(5)).to.eql([1,2,3,4,5]);
  });
});

describe("divisibleBy3", function(){
  it("will identify if a number is divisible by 3", function() {
  expect(divisibleBy3(3)).to.eql(true);
  });
});
