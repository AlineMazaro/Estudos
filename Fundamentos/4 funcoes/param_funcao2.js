function somar(a = 0, b = 0, c = 0, d = 0) {    // assumindo o valor como 0 caso não seja passado todos os argumentos.
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());