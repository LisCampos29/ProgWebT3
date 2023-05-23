function Limpiar(){
    document.getElementById("resultado").style.display = 'none';            
}
function calcularFecha(){    
    var fec1 = new Date(document.getElementById("Fecha1").value);
    var fec2 = new Date(document.getElementById("Fecha2").value);
    var fec3 = new Date(document.getElementById("Fecha3").value);
    var fec4 = new Date(document.getElementById("Fecha4").value);
    var resultado;
//Para verificar como funciona en la consola las variables
    console.log(fec1, fec2, fec3, fec4);
    document.getElementById("resultado").style.display = 'block'; //muestra el contenido de resultado
    //Comparar fechas con if-else
    if(fec1 > fec2 && fec1 > fec3 && fec1 > fec4){
        resultado = "La fecha 1";
        document.getElementById("resultado").style.color='green';
    }
    else if(fec2 > fec1 && fec1 > fec3 && fec1 > fec4){
        resultado = "La fecha 2";
        document.getElementById("resultado").style.color='green';
    }
    else if(fec3 > fec1 && fec3 > fec2 && fec3 > fec4){
        resultado = "La fecha 3 es la mayor";
        document.getElementById("resultado").style.color='green';
    }
    else if(fec4 > fec1 && fec4 > fec2 && fec4 > fec3){
        resultado = "La fecha 4";
        document.getElementById("resultado").style.color='green';
    }
    else if(fec4 == fec1 && fec4 == fec2 && fec4 == fec3){
        resultado = "Las fechas son iguales";
        document.getElementById("resultado").style.color='green';                
    }    
    else{
        resultado = "Por favor selecciona las fechas";
        document.getElementById("resultado").style.color='red';
    }
    document.getElementById("resultado").innerHTML = resultado;
}