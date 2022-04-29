function sum(n1, n2){
    return n1 + n2;
}

function calc(n1, n2, callback1){
    return callback1(n1, n2);
}

console.log(calc(1,2,sum));

//Llamado de función con setTimeout
function date(callback){
    //Llama por pimera vez a la función para generar el primer new Date
    console.log(new Date + "Yo primero");
    //Al pasar los 3 seg se llama la función para generar un segundo new Date
    setTimeout( function () {
        let date = new Date;
        callback (date);
    }, 3000)
}

//Se define la función que tendra a date como callback
function printDate (dateNow){
    console.log(dateNow + "Yo segundo")
}

//Se llama a la función Date con los parámetros de printDate
date(printDate);