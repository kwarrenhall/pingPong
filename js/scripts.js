(document).ready(function(){
  $("form").submit(function(event) {
  var userNumber = parseInt($("input#number").val());
  var result = pingPong(userNumber);
  $("#outPut").text(result);
  $(".result").show();
  event.preventDefault();
  });
});


var pingPong = function(number) {
var outPut = [];
for (number; number > 0; number++) {
    if (number % 3 ===0) {
      outPut.push("ping");
    } else if (number % 5 ===0) {
      outPut.push("pong");}
    } else if (number % 3 === 0 && number % 5 ===0) {
      outPut.push("ping-pong");
    } else {
     outPut.push(number);
    }
};
