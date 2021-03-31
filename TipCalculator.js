/Code Challenge #4: Tip Calculator

//15% for50 to 300
//20% 300+
//They said not to use var or add language using +

const price = parseFloat(prompt('Please enter your price'));


console.log('Your total before tip was ' + price);

//if (price >= 50) {
//    var tip = (price * .15)
//};
//console.log("Your tip is " + tip);


tipMessage = price >= 50 && price <= 300 ?
    'Your tip will be 15%' : 'Your tip will be 20%'
console.log(tipMessage)

//run equation for tip

const tip = price >= 50 && price <= 300 ? price * .15 : price * .20;



const totalValue = (price + tip);



console.log(`The bill was ${price.toFixed(2)} , the tip was ${tip.toFixed(2)}, and the total value is ${totalValue.toFixed(2)}`);

//END PROGRAM DEPLOY ON GITHUB
