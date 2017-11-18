const { generate } = require("./main");

// console.log(
//   `Уникальных: ${firstWorld.length *
//     endWorld.length} (${firstWorld.length} * ${endWorld.length})`
// );

for (let i = 0; i < 20; i++) {
  console.log(generate());
}
