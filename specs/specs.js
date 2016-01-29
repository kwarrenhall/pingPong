describe('pingPong', function() {
   it("identifies numbers divisible by 15", function() {
   expect(pingPong(15)).to.equal("pingPong");
   });
   it("identifies numbers divisible by 5", function() {
   expect(pingPong(5)).to.eql("pong")
   });
});
