// 1a
let randomNum = Math.floor((Math.random() * 5) + 1);
console.log(randomNum);
// 1b
if (randomNum >= 4){
    console.log("Greater than or equal to 4");
}
else if (randomNum === 2 || randomNum === 3){
    console.log("Equal to 2 or 3");
}
else{
    console.log("Equal to 1");
}
// 1c
if (randomNum !== 3){
    console.log("Not equal to 3");
}
// 1d
if (randomNum !== 3 && randomNum !== 5){
    console.log("NOT equal to 3 AND not equal to 5");
}
// 1e
if (randomNum === 2 || randomNum === 4){
    console.log("Equal to 2 OR equal to 4");
}

// BONUS
// 2
function ifEqualToFour(randomNum) {
    return (randomNum ? 'Greater than or equal to 4' : 'Less than 4');
}
console.log(ifEqualToFour(randomNum >= 4));

// 3
// Switch Statements takes a parameter/argument and returns and runs a line are block of code based on the case (or match) that parameter/argument goes with
switch(randomNum) {
    case 1:
        console.log("One");
        // Break key words are needed between each case so that the code for the case that follows does NOT also run
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    // Default works like ELSE in a conditional statement (If the value does not match any of the cases, then it will run what is the DEFAULT)
    // default:
    //     console.log("This will run if nothing else matched");
    // There is no need for a BREAK at the end of a switch statement since there are no other cases
  }