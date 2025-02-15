/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

const electronics = [
    laptop = 35000,
    tablet = 15000,
    mobile = 20000,
]
function calculateElectronicsBudget (laptopNum, tabletNum, mobileNum) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const total = (laptopPrice * laptopNum) + (tabletPrice * tabletNum) + (mobilePrice * mobileNum);
    return total;
}
console.log(calculateElectronicsBudget(1, 2, 3)); 