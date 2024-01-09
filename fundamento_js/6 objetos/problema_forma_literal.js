const d1 = {
    dia: 23,
    mes: 7,
    ano: 2021,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 3,
    mes: 5,
    ano: 1993,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia: 14,
    mes: 3,
    ano: 1989,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());