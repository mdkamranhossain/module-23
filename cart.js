const productPrice = [
    {name: 'shirt', price: 500, quantity: 2},
    {name: 'pant', price: 600, quantity: 5},
    {name: 'shoe', price: 1000, quantity: 3},
    {name: 'watch', price: 2000, quantity: 7},
]

function totalPrice(productPrice){
    let total = 0;
    for(const product of productPrice){
        total = total + product.price * product.quantity;
    }
    return total;
}
const totalAmount = totalPrice(productPrice);
console.log(totalAmount);