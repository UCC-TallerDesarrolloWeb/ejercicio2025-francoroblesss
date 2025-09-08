/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(unidad, valor) {
    let metro, pie, pulgada, yarda;

    console.log(valor);
    console.log(isNaN(valor));

    if (isNaN(valor)) {
        alert("El valor ingresado no es correcto");
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";
    }

    if (unidad == "unid_metro") {
        metro = valor;
        pie = valor * 3.28084;
        pulgada = valor * 39.3701;
        yarda = valor * 1.09361;
    }else if (unidad == "unid_pie") {  
        pie = valor;
        metro = valor / 3.28084;
        pulgada = valor * 12;
        yarda = valor / 3;
    }else if (unidad == "unid_pulgada") {
        pulgada = valor;
        metro = valor / 39.3701;
        pie = valor / 12;
        yarda = valor / 36;
    }else if (unidad == "unid_yarda") {
        yarda = valor;
        metro = valor / 1.09361;
        pie = valor * 3;
        pulgada = valor * 36;
    }

    document.getElementById("metro").value = metro;
    document.getElementById("pie").value = pie;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value = yarda;
}