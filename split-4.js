
//EJERCICIO 1
function decode  (code, n) {
    const decipherArray = [];
    
    let counter = 0;


    for(let i = 0 ; i < code.length ; i++){
    let substractor = Number(n.toString().substring(counter,(counter + 1) ) );
    console.log(counter);
    console.log(substractor);
    
    decipherArray.push( 96 + code[i] - substractor);
    
    counter++;
    if(counter == n.toString().length){
        counter = 0;
    }
    
    }

    return String.fromCharCode(...decipherArray);
}

//EJERCICIO 1 : SOLUCIÓN DE LA COMUNIDAD
// function decode(code, n) {
//     const key = String(n)
//     return String.fromCharCode(...code.map((c, i) => c - Number(key[i % key.length]) + 96))
//   }

//EJERCICIO 2
function countMe(data){
    let returnString = "";
    
    if(isNaN(data)){
      return "";
    }else{
      for(let i = 0 ; i < data.length ; i++){
        let n = 1;
          for(let j = i+1 ; j < data.length && data.charAt(i) === data.charAt(j) ; j++){
            n++;
            i++;
          }
        returnString += "" + n + data.charAt(i);
      }
    }
    
    return returnString;
  }

//EJERCICIO 2 : SOLUCIÓN DE LA COMUNIDAD
// function countMe(s) {
//     return /[^0-9]/.test(s) ? '' : s.replace(/(.)\1*/g, (n, m) => n.length + m);
//   }

// const countMe = data =>
//     /\D/.test(data) ? `` : data.replace(/(\d)\1*/g, (val, $1) => val.length + $1);

//EJERCICIO 3
function testResult(array) {
  
    let average = Math.round(array.reduce((sum , next) => sum + next , 0) / array.length * 1000 ) / 1000;
    let hal = {
      h: array.filter((num) => num >= 9).length,
      a: array.filter((num) => num >= 7 && num < 9).length,
      l: array.filter((num) => num >= 1 && num < 7).length
    }
    
    if(hal.a === 0 && hal.l === 0){
      return [average, hal , "They did well"];
    }else{
      return [average, hal];
    }
  }

  //EJERCICIO 4
  function ArithmeticSequenceSum(a, r, n) {
    let sum = 0;
    
    for(let i = 0 ; i < n ; i++){
      sum += a + r * i;
    }
    
    return sum;
  }

  //EJERCICIO 5
  function createTemplate(template) {
    return function (args) {
        return template.replace(/{{(\w+)}}/g, function (match, key) {
            return args[key] || "";
        });
    };
  }
  