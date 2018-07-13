var array = [], colour = ["red", "blue", "green", "yellow"], input = [];

var MODE = 'STRICT'; //NORMAL
var indexOfInput = 0;
var h3 = jQuery('#arrayColor');
generateNewButtonPress(true);
console.log(array);

var red = jQuery('#red');
var blue = jQuery('#blue');
var green = jQuery('#green');
var yellow = jQuery('#yellow');

function displayArray (index) {
  if(index === array.length){
    return 0;
  }
  var element = array[index];
  if(element === 'red') {
    var red1 = document.getElementById('red');
    red1.style.background = "white";
    red1.style.color = "red";
    h3.append("Red<br>");
    setTimeout(function () {
      red1.style.background = "red";
      red1.style.color = "black";
      displayArray(index + 1);
    }, 500);
  }
  if(element === 'blue') {
    var blue1 = document.getElementById('blue');
    blue1.style.background = "white";
    blue1.style.color = "blue";
    h3.append("Blue<br>");
    setTimeout(function () {
      blue1.style.background = "blue";
      blue1.style.color = "black";
      displayArray(index + 1);
    }, 500);
  }
  if(element === 'green') {
    var green1 = document.getElementById('green');
    green1.style.background = "white";
    green1.style.color = "green";
    h3.append("Green<br>");
    setTimeout(function () {
      green1.style.background = "green";
      green1.style.color = "black";
      displayArray(index + 1);
    }, 1000);
  }
  if(element === 'yellow') {
    var yellow1 = document.getElementById('yellow');
    yellow1.style.background = "white";
    yellow1.style.color = "yellow";
    h3.append("Yellow<br>");
    setTimeout(function () {
      yellow1.style.background = "yellow";
      yellow1.style.color = "black";
      displayArray(index + 1);
    }, 500);
  }
}

red.on('click', function () {
  input.push("red");
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  audio.play();
  if(compareArrays(indexOfInput)) {
    indexOfInput++;
    if(indexOfInput == array.length) {
      indexOfInput = 0;
      input = [];
      h3.html('');
      generateNewButtonPress(true);
      console.log(array);
    }
    gameOverCheck();
  } else {
    alert("Wrong button press!");
    if(MODE === 'STRICT') {
    restart();
    } else {
      input = [];
      displayArray(0);
    }
  }
});

blue.on('click', function () {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  audio.play();
  input.push("blue");
  if(compareArrays(indexOfInput)) {
    indexOfInput++;
    if(indexOfInput == array.length) {
      indexOfInput = 0;
      h3.html('');
      input = [];
      generateNewButtonPress(true);
      console.log(array);
    }
    gameOverCheck();
  } else {
    alert("Wrong button press!");
    if(MODE === 'STRICT') {
      restart();
    } else {
      input = [];
      displayArray(0);
    }
  }
});

green.on('click', function () {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  audio.play();
  input.push("green");
  if(compareArrays(indexOfInput)) {
    indexOfInput++;
    if(indexOfInput == array.length) {
      indexOfInput = 0;
      h3.html('');
     input = [];
      generateNewButtonPress(true);
      console.log(array);
    }
    gameOverCheck();
  } else {
    alert("Wrong button press!");
    if(MODE === 'STRICT') {
      restart();
    } else {
      input = [];
      displayArray(0);
    }
  }
});

yellow.on('click', function () {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  audio.play();
  input.push("yellow");
  if(compareArrays(indexOfInput)) {
    indexOfInput++;
    if(indexOfInput == array.length) {
      indexOfInput = 0;
      h3.html('');
      input = [];
      generateNewButtonPress(true);
      console.log(array);
    }
    gameOverCheck();
  } else {
    alert("Wrong button press!");
    if(MODE === 'STRICT') {
    restart();
    } else {
      input = [];
      displayArray(0);
    }
  }
});

function compareArrays(index) {
  for(var i = 0; i <= index; i++) {
    if(array[index] !== input[index]) {
      return false;
    }
  }
  return true;
}

function generateNewButtonPress(input) {
  if(input) {
    array.push(colour[Math.round(Math.random()*3)]);
    return displayArray(0);
  } else {
    return alert('Oops, you pressed the wrong button');
  }
}

function gameOverCheck() {
  if(array.length==20) {
    return alert('Yippe! You Won!');
  }
}

function restart() {
  array = [];
  input = [];
  indexOfInput = 0;
  generateNewButtonPress(true);
}

var start = document.getElementById('restart');
start.addEventListener('click', function () {
  restart();
});
