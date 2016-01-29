function pingPong(inputNumber) {
  var numberThree = 3
  var numberFive = 5
  var output = [];

  for (var i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("pingpong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output ;
  };







// function pingPong(number) {
// var output = [];
//
//      for (var i = 1; i <= number; i++) {
//      if (i % 15 === 0) {
//      output += "PingPong";
//      } else if (i % 5 === 0) {
//      output += "pong";
//      } else if (i % 3 === 0) {
//      output += "ping";
//      } else {
//      output += i;
//      }
//      }
//      return output;
// };
//
//
//  // event.preventDefault();
//  for (var i = 1; i <= myNumber; i++) {
