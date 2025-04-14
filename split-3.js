class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }

  function getASCII(c){
    return c.charCodeAt(0);
  }

  function periodIsLate(last, today, cycleLength) {
    return  (today - last) / (1000 * 60 * 60 * 24) > cycleLength;
  }

  function mango(quantity, price){
    return (quantity - Math.floor( quantity / 3)) * price;
  }

  function doubleInteger(i) {
    i*=2;
    return i;
  }

