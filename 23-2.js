const height = [63, 74, 22, 24, 99, 64, 73, 66]

function getMax(height){
    let max = height[0];
    for (const h of height) {
        if(h > max){
            max = h;
    return max;       }
    }
}
console.log(getMax(height));