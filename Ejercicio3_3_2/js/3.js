function ordenamiento(){
    var ArregloNum = [];
    //El arreglo va almacenar los números que se le agreguen a los inputs
    for (var i = 1; i <= 10; i++){
        ArregloNum.push(Number(document.getElementById("n" + i).value));
    }
    // para elegir el tipo de ordenamiento de la lista despegable
        var tipoOrd = document.getElementById("tipoOrdenamiento").value;
        
        // ordena los datos de los inputs
        switch (tipoOrd) {
            case "ascendiente":
                ArregloNum.sort(function(a, b) { return a - b; });
                break;
            case "descendiente":
                ArregloNum.sort(function(a, b) { return b - a; });
                break;
        }
        document.getElementById("ordenado").style.display = 'block'; //muestra el contenido de resultado
        //muestra el resultado del ordenamiento
        document.getElementById("ordenado").innerHTML = ArregloNum.join(", ");
    }
    function Limpiar(){
        document.getElementById("ordenado").style.display = 'none';            
    }