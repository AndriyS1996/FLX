
class User {
    constructor(name='unknowName', orderTotalPrice=0, weekendDiscount=0, nightDiscount=0){
        this.name = name;
        this.orderTotalPrice = orderTotalPrice;
        this.weekendDiscount = weekendDiscount;
        this.nightDiscount = nightDiscount;
    }
    makeOrder(){
        return `Price after discount and including bonuses is ${this.orderTotalPrice}`
    }
}

function getDiscount(user){
    let date = new Date();
    if ((date.getDay() === 0) || (date.getDay() === 6)){
        user.orderTotalPrice -= user.weekendDiscount;
    } else if (( 6 >= date.getHours()) || (date.getHours() >= 23)) {
        user.orderTotalPrice -= user.nightDiscount;
    }
}

function setBonus(user){
    let bonus = Math.floor(user.orderTotalPrice / 100) * 5;
    user.orderTotalPrice -= bonus;
}

let user1 = new User('User1', 220, 20, 10);
setBonus(user1);
getDiscount(user1);
console.log(user1.makeOrder());