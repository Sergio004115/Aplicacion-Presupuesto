class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this.id += Ingreso.contadorIngresos;
    }

    get id() {
        return this.id;
    }


}

export default Ingreso;