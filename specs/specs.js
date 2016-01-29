describe('pingPong', function() {
   it("identifies numbers divisible by 15", function() {
   expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
   })
 it("identifies numbers divisible by five and returns pong", function(){
   expect(pingPong(5)).to.eql([1, 2, "ping", 4, 'pong']);
 })
 it("identifies numbers divisible by five and returns ping", function(){
   expect(pingPong(3)).to.eql([1,2,"ping"]);
 });
 it("counts up to a specified user number", function () {
   expect(pingPong(2)).to.eql([1, 2]);
 });
});
