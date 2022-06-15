

function calcular() {

    let carro = document.getElementById('velo')
    let res = document.getElementById('res')
    let velo = Number(carro.value)

    res.innerHTML = `<p> A sua velocidade foi de: <strong> ${velo}km/h </strong></p>`
    res.innerHTML += `<p> E lembre-se !!! Dirija sempre com atenção e utilizando o cinto de segurança</p>`
    if (velo > 60) {
        res.innerHTML += `<p style="color:red;"> Você será <strong> MULTADO </strong> por excesso de velocidade! :( </p>`
    } else {
        res.innerHTML += `<p style="color:limegreen;"> Está tudo ok, você não foi multado :) </p>`
    }
};



document.getElementById("velo")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("botao").click();
        }
    });