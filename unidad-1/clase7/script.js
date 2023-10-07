// ----------------------------------------------------------
var numero = 10; // variable global
let numero2 = 20; // variable local
const numero3 = 30; // variable constante
// ----------------------------------------------------------
//tipos de variables
// let nombre = "Juan";
// let isCasado = true;
// let edad = 30;
// let sueldo = 950.20;
// let hijos = null;
// ----------------------------------------------------------
const alumnos = ["Juan", "Pedro", "Maria", "Diana"];

const [juan, pedro, maria, diana] = alumnos;

// ----------------------------------------------------------
// console.table(alumnos);
// console.error("Esto es un error")
// console.info("Esto es un mensaje informativo")
// console.warn("Esto es una advertencia")
// const fechaRegistro = new Date();
// ----------------------------------------------------------
const alumno = {
    nombre:"Juan",
    apellido: "Perez",
    edad: 30,
    casado: false,
}

const {nombre , apellido, edad , casado} = alumno;
// ----------------------------------------------------------
if (edad > 10){
    console.log("Es mayor a 10")
}else{
    console.log("Es menor a 10")
}

switch (nombre) {
    case "Juan":
        console.log("Hola Juan");
        break;
    case "Pedro":
        console.log("Hola Pedro");
        break;
    default:
        console.log("Hola desconocido");
        break;
}
// ----------------------------------------------------------
// Ciclos

for (let i = 0; i < alumnos.length; i++){
    console.log(alumnos[i])
}
// ----------------------------------------------------------
let j = 0;
while(j < alumnos.length){
    console.log(alumnos[j])
    j++;
}
// ----------------------------------------------------------
for (const ii in alumnos){
    console.log(alumnos[ii]);
}
// ----------------------------------------------------------
console.log("For each");
alumnos.forEach((alumno)=>{console.log(alumno)})
// ----------------------------------------------------------
console.log("For of");
for (const alumno of alumnos) {
    console.log(alumno);
}
// ----------------------------------------------------------
console.log("For in con objeto");
for (const key in alumno) {
    console.log(alumno[key]);   
}
// ----------------------------------------------------------
// console.log(alumno.edad);
// console.log(alumno["edad"]);
// [nombre, edad] = alumno
// ----------------------------------------------------------
// Funciones
function saludar(){
    console.log("Hola mundo");  
}

const sumar = (num, num2) =>{

    const resultado = num + num2;
    console.log("El resultado de la suma es " + resultado);
    return resultado;

}
//llamado de funciones
// saludar();
// sumar(5, 10);
// console.log(sumar(100, 200))