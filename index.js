var Input = require('./src/Input');


var input1 = new Input();
var input2 = new Input();
var input3 = new Input();

input1.scanProduct('1 book at 12.49');
input1.scanProduct('1 music CD at 14.99');
input1.scanProduct('1 chocolate bar at 0.85');

input2.scanProduct('1 imported box of chocolates at 10.00');
input2.scanProduct('1 imported bottle of perfume at 47.50');

input3.scanProduct('1 imported bottle of perfume at 27.99');
input3.scanProduct('1 bottle of perfume at 18.99');
input3.scanProduct('1 packet of headache pills at 9.75');
input3.scanProduct('1 box of imported chocolates at 11.25');



console.log(input1.output());
console.log("\n");
console.log(input2.output());
console.log("\n");
console.log(input3.output());