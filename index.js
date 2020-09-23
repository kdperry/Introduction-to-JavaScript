/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;

if (votingAge > 18) {
    console.log('True');
} else {
    console.log('False');
}





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var Year = 2025;

if (Year === 2020) {
    console.log('A Hot Mess');
} else if (Year !== 2020) {
    console.log('Hope it is better than 2020');
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");

console.log(Number("1999"));



//Task d: Write a function to multiply a*b 

var x = 4;
var y = 10;

function multiply(x, y) {
    let result = x * y;
    console.log(result);
}

multiply(4, 10);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const yourAge = 30;
let DogYears = yourAge * 7;

function DogAge(yourAge, DogYears) {
    let product = yourAge * DogYears;
    console.log(product);
}

DogAge(30, 7)


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age) {
    if (age >= 1) {
      if (weight <= 5) {
        return 'Dog must eat' + weight * 0.05 + 'lbs of food daily'
      }
      if (weight <= 10) {
        return 'Dog must eat' + weight * 0.04 + 'lbs of food daily'
      }
      if (weight <= 15) {
        return 'Dog must eat' + weight * 0.03 + 'lbs of food daily'
      }
      if (weight > 15) {
        return 'Dog must eat' + weight * 0.02 + 'lbs of food daily'
      }
    } else {
      if (age >= 2 && age <= 4) {
        return 'Puppy must eat' + weight * 0.1 + 'lbs of food daily'
      }
      if (age > 4 && age <= 7) {
        return 'Puppy must eat' + weight * 0.05 + 'lbs of food daily'
      }
      if (age > 7 && age < 12) {
        return 'Puppy must eat' + weight * 0.04 + 'lbs of food daily'
      }
    }
  }
  
  console.log(dogFeeder(15, 1))
  



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RockPaperScissors(player1, Comp) {
    if (player1 == Comp) {
      return "Tie!"
    }
    if (player1 == "Paper" && Comp == "Rock") {
      return "You Win =)"
    }
    if (player1 == "Rock" && Comp == "Paper") {
      return "You Lose =("
    }
    if (player1 == "Rock" && Comp == "Scissors") {
      return "You Win =)"
    }
    if (player1 == "Scissors" && Comp == "Rock") {
      return "You Lose =("
    }
    if (player1 == "Paper" && Comp == "Scissors") {
      return "You Lose =("
    }
    if (player1 == "Scissors" && Comp == "Paper") {
      return "You Win =)"
    }
  }
  
  function CompChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let choice = CompChoice(0, 2)
  let choices = ["rock", "paper", "scissors", ]
  console.log(RockPaperScissors("scissors", choices[choice]))

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let KM = 1;
let Miles = 0.621371;

function Convert(KM){
  return KM * Miles;
}

console.log (Convert(1));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let Feet = 1;
let CM = 30.48;

function Convert(Feet) {
  return Feet * CM;
}

console.log(Convert(3));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(bottles) {
    for (let i = bottles; i > 0; i--) {
      console.log(`${i} of soda on the wall, ${i} of soda! Take one down, pass it around. ${i - 1} bottles of soda on the wall!`)
    }
  }
  
  annoyingSong(66);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function GradeCalculator(grade){
    if (grade >= 90){
        return "A"
    } 
    if (grade >= 80 && grade <= 90){
        return "B"
    }
    if (grade >= 70 && grade<= 80 ){
        return "C"
    }
    if (grade >= 60 && grade <= 70){
        return "D"
    }
    if (grade < 60){
        return "F"
    }
    
}
 console.log(GradeCalculator(76)); 
}




/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





