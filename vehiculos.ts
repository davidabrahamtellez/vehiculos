//ejercicio de metodos en typescript
class vehiculo{
    //atributos o propiedades sin inicializar
    marca: string;
    modelo:string;
    color: string;
    puertas:Number;
    kilometraje: number = 0;

    constructor(marca_:string, modelo_:string, color_:string,puertas_:number){
        //console.log(this,"this antes de inicializar variables")
        this.marca = marca_
        this.modelo = modelo_
        this.color = color_
        this.puertas = puertas_
        //console.log(this,"this despues de inicializar variables")
    }
    avanzar(){
        this.kilometraje = this.kilometraje + 100
    }

}


let mi_sedan = new vehiculo ("nisan","2020","negro",4)

//acceder a un atributo
console.log (mi_sedan.kilometraje, "antes de avanzar")
mi_sedan.avanzar()
mi_sedan.avanzar()
mi_sedan.avanzar()
console.log (mi_sedan.kilometraje, "despues de avanzar")

let mi_deportivo = new vehiculo ("ferrari","2019","blanco",2)

console.log ("mi ferrari tiene "mi_deportivo.puertas, "puertas")
console.log ("mi sedan tiene "mi_sedan.puertas, "puertas")

