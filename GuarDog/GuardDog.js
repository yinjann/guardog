(function() {
    'use strict';
    var Url = window.location.hostname
    var listaNegra = [];
    var UrlMin = Url.toLowerCase()
    var UrlClear = UrlMin.replace(/[0-9]+/g, '');


    if(listaNegra.includes(UrlClear)) {
        alert("Este URL esta en la lista negra")
        alert(listaNegra);
    } else {
        if (UrlClear.includes("banorte")) {
            if (UrlClear == "www.banorte.com") {

                alert("Este sitio está verificado por GuarDog. Es seguro navegar aqui.")
            } else {
                alert("Este sitio no ha sido verificado por el protocolo. Puede ser Phishing.")
                listaNegra.push(UrlClear);
            }
        }
    }

})();