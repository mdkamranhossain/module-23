// simple discount function

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else if(quantity <= 300){
        const total = quantity * 80;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const total = discountedPrice(400);
console.log(total);


// multilayer discount function
/**
 * first 100 quantity 100tk
 * 101To200 quantity 90tk
 * 201To300 quantity 80tk
 */

function discountedPrice(quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 80;

    if(quantity <= 100){
        const total = quantity * first100price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = quantity * first100price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100price;
        const second100Total = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const finalPrice = discountedPrice(150);
console.log(finalPrice)