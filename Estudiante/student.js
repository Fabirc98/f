`use strict`

function Student(nombre, correo, promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validaPromedio = function(){
        if (this.promedio > 70){
            return "Aprobado";
        } else {
            return "Reprobado";
        } 
    }
    this.obtenerUsuario= function(){
        this.correo=correo;
    }
}

let StudentOne = new Student("fabian", "frcote",70);
StudentOne.validaPromedio();
StudentOne.obtenerUsuario();

