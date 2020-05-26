

var dni_1;
var dni_2;
var dni_3;
var dni_4;
var dni_5;
var dni_6,

// solicitud números DNI

dni_1 = Number(prompt("Introduce el primer número DNI"));
dni_2 = Number(prompt("Introduce el segundo número DNI"));
dni_3 = Number(prompt("Introduce el tercer número DNI"));
dni_4 = Number(prompt("Introduce el cuarto número DNI"));
dni_5 = Number(prompt("Introduce el quinto número DNI"));
dni_6 = Number(prompt("Introduce el sexto número DNI"));


 
const modulo_DNI_espanyol = 23;

var correlacion_letra = ["T", "R", "W", "A","G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


// determinación letra de los números DNI introducidos previamente

var letra_dni_1 = correlacion_letra [dni_1%modulo_DNI_espanyol];
var letra_dni_2 = correlacion_letra [dni_2%modulo_DNI_espanyol];
var letra_dni_3 = correlacion_letra [dni_3%modulo_DNI_espanyol];
var letra_dni_4 = correlacion_letra [dni_4%modulo_DNI_espanyol];
var letra_dni_5 = correlacion_letra [dni_5%modulo_DNI_espanyol];
var letra_dni_6 = correlacion_letra [dni_6%modulo_DNI_espanyol];


// impresión en pantalla de los DNI's completos

document.write("1er DNI con letra: " + dni_1 + "-" + letra_dni_1); 
document.write("2o DNI con letra: " + dni_2 + "-" + letra_dni_2);
document.write("3er DNI con letra: " + dni_3 + "-" + letra_dni_3);
document.write("4o DNI con letra: " + dni_4 + "-" + letra_dni_4);
document.write("5o DNI con letra: " + dni_5 + "-" + letra_dni_5);
document.write("6o DNI con letra: " + dni_6 + "-" + letra_dni_6);