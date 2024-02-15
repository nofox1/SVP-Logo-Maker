const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  it("renders correctly", () => {
    const wantedSvg = '<circle cx="150" cy="100" r="80" fill="brown"/>';
    const circle = new Circle();
    circle.setColor("brown");
    const newSvg = circle.render();
    expect(newSvg).toEqual(wantedSvg);
  });
  it("needs to accept a fillColor", () => {
    const wantedSvg = '<circle cx="150" cy="100" r="80" fill="blue"/>';
    const circle = new Circle();
    circle.setColor("blue");
    const newSvg = circle.render();
    expect(newSvg).toEqual(wantedSvg);
  });
});

describe("Square", () => {
  it("renders correctly", () => {
    const wantedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="teal"/>';
    const square = new Square();
    square.setColor("teal");
    const newSvg = square.render();
    expect(newSvg).toEqual(wantedSvg);
  });
  it("needs to accept a fillColor", () => {
    const wantedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="yellow"/>';
    const square = new Square();
    square.setColor("yellow");
    const newSvg = square.render();
    expect(newSvg).toEqual(wantedSvg);
  });
});

describe("Triangle", () => {
  it("renders correctly", () => {
    const wantedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="green"/>';
    const triangle = new Triangle();
    triangle.setColor("green");
    const newSvg = triangle.render();
    expect(wantedSvg).toEqual(newSvg);
  });
  it("needs to accept a fillColor", () => {
    const wantedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="grey"/>';
    const triangle = new Triangle();
    triangle.setColor("grey");
    const newSvg = triangle.render();
    expect(newSvg).toEqual(wantedSvg);
  });
});
