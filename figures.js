// Square code
console.group("square")
    const squareSide = 5;
    console.log("Los lados del cuadrado miden " + squareSide + "cm");

    function squarePerimeter(side) {
        return side * 4 + "cm";
    }

    function squareArea(side) {
        return side * side + "cm^2";
    }
console.groupEnd()

// Triangle code
console.group("triangle");

    function trianglePerimeter(side1, side2, baseTriangle) {
        return side1 + side2 + baseTriangle;
    }

    function triangleArea(Base, Height) {
        return (Base * Height) / 2; 
    }

    // console.log("La altura del tríangulo es " + heightTriangle + "cm");
    // console.log("El perímetro del Tríangulo es " + trianglePerimeter + "cm");
    // console.log("El área del Tríangulo es " + areaTriangle + "cm^2");
console.groupEnd("triangle");

// Circle code
console.group("Circle");
    const PI = Math.PI;

    function circleDiameter(radio) {
        return radio * 2;
    }

    function circleArea(radio) {
        return (radio * radio) * PI;
    }
    function circlePerimeter(radio) {
        const diameter = circleDiameter(radio);
        return diameter * PI;
    }

console.groupEnd("Circle");


// INTERACTION HTML

// SQUARE
function squarePerimeterButton(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}
function squareAreaButton() {
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area =  squareArea(value);
    alert(area);
}

// TRIANGLE
function trianglePerimeterButton() {
    const input = document.getElementById("InputTriangle");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

