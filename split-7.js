//EJERCICIO 1
function duplicateEncode(word){
  
  let result = '';
  
  word = word.toUpperCase()
  
  for(let i = 0 ; i < word.length ; i++){
    let count = word.split(word[i]).length - 1;
    count <= 1 ? result += '(' : result += ')'
  }
  return result;
}

//EJERCICIO 2
function findOdd(A) {
  
  let i = 0
  
  let count = 0;
  
  for(i = 0 ;  i < A.length && count % 2 === 0 ; i++){
    count = A.filter((letter) => letter === A[i]).length;
  }
  
  return A[i-1]
}

//EJERCICIO 3
function ipToInt32(ip) {
  
  let splitIp = ip.split(".")
  
  let sum = 0;
  
  for( let i = 0 ; i < splitIp.length ; i++){
    sum += parseInt(splitIp[i]) * ( 256 ** (splitIp.length - (i + 1)));
  }
  
  return sum;
}

//EJERCICIO 4
function howManyStep(a,b){
  let count = 0;
  while(a !== b){
    
    if(b % 2 === 0 && b / 2 >= a){
      b/= 2;
    }else{
      b -= 1;
    }
    console.log(b , a)
    count++
    
  }
  
  return count;
}

//EJERCICIO 5
function snapshot(scene) {
  
  let photo = scene;
  let start = 0;
  let end = 0;
  if(scene.length >= 11){
    
    start = scene.indexOf('s');
    end = scene.indexOf('l');
    if(start !== -1 || end !== -1){
        if(start === -1 || start -2 < 0){
        start = 0;
        end = 9;
      }else if(end === -1 || end + 2 >= scene.length){
        end = scene.length - 2;
        start = end - 9;
      }else{
        start = start -2 ;
        end = end +2;
      }
      
      photo = photo.substring(0, start  ) + '[[' + photo.substring(start + 2, start + 5) + 'x'
      + photo.substring(start + 6, end ) + ']]' + photo.substring(end+2, photo.length);
    }

      
  }
  
  
  return photo;
}