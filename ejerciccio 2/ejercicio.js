`use strict`


let ages = [15, 45, 50];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25) {
        alert(ages[i]);
    }
}     

ages.push("25");
alert(ages)