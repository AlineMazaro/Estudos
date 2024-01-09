function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }
}

const d1 = criarData(23, 7, 2021)
const d2 = criarData(3, 5, 1993)
const d3 = criarData(14, 3, 1989)

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
