

//EJERCICIO 1

function leaderboardSort(leaderboard, changes) {
  
  for(let i = 0 ; i < changes.length ; i++){
    
    let found = false;
    
    for(let j = 0 ; j < leaderboard.length && !found; j++){
      if(changes[i].indexOf(leaderboard[j]) !== -1){
        
        
        found = true;
        
        let sign = changes[i].charAt(changes[i].length-2);
        let positions = changes[i].charAt(changes[i].length-1)
        
        
        switch(sign){
            case '+':
              for(let k = positions ; k > 0 && j > 0 ; k--){
                
                  let a = leaderboard[j];
                  let b = leaderboard[j-1];
                
                  leaderboard[j] = b;
                  leaderboard[j-1] = a;
                  
                  j--;
                
              }
              break;
            case '-':
              for(let k = positions ; k > 0 && j < leaderboard.length -1 ; k--){
                
                  let a = leaderboard[j];
                  let b = leaderboard[j+1];
                
                  leaderboard[j] = b;
                  leaderboard[j+1] = a;
                
                  j++;
                
              }
        }
        
        
        
      }
    }
  }
  
  return leaderboard;
  
}


//EJERICIO 2
function evalParentheses(parens) {
  
  let lvl = 0;
  let result = [0];
  let prev = "";
  
  for(let i = 0 ; i < parens.length ; i++){
    
    if(parens.charAt(i) === '('){
      if(result.length <= lvl){
        result.push(0)
      }
      lvl++;
    }else if(parens.charAt(i) === ')'){
             
      lvl--;
      if(prev === '('){
        result[lvl]++;
      }else if(prev === ')'){
        result[lvl] += result[lvl + 1] * 2
        result[lvl + 1] = 0;
      }
      
    }
    
    
    prev = parens.charAt(i);
    
  }
  console.log(result)
  
  return result[0];
}



//EJERCICIO 3
function bin2gray(bits) {
  
  bits = [1,1,1,1]
  
  let result = [];
  let binary = 0;
  
  for(let i = 0 ; i < bits.length ; i++){
    
    binary += bits[i] * (2 ** (bits.length - i - 1));
    
  }
  for(let j = 1 ; j <= binary ; j++){
    if(Number.isInteger(Math.log2(j))){
      result.unshift(1)
    }
    else{
      
      let temp = j;
      let lvl = 0;
      
      while( temp > 0){
        
        console.log(temp)
        
          lvl = Math.floor(Math.log2(temp));
          temp = temp - (2 ** lvl)
      }
      
      result[ result.length - lvl - 1] = sumbin(result[ result.length - lvl - 1])
    }
  }
  return result.length > 0 ? result : [0];
}

function gray2bin(gray) {
  return [0];
}

function sumbin(num){
  if(num === 1){
    return 0
  }else if(num === 0){
    return 1
  }
}

//EJERCICIO 4

function compare(a, b){

  if(a === null || b === null){
    return a === b
  }else{
    return a.val === b.val && compare(a.left , b.left) && compare(a.right , b.right)
  }
  
}

// SOLUCIÓN DE LA COMUNIDAD

// function compare(a, b){

//   return JSON.stringify(a) === JSON.stringify(b)
  
// }

// EJERCICIO 5
function nameInStr(str, name){

  let formedName = "";
  
  let cont = 0;
  
  for( let i = 0 ; i < str.length && cont < name.length ; i++){
    if(str.charAt(i) === name.charAt(cont)){
      formedName += str.charAt(i);
      cont++;
    }
  }
  
  console.log(formedName)
  console.log(name)
  
  return formedName.toUpperCase() === name.toUpperCase();
  
}