const { Circle, Square, Triangle } = require("./shapes");

describe("Shapes", () => {
  it(" Circle should render", () => {
    const circle = new Circle();
    const color = "green";
    circle.setColor(color);
    const expected = `<circle cx="50%" cy="50%" r="50" height="100%" width="100%" fill="green">`;
    expect(circle.render()).toEqual(expected);
  });
  it(" Square should render", () => {
    const square = new Square();
    const color = "blue";
    square.setColor(color);
    const expected = `<rect x="50" y="20" width="150" height="150" fill="blue"`;
    expect(square.render()).toEqual(expected);
  });
  it("Triangle should render", () => {
    const triangle = new Triangle();
    const color = "red";
    triangle.setColor(color);
    const expected = `<polygon height="100%" width="100%"polygon points="50 15, 100 100, 0 100" fill="red">`;
    expect(triangle.render()).toEqual(expected);
  });
});
