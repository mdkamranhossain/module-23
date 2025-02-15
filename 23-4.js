const prices = [100, 200, 300, 689, 638, 784, 835];

function getMin(numbers){
    let min = numbers[0];
    for (const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log(cheap); 

//array vitor object


const mobile = [
    {name: 'Samsung', price: 6500, camera: 10, storage: 32, ram: 4},  
    {name: 'xiomi', price: 76500, camera: 10, storage: 32, ram: 4},  
    {name: 'oppo', price: 66500, camera: 10, storage: 32, ram: 4},  
    {name: 'Iphone', price: 5500, camera: 10, storage: 32, ram: 4},  
    {name: 'walton', price: 6500, camera: 10, storage: 32, ram: 4},  
    {name: 'htc', price: 4500, camera: 10, storage: 32, ram: 4},  
]

function getCheapestPhone(mobile){
    let min = mobile[0];
    for(const phone of mobile){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheapMobile = getCheapestPhone(mobile);
console.log(cheapMobile);


function getMaxPricePhone(mobile){
    let max = mobile[0];
    for(const phones of mobile){
        if(phones.price > max.price)
        max = phones;
    }
    return max;
}
const maxMobile = getMaxPricePhone(mobile);
console.log(maxMobile);
