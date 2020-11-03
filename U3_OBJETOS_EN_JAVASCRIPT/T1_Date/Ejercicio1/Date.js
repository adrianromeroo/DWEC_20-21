let fecha1 = new Date();
let fecha2 = new Date('2021-06-24');

let milisegundos = fecha2.getTime() - fecha1.getTime();

console.log((milisegundos / (1000*60*60*24)));