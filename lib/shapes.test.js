const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  it("renders correctly", () => {
    const wantedSvg = '<circle cx="150" cy="100" r="80" fill="black" />';
    const circle = new Circle();
    circle.setColor("black");
    const newSvg = circle.render();
    expect(newSvg).toEqual(wantedSvg);
  });
  it("needs to accept a fillColor", () => {
    const wantedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const newSvg = circle.render();
    expect(newSvg).toEqual(wantedSvg);
  });
});

describe("Triangle", () => {
  it("renders correctly", () => {
    const wantedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
    const triangle = new Triangle();
    const newSvg = triangle.render();
    expect(wantedSvg).toEqual(newSvg);
  });
  it("needs to accept a fillColor", () => {
    const wantedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="brown" />';
    const triangle = new Triangle();
    triangle.setColor("brown");
    const newSvg = triangle.render();
    expect(newSvg).toEqual(wantedSvg);
  });
});

describe("Square", () => {
  it("renders correctly", () => {
    const wantedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="blue" />';
    const square = new Square();
    square.setColor("blue");
    const newSvg = square.render();
    expect(newSvg).toEqual(wantedSvg);
  });
  it("needs to accept a fillColor", () => {
    const wantedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="yellow" />';
    const square = new Square();
    square.setColor("yellow");
    const newSvg = square.render();
    expect(newSvg).toEqual(wantedSvg);
  });
});
