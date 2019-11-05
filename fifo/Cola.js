class Cola {
    constructor() {
        this._primero = null;
        this._ultimo = null;
    }
    get primero() {
        return this._primero;
    }
    set primero(v) {
        this._primero = v;
    }

    get ultimo() {
        return this._ultimo;
    }
    set ultimo(v) {
        this._ultimo = v;
    }

    agregar(nuevo) {
        if (this._primero) {
            this._ultimo.sig = nuevo;
            this._ultimo = nuevo;
        } else {
            this._primero = nuevo;
            this._ultimo = nuevo;
        }
    }

    buscar() {
        var act = this._primero;
        while (act && act.nombre != nombre) {
            act = act.sig;
        }
        if (act) {
            return act;
        } else {
            return null;
        }
    }

    afuera() {
        if (this._primero) {
            var n = this._primero;
            this._primero = this._primero.sig;
            return n;
        } else {
            return null;
        }
    }

    imprimir() {
        var act = this._primero;
        var a = '';
        while (act) {
            a += act.nombre + ':' + act.ciclos;
            if (act.sig) {
                a += ', ';
            }
            act = act.sig;
        }
        console.log(a);
    }

    ciclos() {
        var contador = 0;
        var act = this._primero;

        while (act) {
            contador += act.ciclos;
            act = act.sig;
        }
        return contador;
    }
    long() {
        var contador = 0;
        var act = this._primero;

        while (act) {
            contador++;
            act = act.sig;
        }
        return contador;

    }
}