//Helpers
function isPair(number){
    if(number % 2 === 0){
        return true;
    } else{
        return false;
    }
};

function calculeAverage(list){
    const sumList = list.reduce(function(accumulatedValue = 0, valueNew){
        return accumulatedValue + valueNew;
    });    
    const averageSalary = sumList / list.length;
    return averageSalary;
}

// Calculator of median
function medianSalarys(list){
    const half = parseInt(list.length / 2);

    if(isPair(list.length)){
        const personHalf1 = list[half];
        const personHalf2 = list[half - 1];

        const median =  calculeAverage([personHalf1, personHalf2]);
        return median;
    } else{
        // para entrar a la posision de la mita se pone []
        const personHalf = list[half];
        return personHalf;
    }
};

// Median General
const salarysCol = colombia.map(
    function(person){
        return person.salary;
    }
); 

const salarysColSorted = salarysCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianGeneralCol = medianSalarys(salarysColSorted);

// Median of top 10%
const spliceStart = (salarysColSorted.length * 90) / 100; 
const spliceCount = salarysColSorted.length - spliceStart;

const salaryColTop10 = salarysColSorted.splice(spliceStart, spliceCount);

const medianTop10Col = medianSalarys(salaryColTop10);

console.log(
    { medianGeneralCol, medianTop10Col }
);