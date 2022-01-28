$(function() {
    $("#btn-copiar").click(function() {
        var url = $("#copy").val();
        var $temp = $("#copy");
        $temp.val(url).select();
        document.execCommand("copy");
        $temp.remove();
    });

})

$("#submitCampo").click(function() {
    if ($("#campo").val()) {
        encriptarMensaje()
    } else if ($("#campo").val() === "") {
        alert("Campo vacio")
    }

})

$("#desencriptar").click(function() {
    desencriptarMensaje()
})

function encriptarMensaje() {

    if ($("#campo").val().length) {
        encriptar()
    } else {
        alert("campo vacio")
    }

    function encriptar() {
        let mensaje = $("#campo").val().toLowerCase()
        console.log(mensaje)
        let encriptado = ''
        let letras = []
        for (let letra of mensaje) {

            if (letra === 'e') {
                letra = 'enter'
                letras.push(letra)
                encriptado += letra
            } else if (letra === 'i') {
                letra = 'imes'
                letras.push(letra)
                encriptado += letra

            } else if (letra === 'a') {
                letra = 'ai'
                letras.push(letra)
                encriptado += letra
            } else if (letra === 'o') {
                letra = 'ober'
                letras.push(letra)
                encriptado += letra
            } else if (letra === 'u') {
                letra = 'ufat'
                letras.push(letra)
                encriptado += letra
            } else {
                letras.push(letra)
                encriptado += letra
            }



        }
        console.log(letras)
        console.log(encriptado)
        $("#textEncripted").append(`<textarea id='copy'>${encriptado}</textarea>`)
        sessionStorage.setItem("encriptado", JSON.stringify(letras))
    }


}


function desencriptarMensaje() {
    var validacion = true
    var texto = $("#campo").val().toLowerCase()

    if (validacion == true) {
        var desencriptar = texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        let cabezera = $("#page-header")
        cabezera[0].innerHTML = "mensaje desencriptado"
        console.log(cabezera)
        $("#textEncripted").append(`<h2>${desencriptar}</h2>`)

    }
}