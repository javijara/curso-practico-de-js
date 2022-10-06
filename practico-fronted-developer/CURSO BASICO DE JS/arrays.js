var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];

console.log(frutas);

var masfrutas = frutas.push("Uvas");

var ultimo  = frutas.pop("Uvas");

var nuevaLongitud = frutas.unshift("Uvas");

var borrarfruta = frutas.shift("Uvas");

var posicion = frutas.indexOf("Cereza");

frutas[2];




var estudiantes = ["Maria", "sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante)
{
    console.log(´Hola, ${estudiante}´);
}

for(var i = 0; i < estudiantes.length; i++)
{
    saludarEstudiantes(estudiantes[i]);
}