//EJERCICIO 1 : MI SOLUCION

function findDifference(a, b) {
    let volumeA = 1;
    let volumeB = 1;
    
    for(let i = 0 ; i < a.length ; i++){
      volumeA *= a[i]
    }
    for(let j = 0 ; j < b.length ; j++){
      volumeB *= b[j];
    }
    
    return volumeA - volumeB;
  }

//EJERCICIO 1 : SOLUCIÓN ESPERADA

function findDifference2(a,b){

    return Math.abs(volume(a) - volume(b))

}

function volume(cuboid){
    return cuboid.reduce((current , next) => current * next);
}

//EJERCICIO 2

function hexToDec(hexString){
    return parseInt(hexString , 16);
}

//EJERCICIO 3 : MI SOLUCIÓN

function binToDec(bin) {
    bin += "";
    return parseInt(bin , 2);
}

//EJERCICIO 3 : SOLUCIÓN ESPERADA

function binToDec(bin){
    return parseInt(bin, 2);
}

//EJERCICIO 4
function move (position, roll) {
    return position + roll * 2;
}

//EJERICIO 5
function isDivisible(n, x, y) {
    return x != 0 && y != 0 && n % x == 0 && n % y == 0;
}