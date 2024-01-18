const readline = require('readline');

// Creamos una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el promedio
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Función para obtener la entrada del usuario de forma asíncrona
function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

// Función principal
async function main() {
    // Solicitar datos al usuario
    const nombreAlumno = await questionAsync("Ingrese el nombre del alumno: ");
    const materia = await questionAsync("Ingrese el nombre de la materia: ");

    // Ingresar notas y verificar que estén en el rango válido
    let nota1 = parseFloat(await questionAsync("Ingrese la primera nota (0-10): "));
    while (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
        console.log("La nota debe estar en el rango de 0 a 10.");
        nota1 = parseFloat(await questionAsync("Ingrese la primera nota (0-10): "));
    }

    let nota2 = parseFloat(await questionAsync("Ingrese la segunda nota (0-10): "));
    while (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
        console.log("La nota debe estar en el rango de 0 a 10.");
        nota2 = parseFloat(await questionAsync("Ingrese la segunda nota (0-10): "));
    }

    let nota3 = parseFloat(await questionAsync("Ingrese la tercera nota (0-10): "));
    while (nota3 < 0 || nota3 > 10 || isNaN(nota3)) {
        console.log("La nota debe estar en el rango de 0 a 10.");
        nota3 = parseFloat(await questionAsync("Ingrese la tercera nota (0-10): "));
    }

    // Calcular el promedio
    const promedio = calcularPromedio(nota1, nota2, nota3);

    // Evaluar si el alumno aprobó o no
    if (promedio >= 7) {
        console.log(`${nombreAlumno}, ¡felicidades! Has aprobado en ${materia} con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        console.log(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ${materia} es ${promedio.toFixed(2)}.`);
    }

    // Cerrar la interfaz de lectura
    rl.close();
}

// Llamar a la función principal
main();