//Task -1:
//Find the lowest number in the array below.

const heights = [167, 190, 120, 165, 137];

function lowestNumber(arr){
    for(const num of arr){
        let min = heights[0];
        if(num < min){
            min= num;
            return min; 
        }
    }
}
console.log(lowestNumber(heights)); 
