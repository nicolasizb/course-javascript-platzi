function calculeAmountInterestsTime(_amount, _interests, _time){
    if(_amount > 0){
        if(_interests <= 10){
            const percentageInterests = _interests / 100;
            const amountWithInterests = _amount * percentageInterests;
            if(_time >= 1){
                const resultTotal = amountWithInterests * _time;
                return resultTotal; 
            } else {
                alert("The year is not valid");
            }
        } else{
            alert("The interest percentage is not valid")
        }
    } else {
        alert("The amount is not valid")
    }
};

function calculeDataOnClick(){
    const amount = document.getElementById("InputAmount").value;
    const interestsYear =  document.getElementById("InputPercentageInterests").value;
    const timeYear = document.getElementById("InputTime").value;
    const paragraph1 = document.getElementById("p1");
    const paragraph2 = document.getElementById("p2");
    const paragraph3 = document.getElementById("p3");
    const paragraph4 = document.getElementById("p4");


    const calculationTotal = calculeAmountInterestsTime(amount, interestsYear, timeYear);

    paragraph1.innerText = "Your investment with initial capital of " + "$" + amount;
    paragraph2.innerText = " and simple annual interest of " + interestsYear + "%";
    paragraph3.innerText = " over " + timeYear + " years will be ";
    paragraph4.innerText = "$" + calculationTotal;
};


