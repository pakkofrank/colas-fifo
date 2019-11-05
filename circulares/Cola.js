class Cola{
    constructor(){
        this._primero = null;
    }
    get primero(){return this._primero;}
    set primero(v){this._primero = v;}
    
    agregar(nuevo){
        if(this._primero){
            var act = this._primero;
            while(act.sig != this._primero){
                act = act.sig;

            }
            act.sig = nuevo;

        }else{
            this._primero = nuevo;
           
        }
        nuevo.sig = this._primero;
    }

    buscarAnterior(nombre){
		var act = this._primero;
		do{
			if (act.sig.nombre == nombre)
				return act;
			else
            act = act.sig;
		}while(act != this._primero);
		return null;
    }
    
    eliminar(nombre){
        var nodo = this.buscarAnterior(nombre);
		if (nodo) {
			if (nodo.sig == this._primero) {
				if (nodo == this._primero) {
					this._primero = null;
				}else{
					this._primero = nodo.sig.sig;
					nodo.sig = this._primero;
				}
			}else{
				nodo.sig = nodo.sig.sig;
			}
			return true;
		}else
			return null;

    }

    imprimir(){
        if (this._primero) {
			var a = '';
			var act = this._primero;
			do{
				a += act.nombre+':'+act.ciclos+' ';
				act = act.sig;
			}while(act != this.primero);
			console.log(a);
		}else
			return null;

    }
    ciclos(){
        if(this._primero){
            var contador = 0;
            var act = this._primero;

            do{
                contador += act.ciclos;
                act = act.sig; 
            }while(act != this._primero){
                return contador;

            }

        }else{
            return null;
        }
    }

    long(){
        if (this._primero) {
			var contador = 0;
			var act = this._primero;
			do{
				contador++;
				act = act.sig;
			}while(act != this._primero);
			return contador;
		}else
			return null;
	}

    

    


}