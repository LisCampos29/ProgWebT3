//Calcular la serie de fibonacci mediante un número
function calcularFibonacci(){
    var numero = parseInt(document.getElementById("num").value);
    var parejaInicial = 1;
    var mesInicial = 0;
    //contador var i = 1; 
    var total;
    if (numero == 1){
        numero = 1;
        return document.getElementById("resultado").innerHTML =  
        confirm("El número de la serie de Fibonacci es: " + numero); 
    }
    else if(numero!=1){
    for (i = 1; i < numero; i++){
        total = mesInicial + parejaInicial;
        mesInicial = parejaInicial;
        parejaInicial = total;
        }
    }
    document.getElementById("resultado").innerHTML =  
        confirm("El número de la serie de Fibonacci es: " + total);   
}