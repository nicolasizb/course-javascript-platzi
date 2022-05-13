// console.log({
//     priceOriginal,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount
// });

const coupons = [
    { name: "superPromotion", discount: 15 },
    { name: "promoFull", discount: 30 },
    { name: "promoDay", discount: 25 },
]

const isCouponValueValid =  function(coupon) {
    return coupon.name === couponValue;
}

const userCoupon = coupons.find(isCouponValueValid);

if(!userCoupon) {
    alert("The coupon " + couponValue + "no es válido")
}


function discountOperation(priceOriginal, discount){
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount_ = (priceOriginal * percentagePriceWithDiscount) / 100;
    return priceWithDiscount_;
}

function onClickButtonPriceDiscound() {
    const inputPrice = document.getElementById("InputPrice");
    // OBTENER VALORES DEPOSITADOS POR LOS USUARIOS
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = discountOperation(priceValue, discountValue);

    // EXERCISE
    const resultP = document.getElementById("ResultP");


    //inner text lo utilizamos para escribir HTML desde JavaScript
    resultP.innerText = "The price with discount is " + "$" + priceWithDiscount;
}


