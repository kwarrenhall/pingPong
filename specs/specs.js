describe('pingPong', function() {
  it("identifies numbers divisible by 3", function () {
    expect(pingPong(3)).to.eql(true)
  });
  it("identifies numbers divisible by 5", function () {
    expect(pingPong(5)).to.eql(true)
  });
  it("identifies numbers divisible by 3 & 5", function () {
    expect(pingPong(15)).to.eql(true)
  });
});
