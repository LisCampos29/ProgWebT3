function numMayor(){
    var priNum = parseFloat(document.getElementById("num1").value);
    var segNum = parseFloat(document.getElementById("num2").value);
    var terNum = parseFloat(document.getElementById("num3").value);
    var cuarNum = parseFloat(document.getElementById("num4").value);

    if(priNum > segNum && priNum > terNum && priNum > cuarNum){
        document.getElementById("num1").style.backgroundColor="green";
        document.getElementById("num2").style.backgroundColor="red";
        document.getElementById("num3").style.backgroundColor="red";
        document.getElementById("num4").style.backgroundColor="red";
    }
    else if(segNum > priNum && segNum > terNum && segNum > cuarNum){
        document.getElementById("num2").style.backgroundColor="green";
        document.getElementById("num1").style.backgroundColor="red";
        document.getElementById("num3").style.backgroundColor="red";
        document.getElementById("num4").style.backgroundColor="red";
    }
    else if(terNum > priNum && terNum > segNum && terNum > cuarNum){
        document.getElementById("num3").style.backgroundColor="green";
        document.getElementById("num1").style.backgroundColor="red";
        document.getElementById("num2").style.backgroundColor="red";
        document.getElementById("num4").style.backgroundColor="red";
    }
    else if(cuarNum > priNum && cuarNum > segNum && cuarNum > terNum){
        document.getElementById("num4").style.backgroundColor="green";
        document.getElementById("num3").style.backgroundColor="red";
        document.getElementById("num2").style.backgroundColor="red";
        document.getElementById("num1").style.backgroundColor="red";
    }
    else{
       alert("Faltan datos");   
    }
}
function limpiarColor(){
    document.getElementById("num1").style.backgroundColor="transparent";
    document.getElementById("num2").style.backgroundColor="transparent";
    document.getElementById("num3").style.backgroundColor="transparent";
    document.getElementById("num4").style.backgroundColor="transparent";
}