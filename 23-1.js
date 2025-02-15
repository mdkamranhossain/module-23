function getMax(x, y){
    if(x > y){
        return x;
    } else {
        return y;
    }
}

const result = getMax(16, 12);
console.log(result);



function biggest(a, b, c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
const result2 = biggest(10, 20, 30);
console.log(result2);

const result4 = Math.max(10, 20, 30);
console.log(result4);