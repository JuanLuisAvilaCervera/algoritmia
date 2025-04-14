
//EJERCICIO 1
function reduce(fraction) {
  
    let numerator = fraction[0]
    let denominator = fraction[1];
    
    if(denominator !== 0){
      for( let i = 2; i <= numerator && i <= denominator ; i++){
        if(numerator % i === 0 && denominator % i === 0 ){
          numerator /= i;
          denominator /= i;
          i--;
        }
      }
      return [numerator, denominator];
    }else{
      return fraction;
    }
  }

  //EJERCICIO 2
  function hexHash(code){
    let sum = 0;
    for(let i = 0 ; i < code.length ; i++){
      let hexCode = code.charCodeAt(i).toString(16)
      
      for(let j = 0 ; j < hexCode.length ; j++){
        if(hexCode.charAt(j)>= '0' && hexCode.charAt(j) <= '9'){
          sum += Number(hexCode.charAt(j));
          
        }
      }
    }
    return sum;
  }

  //EJERCICIO 3
  function cookPancakes(n, m) {
    if(n === 1){ //INCORRECT
        return n*2;
    }else{
    
      if(n % m === 0){
        return n/m * 2
      }else{
  
        return Math.floor(n/m)*2+1
      }
    
    }
  }

  //COMMUNITY ANSWER

  function cookPancakes(n, m) {
    return n<m ? 2 : Math.ceil(n/m * 2)
  }


  //EJERCICIO 4
  function possiblyPerfect(key,answers) {
  
    let allCorrect = false;
    let allIncorrect = false;
    for(let i = 0; i < key.length; i++){
      
      if(key[i] === answers[i]){
        allCorrect = true;
      }else if(key[i] !== '_'){
        allIncorrect = true;
      }
    }
    
    return !allCorrect || !allIncorrect;
    
  }

//EJERCICIO 5

function solve(arr){
  
    let reversed = arr.reverse();
    
    
    reversed[0] = reversed[0].replace("Left", "Begin").replace("Right", "Begin");
    
    let j = arr.length-1;
    
    for(let i = 1 ; i < reversed.length && j > 0 ; i++){
      
        if( arr[j].includes("Left")){
          reversed[i] = reversed[i].replace("Left", "Right").replace("Begin", "Right")
        }else if(arr[j].includes("Right")){
          reversed[i] = reversed[i].replace("Right", "Left").replace("Begin", "Left")
        }
      
        j--;
    }
    return reversed;
}  