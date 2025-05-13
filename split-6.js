function spinningRings(innerMax, outerMax) {
  let counter = 0 ;
  let inner = 0;
  let outer = 0;
  do{
    counter++;
    inner--;
    outer++;
    if(inner < 0)
      inner = innerMax;
    
    
    if(outer > outerMax)
      outer = 0
  }while(inner != outer)
  return counter
  
};

function sideLen(x, y) {
  let a = [(x**2 + y**2)**0.5, (y**2 - x**2)**0.5], r = [];
  for (let i = y - x + 1; i < y + x; i++)
    if (!a.includes(i))
      r.push(i);
  return r;
}

function cypher(string) {
  return string.replaceAll('I' , '1').replaceAll('l' , '1').replaceAll('R' , '2').replaceAll('z' , '2')
    .replaceAll('E' , '3').replaceAll('e' , '3').replaceAll('A' , '4').replaceAll('a' , '4')
    .replaceAll('S' , '5').replaceAll('s' , '5').replaceAll('G' , '6').replaceAll('b' , '6')
    .replaceAll('T' , '7').replaceAll('t' , '7').replaceAll('B' , '8').replaceAll('g' , '9')
    .replaceAll('O' , '0').replaceAll('o' , '0')
}

function pairs(ar){
  const limit = ar.length % 2 === 0 ? ar.length : ar.length -1;
  let count = 0;
  for(let i = 0 ; i < limit ; i+= 2){
    if((ar[i] + 1) === ar[i + 1] || ar[i] - 1 === ar[i + 1]){
      count++;
    }
  }
  
  return count;
  
};

function mobileKeyboard(str){
  const array = ['1234567890*#' , 'adgjmptw' , 'behknqux' , 'cfilorvy' , 'sz'];
  
  let strokes = 0;
  
  for(let i = 0 ; i < str.length ; i++){
    for(let j = 0 ; j < array.length ; j++){
      if(array[j].includes(str[i])){
        strokes += j + 1
      }
    }
  }
  return strokes
}