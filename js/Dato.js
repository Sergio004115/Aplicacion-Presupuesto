class Dato {
    constructor(descripcion, valor) {
        this.descripcion = descripcion;
        this.valor = valor;
    }

    get descripcion() {
        return this.descripcion;
    }

    set descripcion(descripcion) {
        this.descripcion = descripcion;
    }

    get valor() {
        return this.valor;
    }

    set valor(valor) {
        this.valor = valor;
    }
}