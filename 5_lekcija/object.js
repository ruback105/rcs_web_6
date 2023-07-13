const me = {
  name: "Artur",
  age: 24,
  job: "frontend developer",
  skills: ["HTML", "CSS", "JS"],
  nestedObject: {
    name: "Artur",
  },
  1: "one",
  "hello-@": "hello",
};

const phone = {
  brand: "Samsung",
  model: "Galaxy S10",
  camera: {
    front: "12MP",
    back: "16MP",
  },
  materials: ["plastic", "glass", "metal"],
};

console.log(me.name);
console.log(me.age);
console.log(me.job);
console.log(me.skills);
console.log(me.skills[0]);
console.log(me.nestedObject.name);
