const numeros = [10, 20, 30];

function paraCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array)
}

numeros.forEach(paraCadaElemento);

numeros.forEach(function (el) {
    console.log(el)
});

numeros.forEach(function (el, i) {
    console.log(i)
});