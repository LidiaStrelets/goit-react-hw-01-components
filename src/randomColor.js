function createRandomColor() {
  function randomInteger(min = 0, max = 255) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  return `rgb(${randomInteger()} ${randomInteger()} ${randomInteger()})`;
}

export default createRandomColor;
