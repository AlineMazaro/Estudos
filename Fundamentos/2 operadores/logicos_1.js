let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "#1 (And) Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2 (Or) Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

//Ou exclusivo (estritamente diferente):
console.log(true !== true); 
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

//Operador de negação / Unário
console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);