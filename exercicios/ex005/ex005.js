let n1 = 1.23;
let n2 = 2.3456;
let n3 = 3.4;
console.log(n2.toFixed(2))
console.log(`R$ ${n3.toFixed(2).replace('.', ',')}`)
console.log(n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));