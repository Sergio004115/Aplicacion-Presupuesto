const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta Coche', 1500)
];

const egresos = [
    new Egreso('Renta Departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = () => {
    cargarCabecero();
    cargarCabecero();
}

let totalIngresos = () => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}


let totalEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        totalIngresos += egreso.valor;
    }
    return totalEgresos;
}


let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = totalIngresos();
    document.getElementById('egresos').innerHTML = totalEgresos();


}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', { Style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresoHTML = '';
    for (let ingreso of ingresos) {
        ingresoHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresoHTML;
}

const cargarEgresos = () => {
    let egresoHTML = '';
    for (let egreso of egresos) {
        egresoHTML += crearIngresoHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML;
}


const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" (onclick)="eliminarIngreso(${ingreso.id})>
                <ion-icon name="close.circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return ingresoHTML;
}

const crearEgresoHTML = (ingreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" (onclick)="eliminarEgreso(${ingreso.id})>
                <ion-icon name="close.circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return egresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingresoId === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egresoId === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if (descripcion.value != '' && valor.value != '') {
        if (tipo.value === 'ingreso') {
            ingresos.push(new Ingreso(descripcion.value, valor.value));
            cargarCabecero();
            cargarIngresos();
        } else if (tipo.value === 'egreso') {
            egresos.push(new Egreso(descripcion.value, valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}