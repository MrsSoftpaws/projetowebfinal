window.onload = function () {
    confirm("Vamos Jogar?");

    document.getElementById("anocheer").focus();

    document.getElementById("anocheer").addEventListener('keypress', function (e) {

        let c = e.charCode;

        if (((c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (c == 32) || (c == 15) || (c == 8))) {
            e.preventDefault();
        }

    });
}

var resposta = function () {
    let ano = document.getElementByid("anocheer").value;
    if (ano == 1869) {
        alert("certa resposta");
    } else {
        alert("resposta errda");
    }
    return false;
}
