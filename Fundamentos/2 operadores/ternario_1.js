const hora = 10;
// const saudacao = hora <= 11 ? 'Bom dia' : 'Boa tarde'; //cenário com 2 situações

const saudacao = hora <= 11 ? 'Bom dia' : (hora <= 17 ? 'Boa tarde': "Boa Noite"); // cenário com 3 situações

console.log(saudacao);
