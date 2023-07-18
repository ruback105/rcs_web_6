const phone = {
  name: "Iphone 14",
  manufacturer: "Apple",
  price: 829,
  camera: {
    front: {
      megapixels: 12,
      video: "4K",
    },
    back: {
      megapixels: 50,
      video: "8K",
    },
  },
  components: ["screen", "buttons", "speaker"],
};

console.log(phone.name);
console.log(phone.manufacturer);
console.log(phone["price"]);
console.log(phone.components[0]);

const frontMP = phone.camera.front.megapixels;

console.log(frontMP);

console.log("-------------------------------");

// const age = 16;

// if (age >= 18) {
//   console.log("You can enter a nightclub");
// } else {
//   console.log("You can't enter a nightclub");
// }

const currentColor = "bug";

if (currentColor === "green") {
  console.log("GO!");
} else if (currentColor === "yellow") {
  console.log("SLOW DOWN!");
} else {
  console.log("STOP!");
}

if (currentColor === "green") {
  console.log("GO!");
}
if (currentColor === "yellow") {
  console.log("SLOW DOWN!");
}
if (currentColor === "red") {
  console.log("STOP!");
}

console.log("-------------------------------");

const day = 100;

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Error");
}

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Error");
}
