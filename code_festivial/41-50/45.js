const d = new Date();
let a = d.getTime();

console.log(Math.floor(a / (3600 * 24 * 365 * 1000)) + 1970)