// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

//EJERCICIO 1
function excludingVatPrice(price){
    
    const VAT = 15.00;

    if(!price){
        return -1;
    }else{
        return (price / (1 + VAT / 100)).toFixed(2);
    }
}


//EJERCICIO 2
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.info = this.name + "s age is "+this.age;
    }
    
}

//EJERCICIO 3
let Ghost = function() {
    let random = Math.round(Math.random()*4+1);
    let colorArray = ["white", "yellow", "purple", "red"];
    
    this.color = colorArray[random];
};

//EJERCICIO 4
function bigToSmall(arr){

    arr = [].concat(...arr);
    
    arr = arr.sort((a, b) => b -a);
    arr = arr.join(">");
    return arr;
  }

  //EJERCICIO 5
  function doTurn () {
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus();
  }