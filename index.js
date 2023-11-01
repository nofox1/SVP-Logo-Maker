const inquirer = require("inquirer");
const jest = require("jest");
const shapes = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter 3 Characters!",
  },
  {
    type: "input",
    name: "text",
    message: "Enter in a color keyword (OR a hexadecimal number).",
  },
  {
    type: "list",
    name: "shapes",
    message: "Please select from the list of shapes.",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shape",
    message: "Enter in a color keyword (OR a hexadecimal number).",
  },
];
