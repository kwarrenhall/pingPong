describe('pingPong', function() {
   it("identifies numbers divisible by 15", function() {
   expect(pingPong(15)).to.equal("pingpong");
   });
  it("identifies numbers divisible by 5", function() {
    expect(pingPong(5)).to.eql("pong")
  });
  it("identifies numbers divisible by 3", function() {
    expect(pingPong(3)).to.eql("ping")
  });
  it("counts up to a specified user number", function() {
    expect(pingPong(2)).to.eql(2)
  });
});
