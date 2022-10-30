(function () {
    var contador = 0;

    var sumar = function () {
        contador++;

        if (contador < 10 && contador > 0) {
            cuenta.innerHTML = "0" + contador;

        } else {
            cuenta.innerHTML = contador;

        }

    }


    var restar = function () {
        contador--;

        if (contador < 10 && contador > 0) {
            cuenta.innerHTML = "0" + contador;

        }
        if (contador>=10){
            cuenta.innerHTML=contador;
        }

        if (contador==0){
            cuenta.innerHTML='0'+contador;
        }

        if(contador<0){
            cuenta.innerHTML=contador;
        }

    }


    var reset = function () {
        contador = 0;
        cuenta.innerHTML = '0'+contador;
    }

    var suma = document.getElementById('sumar');
    suma.addEventListener("click", sumar);
    var cuenta = document.getElementById("cuenta");

    var resta = document.getElementById("resta");
    resta.addEventListener("click", restar);

    var restard = document.getElementById("reset");
    restard.addEventListener("click", reset);

}())






