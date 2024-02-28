document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("calcular");
    let input = document.getElementById("peso");

    button.addEventListener("click", calcular);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            calcular();
        }
    });
});

function calcular() {
    const input = document.getElementById("peso");
    const peso = parseInt(input.value);
    const FLU = document.getElementById('flu');
    const MAN = document.getElementById('man');
    const ERROR = document.getElementById('error');

    FLU.style.display = "none";
    ERROR.style.display = "none";
    MAN.style.display = "none";

    if (peso <= 30 && peso > 0) {
        const volumendiario = HollidaySegar(peso);
        const mantenimiento = Math.round(volumendiario / 24);
        const MM2 = Math.round(mantenimiento * 1.5);
        FLU.innerHTML = mantenimiento + "cc/hr";
        MAN.innerHTML = "m+m/2:" + MM2 + "cc/hr";
        FLU.style.display = "block";
        MAN.style.display = "block";
    } else if (peso <= 0) {
        ERROR.style.display = "block";
        input.value = "";
    } else {
        const SC1500 = Math.round(superficieCorporal(peso) * 1500);
        const SC2000 = Math.round(superficieCorporal(peso) * 2000);
        FLU.innerHTML = "SC 1500:" + SC1500 + "cc";
        MAN.innerHTML = "SC 2000:" + SC2000 + "cc";
        FLU.style.display = "block";
        MAN.style.display = "block";
    }
}

function HollidaySegar(peso) {
    let volumendiario;
    if (peso <= 10) {
        volumendiario = peso * 100;
    } else if (peso > 10 && peso <= 20) {
        volumendiario = 1000 + ((peso - 10) * 50);
    } else if (peso > 20 && peso <= 30) {
        volumendiario = 1500 + ((peso - 20) * 20);
    }
    return volumendiario;
}

function superficieCorporal(peso) {
    let superficieCorporal = ((peso * 4) + 7) / 90;
    return superficieCorporal;
}












