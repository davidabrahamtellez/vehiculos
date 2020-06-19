//ejercicio de metodos en typescript
var vehiculo = /** @class */ (function () {
    function vehiculo(marca_, modelo_, color_, puertas_) {
        this.kilometraje = 0;
        //console.log(this,"this antes de inicializar variables")
        this.marca = marca_;
        this.modelo = modelo_;
        this.color = color_;
        this.puertas = puertas_;
        //console.log(this,"this despues de inicializar variables")
    }
    vehiculo.prototype.avanzar = function () {
        this.kilometraje = this.kilometraje + 100;
    };
    return vehiculo;
}());
var mi_sedan = new vehiculo("nisan", "2020", "negro", 4);
//acceder a un atributo
console.log(mi_sedan.kilometraje, "antes de avanzar");
mi_sedan.avanzar();
mi_sedan.avanzar();
mi_sedan.avanzar();
console.log(mi_sedan.kilometraje, "despues de avanzar");
var mi_deportivo = new vehiculo("ferrari", "2019", "blanco", 2);
console.log("mi ferrari tiene ", mi_deportivo.puertas, "puertas");
console.log("mi sedan tiene ", mi_sedan.puertas, "puertas");
