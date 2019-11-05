var cola = new Cola();
var a = 1;
var completos = 0;
var nada = 0;

for (var i = 0; i < 300; i++) {
    if (Math.trunc(Math.random() * 100 + 1) <= 39) {
        cola.agregar(new Nodo("p" + a));
        a++;
    }

    cola.imprimir();

    if (cola.primero) {
        cola.primero.ciclos--;
        if (cola.primero.ciclos == 0) {
            cola.afuera();
            completos++;
        }
    } else {
        nada++;
    }
}
console.log('Ciclos sin cola: ' + nada);
console.log('Completados: ' + completos);
console.log('Pendientes: ' + cola.long());
console.log('Ciclos pendientes totales: ' + cola.ciclos())