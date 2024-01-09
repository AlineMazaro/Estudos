const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';

//foreach

for(let nota of notas) {        //for of mostra os valores
    valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {      //for in mostra os indices
    indices += indice + ' ';
}

console.log(indices);