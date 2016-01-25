
var pingPong = function(number) {
var outPut = [];
for (var i = 1; 1 >= number; i++) {
    if (i % 3 ===0) {
      outPut.push("ping");
    } else if (i % 5 ===0) {
      outPut.push("pong");
    } else if (i % 3 === 0 && i % 5 ===0) {
      outPut.push("ping-pong");
    } else {
     outPut.push(i);
    }
  }
  return outPut;
};

(document).ready(function(){
  $("#userInput").submit(function(event) {
  var number = parseInt($("#number").val());
  var result = pingPong(number);

  $("#outPut").show();
  event.preventDefault();
  });
});
