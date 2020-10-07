let a = 10;
let b = 2;

function sum(a, b) {
  let resultInside = a + b;
  return resultInside;
}

const restar = function (a, b) {
  let resultInside = a - b;
  return resultInside;
};

const dividir = (a, b) => {
  let resultInside = a / b;
  return resultInside;
};

const dividir2 = (a, b) => a / b;

let result = sum(a, b);

console.log(dividir2(a, b));
