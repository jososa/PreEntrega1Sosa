calcularPrestamo();

function calcularPrestamo(){

    //Solicito importe, tasa, cantidad de cuotas
    let importe = validarDatos(parseInt(prompt("Ingrese capital solicitado: ")));

    let tasa = validarDatos(parseInt(prompt("Ingrese tasa de interes: ")));
        
    let cuotas = validarDatos(parseInt(prompt("Ingrese cantidad de cuotas: "))); 
    
    //calculo interes para obtener cuota mensual y total a pagar
    if(importe>0 && tasa>0 && cuotas>0){

        let interes = tasa/1200;
        let tasaInteres = calcularPotencia(interes + 1, cuotas);
        let montoCuota = importe * interes * tasaInteres / (tasaInteres - 1);
        let montoTotal = montoCuota * cuotas;

        //muestro el resultado
        alert ("La cuota mensual es de $" + montoCuota.toFixed(2) + " y el monto total a pagar es $" + montoTotal.toFixed(2));
    }
    else{
        alert("Por favor verifique los datos ingresados sean correctos");
    }
}

//Valido ingreso de datos
function validarDatos(dato){
    let resultado;
    if(Number.isNaN(dato)){
        alert("El dato ingresado debe ser un numero");
    }
    else{
        resultado=dato;
    }
    return resultado;
}

//Calculo la potencia
function calcularPotencia(base, exponente){
    let resultado=1;
    for(let i=0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}