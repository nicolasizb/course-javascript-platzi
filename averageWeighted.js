const listStudy = [
    { course: "programming", note: 10, credit: 2, },
    { course: "physical education", note: 8, credit: 5, },
    { course: "person finance", note: 7, credit: 5, },
];

const notesWithCredits = listStudy.map(function(objectData){
    return objectData.note * objectData.credit;
});

const sumNotesWithCredits = notesWithCredits.reduce(function(accumulatedValue = 0, valueNew){
    return accumulatedValue + valueNew;
});

const credits = listStudy.map(function(objectData){
    return objectData.credit;
});

const sumCredits = credits.reduce(function(accumulatedValue = 0, valueNew){
    return accumulatedValue + valueNew;
});

const result_ = sumNotesWithCredits / sumCredits;

const result = parseInt(result_)

console.log(result);