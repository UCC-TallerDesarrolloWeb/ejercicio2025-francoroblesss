/**
 * Descripción
 * @method convertirUnidades
 * @param {string} unidad - Unidad ingresada: metro, pie, pulgada, yarda
 * @param {string} valor - Valor numérico ingresado por el usuario (puede ser con coma)
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
    document.getElementById("yarda").value = yarda;
}

/**
 * Descripción
 * @method convertirGR
 * @param {string} id - Grados o Radianes
 * @param {string} valor - Valor numérico ingresado por el usuario (puede ser con coma)
 */

let convertirGR = (id, valor) => {
    let cantGrados, cantRadianes;
    if(id=="grados"){
        cantGrados = valor;
        cantRadianes = cantGrados*Math.PI/180;
        document.getElementById("radianes").value = cantRadianes;

    } else {
        cantRadianes = valor;
        cantGrados = cantRadianes*180/Math.PI;
        document.getElementById("grados").value = cantGrados;
    }
}

let mostrarOcultar = (id) => {
    if(id == "mostrarDiv") {
        document.getElementsByName("unDiv")[0].style.display = "block";
    } else{ 
        document.getElementsByName("unDiv")[0].style.display = "none";
    }
}

let sumar = () => {
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;

    if (isNaN(sum1) || isNaN(sum2)) {
        alert("Una de las variables ingresadas no es numérica");
    } else {
        document.getElementById("totalS").value = Number(sum1) + Number(sum2);
    }
}

let restar = () => {
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;

    if (isNaN(res1) || isNaN(res2)) {
        alert("Una de las variables ingresadas no es numérica");
    } else {
        document.getElementById("totalR").value = Number(res1) - Number(res2);
    }
}

let multiplicar = () => {
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;

    if (isNaN(mul1) || isNaN(mul2)) {
        alert("Una de las variables ingresadas no es numérica");
    } else {
        document.getElementById("totalM").value = Number(mul1) * Number(mul2);
    }
}

let dividir = () => {
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;

    if (isNaN(div1) || isNaN(div2)) {
        alert("Una de las variables ingresadas no es numérica");
    } else {
        document.getElementById("totalD").value = Number(div1) / Number(div2);
    }
}