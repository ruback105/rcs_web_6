const PI = 3.14;

function test() {
  const variable = 1;
  console.log(PI);
}

PI = 10;

function test2() {
  const variable = 2;

  return variable * PI;
}

test();
