/*
 * Hello. 2 points.
 */

function hello() {
  let one = document.getElementById('output1');
  one.innerHTML = 'Hello, AP Computer Science Principles!';
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  //////////// DO NOT MODIFY      Use the @name variable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.
  name = prompt("Please enter your name:");
  let two = document.getElementById('output2');
  two.innerHTML = 'Hello, ' + name + '!';
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let fahr = ((9 * cels) / 5 + 32).toFixed(2);
  let three = document.getElementById('output3');
  three.innerHTML = cels + ' degrees Celsius equals ' + fahr + ' degrees Fahrenheit.';
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let cels = ((fahr - 32) * 5 / 9 ).toFixed(2);
  let four = document.getElementById('output4');
  four.innerHTML = fahr + ' degrees Fahrenheit equals ' + cels + ' degrees Celsius.';
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY


  let miles = Math.floor(inches / 63360);
  let yards = Math.floor((inches % 63360) / 36);
  let feet = Math.floor(((inches % 63360) % 36) / 12);
  let inches1 = Math.floor(((inches % 63360) % 36) % 12);
  let five = document.getElementById('output5');
  five.innerHTML = 'Miles: ' + miles + "<br/>" + 'Yards: ' + yards + "<br/>" + 'Feet: ' + feet + "<br/>" + "Inches: " + inches1;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY
  let kilometers = Math.floor(centimeters / 100000);
  let meters = Math.floor((centimeters % 100000) / 100);
  let centimeters1 = Math.floor((centimeters % 100000) % 100);
  let six = document.getElementById('output6');
  six.innerHTML = 'Kilometers: ' + kilometers + "<br/>" + 'Meters: ' + meters + "<br/>" + 'Centimeters: ' + centimeters1;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY
  let gallons = Math.floor(fluidOunces / 128);
  let quarts = Math.floor((fluidOunces % 128) / 32);
  let pints = Math.floor((fluidOunces % 128 % 32) / 16);
  let cups = Math.floor(((fluidOunces % 128 % 32) % 16) / 8);
  let fluidOunces1 = Math.floor(((fluidOunces % 128 % 32) % 16) % 8);
  let seven = document.getElementById('output7')
  seven.innerHTML = 'Gallons: ' + gallons + "<br/>" + 'Quarts: ' + quarts + "<br/>" + 'Pints: ' + pints + "<br/>" + 'Cups: ' + cups + "<br/>" + 'Fluid Ounces: ' + fluidOunces1;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = Math.floor(ounces / 32000);
  let pounds = Math.floor((ounces % 32000) / 16);
  let ounces1 = Math.floor((ounces % 32000) % 16);
  let eight = document.getElementById('output8');
  eight.innerHTML = 'Tons: ' + tons + "<br/>" + 'Pounds: ' + pounds + "<br/>" + 'Ounces: ' + ounces1;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */
function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(pennies / 100);
  let quarters = Math.floor((pennies % 100) / 25);
  let dimes = Math.floor(((pennies % 100) % 25) / 10);
  let nickels = Math.floor((((pennies % 100) % 25) % 10) / 5);
  let pennies1 = Math.floor((((pennies % 100) % 25) % 10) % 5);
  let nine = document.getElementById('output9');
  nine.innerHTML = 'Dollars: ' + dollars + "<br/>" + 'Quarters: ' + quarters + "<br/>" + 'Dimes: ' + dimes + "<br/>" + 'Nickels: ' + nickels + "<br/>" + 'Pennies: ' + pennies1;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  let numberOfQuarters = Math.floor(amount / 0.25);
  let numberOfDimes = Math.floor((amount % 0.25) / 0.1);
  let numberOfNickels = Math.floor(((amount % 0.25) % 0.10) / 0.05);
  let numberOfPennies = Math.floor(((amount % 0.25) % 0.10) % 0.05);
  let coins = numberOfQuarters + numberOfDimes + numberOfNickels + numberOfPennies;
  let ending
  if (coins <= 1) {
    ending = " coin.";
  } else {
    ending = " coins.";
  }
  let ten = document.getElementById('output10');
  ten.innerHTML = coins + ending;
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
