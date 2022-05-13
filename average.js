const list = [];

function calculeMedianArithmetic(list) {
    const sumList = list.reduce(function(accumulatedValue = 0, elementNew) {
        return accumulatedValue + elementNew;
    });

    const averageList = sumList / list.length;
    return averageList;
}