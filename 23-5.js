const productPrice = [
    {name: 'shirt', price: 500},
    {name: 'pant', price: 600},
    {name: 'shoe', price: 1000},
    {name: 'watch', price: 2000},
];

function totalPrice(productPrice){
    let total = 0;
    for(const product of productPrice){
        total = total + product.price;
    }
    return total;
}
const totalAmount = totalPrice(productPrice);
console.log(totalAmount);
