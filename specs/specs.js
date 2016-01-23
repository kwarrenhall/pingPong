describe('pingPong', function() {
  it("counts up to a specified user number", function () {
    expect(pingPong(2)).to.eql([1,2])
  });
  it("identifies numbers divisible by 3", function () {
    expect(pingPong(3)).to.eql([1,2,"ping"])
  });
  it("identifies numbers divisible by 5", function () {
    expect(pingPong(5)).to.eql([1,2,"ping",4,"Pong"])
  });
  it("identifies numbers divisible by 3 & 5", function () {
    expect(pingPong(15)).to.eql([1,2,"ping",4,"pong",6,7,8,9,10,11,12,13,14,"ping-pong"])
  });
});
