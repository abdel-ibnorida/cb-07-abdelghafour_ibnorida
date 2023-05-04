let array1 = [1,2,3,4,5,6,7,8,9,10];
let containerA = 0;
let containerB = 0;

for (let i = 0; i < array1.length/2; i++) {
    containerA = array1 [(array1.length - 1 - i)];
    containerB = array1 [i];
    array1 [i] = containerA;
    array1 [(array1.length - 1 - i)] = containerB;
}

console.log (array1);