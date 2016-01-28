//
//
// for (var i = 0; i >= 30; i++) {
// if (i % 15 === 0) {
//   return ("ping-pong")
//
//   //  if (i % 15 === 0) {
//   //  return ("pingpong"); }
//    }
// };

  //  } else if (i % 5 ===0) {
  //    return ("pong");
  //  } else if (i % 3 ===0) {
  //    return ("ping");
  //  } else {
  //    return (i);
  //   }
//   }
// };
//
// (document).ready(function(){
//   $("#userInput").submit(function(event) {
//   var number = parseInt($("#number").val());
//   var result = pingPong(number);
//
//   $("#outPut").show();
//   event.preventDefault();
//   });
// });

var num = $('#userImput').val()

   for (var i = 1; i <= num; i++) {
     if (i % 15 === 0) {
       $('#list').append('<li>'+"pingpong"+'</li>');}
     else if (i % 3 === 0) {
       $('#list').append('<li>'+"ping"+'</li>');}
     else if (i % 5 === 0) {
       $('#list').append('<li>'+"pong"+'</li>');}
     else{
       $('#list').append('<li>'+i+'</li>');}

   };

 // event.preventDefault();
