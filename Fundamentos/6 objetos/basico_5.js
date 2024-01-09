const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 123,
        complemento: 'Apto 101',
        pontosRef: [
            'Hospital X',
            'Shoppinh Y',
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);