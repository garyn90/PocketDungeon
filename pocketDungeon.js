$(document).ready(function() {
console.log("Awaiting orders...");

//the modular dice function//
function dice(num) {
    var math = Math.floor((Math.random() * num) + 1);
    return(math);
}

//dice counters and click events//

var d4Array = [];
var d6Array = [];
var d8Array = [];
var d10Array = [];
var d12Array = [];
var d20Array = [];
var d4n = 0;
var d6n = 0;
var d8n = 0;
var d10n = 0;
var d12n = 0;
var d20n = 0;
var allTheDice = [];

$('#d4').on('click', function() {
    d4n++;    
    let counter = 'x' + d4n;
    d4Array.push(dice(4));
    $('#d4textCounter').text(counter);
});

$('#d6').on('click', function() {
    d6n++;    
    let counter = 'x' + d6n;
    d6Array.push(dice(6));
    $('#d6textCounter').text(counter);
});

$('#d8').on('click', function() {
    d8n++;    
    let counter = 'x' + d8n;
    d8Array.push(dice(8));
    $('#d8textCounter').text(counter);
});

$('#d10').on('click', function() {
    d10n++;    
    let counter = 'x' + d10n;
    $('#d10textCounter').text(counter);
    d10Array.push(dice(10));
});

$('#d12').on('click', function() {
    d12n++;    
    let counter = 'x' + d12n;
    d12Array.push(dice(12));
    $('#d12textCounter').text(counter);
});

$('#d20').on('click', function() {
    d20n++;    
    let counter = 'x' + d20n;
    d20Array.push(dice(20));
    $('#d20textCounter').text(counter);
});

//Button roll//
$("#roll-button").on("click", function() {
  //user selected options variables below 
  var userProf = parseInt($('#prof-select').val());
  var userAbili = parseInt($('#abili-select').val());
  var userOther = parseInt($('#other-select').val());
  console.log(userProf);
  console.log(userAbili)
  console.log(userOther);
  
  
  let diceString = '';
  //each value in each array is sorted into new array, along with parsed user proficiency, ability score, and other 
  d4Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d6Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d8Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d10Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d12Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d20Array.forEach(function(item) {
    allTheDice.push(item);
  });
  allTheDice.push(userProf, userAbili, userOther);
  console.log(allTheDice);  


//event that turns all dice rolls & modifiers into presentable text for user
  for (let i = 0; i < allTheDice.length; i++) {
    if(i === allTheDice.length - 1 ) {
      diceString += allTheDice[i] + ' =';
    }
    else {
      diceString += allTheDice[i] + ' + ';
    }
      
  }
  


//allTheDice array total, reduce function  
  const diceTotal = allTheDice.reduce((accumulator, currentNum) => {
    return accumulator + currentNum;
  }, 0);
  diceString += ' ' + diceTotal;
  console.log(diceString);
  $('#textarea').val(diceString); 
  

//after click event, all values get reset
  diceString = '';  
  d4Array = [];
  d6Array = [];
  d8Array = [];
  d10Array = [];
  d12Array = [];
  d20Array = [];
  allTheDice = [];
  d4n = 0;
  d6n = 0;
  d8n = 0;
  d10n = 0;
  d12n = 0;
  d20n = 0;
  $('#d4textCounter').text(d4n);
  $('#d6textCounter').text(d6n);
  $('#d8textCounter').text(d8n);
  $('#d10textCounter').text(d10n);
  $('#d12textCounter').text(d12n);
  $('#d20textCounter').text(d20n);
  $('#prof-select, #abili-select, #other-select').val('0');
});


//Reset button//
$("#reset-button").on("click", function() {
  diceString = '';
  d4Array = [];
  d6Array = [];
  d8Array = [];
  d10Array = [];
  d12Array = [];
  d20Array = [];
  allTheDice = [];
  d4n = 0;
  d6n = 0;
  d8n = 0;
  d10n = 0;
  d12n = 0;
  d20n = 0;
  $('#d4textCounter').text(d4n);
  $('#d6textCounter').text(d6n);
  $('#d8textCounter').text(d8n);
  $('#d10textCounter').text(d10n);
  $('#d12textCounter').text(d12n);
  $('#d20textCounter').text(d20n);
  $('#textarea').val('');
  $('#prof-select, #abili-select, #other-select').val('0');
});




});


//extraneous stuff

