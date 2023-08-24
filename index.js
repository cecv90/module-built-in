//Pasar argumentos a process y acceder a su índice.
console.log(process.argv[2]);
console.log(process.argv[3]);
// [node, app.js, 2, 3]
//  0      1      2  3.agregar el valor en la terminal por ejemplo node app.js 2 3 

//Si queremos tomar un número indefinidos de argumentos, se puede procesar con un ciclo for.
for (let i= 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
    //agregar el valor en el terminal. ejmplo node app.js 1 2 3 4 5 6.
} 
