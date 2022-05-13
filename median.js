let median;

const list = [
    900,
    300,
    500,
    400000,
];

list.sort(function(a, b) {
    return a - b;
});
console.log(list);


function calculeMedianArithmetic(list) {
    const additionList = list.reduce(function(accumulatedValue = 0, elementNew) {
        return accumulatedValue + elementNew;
    });

    const averageList = additionList / list.length;
    return averageList;
}

const halfList = parseInt(list.length / 2);

function isEven(number) {  
    if(number % 2 === 0) {
       return true;
    } else {
        return false;
    }
}

if(isEven(list.length)) {
    const element1 = list[halfList - 1];
    const element2 = list[halfList];

    const averageElement1and2 = calculeMedianArithmetic([
        element1,
        element2
    ]);

    median = averageElement1and2;

} else {
    median = list[halfList];
}