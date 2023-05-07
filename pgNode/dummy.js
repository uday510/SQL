var val1 = [
    {a1: 1, b1: 2},
    {c1: 3, d1:4}
]
var val2 = [
    {a2: 5, b2: 6},
    {c2: 7, d2: 8}
]
const result = [];

val1.forEach((lead1, index) => {
    const lead2 = val2[index];
    result.push(Object.assign(lead1, lead2));
});
console.log(result);