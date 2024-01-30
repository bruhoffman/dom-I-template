const paragrafoId = document.getElementById("paragrafo").innerHTML;
console.log(paragrafoId);

var texto = "";

const textoId = () => {
    texto = document.getElementById("texto").value;
    console.log(texto);
}

const substituirTexto = () => {
    document.getElementById("paragrafo").innerHTML = texto;
}
