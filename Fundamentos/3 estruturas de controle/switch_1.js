let nota = 9;

switch(Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 6: case 5: case 4:
        console.log('Recuperação!');
        break;
    case 3: case 2: case 1:
        console.log('Reprovado')
        break;
    default:
        console.log('Nota Inválida');
}

console.log("Fim")