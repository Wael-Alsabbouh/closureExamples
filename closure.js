

function mainFunction () {
  var a = 2;
  var b = 3;

  var closure = function () {
    console.log('this is a function inside a function!');
    console.log('value of a: ', a);
    console.log('value of a: ', b);
  };

  closure();
}

mainFunction();