//Algoritmo
let nombre = "";
let contar = 0;

alert('Introduzca un listado de nombres uno por vez. Cuando desee salir del programa escriba "ESC" en la caja de texto.\n\n La palabra para salir del programa puede ser escrita tanto en minúscula como en mayúscula.');
nombre = prompt("Introduzca un nombre");

while (nombre == null || nombre == "") {
     nombre = prompt("Introduzca un nombre");
 }
 nombre = nombre.toUpperCase();

 while (nombre != "ESC") {
     contar++;
     console.log(contar + '- ' + nombre);
    nombre = prompt("Introduzca un nombre");
    while (nombre == null || nombre == "") {
        nombre = prompt("Introduzca un nombre");
        }
     nombre = nombre.toUpperCase();
 }