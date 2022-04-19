// Square code
console.group("square")
    const squareSide = 5;
    console.log("Los lados del cuadrado miden " + squareSide + "cm");

    const squarePerimeter = squareSide * 4;
    console.log("El perímetro del caudrado es " + squarePerimeter + "cm");

    const squareArea = squareSide * squareSide;
    console.log("El área del cuadrado es " + squareArea + "cm^2");
console.groupEnd("square");

// Triangle code
console.group("triangle");
    const side1 = 6;
    const side2 = 6;
    const baseTriangle = 4;
    const heightTriangle = 5.5;
    const areaTriangle = (baseTriangle * heightTriangle) / 2;

    const trianglePerimeter = side1 + side2 + baseTriangle;
    console.log(
        "Los lados del tríangulo miden " 
        + side1 
        + "cm, "
        + side2
        + "cm, "
        + baseTriangle
        + "cm"
    );
    console.log("La altura del tríangulo es " + heightTriangle + "cm");
    console.log("El perímetro del Tríangulo es " + trianglePerimeter + "cm");
    console.log("El área del Tríangulo es " + areaTriangle + "cm^2");
console.groupEnd("triangle");

// Circle code
console.group("Circle");
    const circleRadio = 4;
    const circleDiameter = circleRadio * 2;
    const PI = Math.PI;
    const circleArea = (circleRadio * circleRadio) * PI;
    const circlePerimeter = circleDiameter * PI;

    console.log("El radio del círculo es " + circleRadio + "cm");
    console.log("El diametro del círculo es " + circleDiameter + "cm");
    console.log("El área del círculo es " + circleArea + "cm");
    console.log("La perímetro del círculo es " + circlePerimeter + "cm");
console.groupEnd("Circle");



