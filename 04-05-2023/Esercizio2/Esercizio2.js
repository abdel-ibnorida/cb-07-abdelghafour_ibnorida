let array = [5,6,98,54,12,-3,7,9,12,111];
let containerMin = 0;
let containerMax = 0;

console.log (containerMin);
for (let i = 0; i < array.length; i++) {
    if ( array[i] < containerMin)
    {
        containerMin = array[i];
    }
    if ( array[i] > containerMax) {
        containerMax = array[i];
    }
}

console.log(containerMin);
console.log(containerMax);