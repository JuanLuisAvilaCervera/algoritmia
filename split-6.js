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