const sum = (a, b) => {
  return a + b;
};

const mult = (a, b) => {
  return a * b;
};

const calc = (a) => {
  return (b) => {
    return (fn) => {
      return fn(a, b);
    };
  };
};

console.log(calc(3)(4)(mult));

const suma = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(suma(2)(2)(2));
