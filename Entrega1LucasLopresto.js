

let selector = prompt("¿Que operación quiere hacer? Ingrese: 1 - Contador | 2 - Calculadora simple "); // Definición de variable 


if ( selector=='1'|| selector=='2') {   // Definición de condicional if
    alert("elección existosa");
} 
else {
    alert("Error de elección");
}

if (selector =='1') { let cotador = prompt("Bienvenido al contador - ingrese hasta cuanto contar")
    let cuenta = 0;
    for (let i = 0; i < cotador; i++) {  // Utilizo un bucles for
        cuenta = i+1;
        console.log(cuenta); //muestro en consola para probar 
        alert (cuenta)
    }
}

if (selector =='2') { let primerValor = parseInt(prompt("Bienvenido a la calculadora simple - ingrese el primer valor"));
    let segundoValor = parseInt(prompt("Ingrese el segundo valor"));
    let selectorcalculador = prompt("Ingrese en numero de la operacion correspondeinte 1 - Sumar | 2 - Restar | 3 - Multiplicar | 4 - Dividr ");
    if (selectorcalculador == '1'){
        let resultadoSuma = 0
        function sumar(numero1,nuemero2){ 
            resultadoSuma= numero1+nuemero2;
            console.log(resultadoSuma);
            alert (resultadoSuma);
        }
        sumar(primerValor,segundoValor)
    }
    else if (selectorcalculador == '2'){
        let resultadoResta = 0;
        function resta(numero1,nuemero2){ 
            resultadoResta= numero1-nuemero2;
            console.log(resultadoResta);
            alert (resultadoResta);
        }        
        resta(primerValor,segundoValor)
    }
    else if (selectorcalculador == '3'){
        let resultadoMulti = 0;
        function multi(numero1,nuemero2){ 
            resultadoMulti= numero1*nuemero2;
            console.log(resultadoMulti);
            alert (resultadoMulti);
        }     
        multi(primerValor,segundoValor)
    }
    else if (selectorcalculador == '4'){
        let resultadoDiv = 0;
        function division(numero1,nuemero2){ 
            resultadoDiv= numero1 / nuemero2;
            console.log(resultadoDiv);
            alert (resultadoDiv);
        }          
        division(primerValor,segundoValor)
    }
    else {
        alert("Error de elección");
    }
}

