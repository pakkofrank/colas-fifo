var cola = new Cola();
var n = 1;
var completados = 0;
var vacio = 0;
var act;

for (var i = 0; i < 300; i++) {
	if (Math.trunc(Math.random()*100+1) <= 39) {
		cola.agregar(new Nodo("p"+n));
		if (n == 1) {
			act = cola.primero;
		}
		n++;
	}

	if (cola.primero) {
		act.ciclos--;
		if (act.ciclos == 0) {
			cola.eliminar(act.nombre);
			completados++;
		}
		act = act.sig;
	}else{
		vacio++;
	}

	cola.imprimir();
}

console.log('Ciclos sin cola: ' + vacio);
console.log('Completos: ' + completados);
console.log('Pendientes: ' + cola.long());
console.log('Ciclos pendientes totales: ' + cola.ciclos())