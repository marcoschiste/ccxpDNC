const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')

const aniversario = "25 dec 2023"

function countDown() {
    const dataAniver = new Date(aniversario)
    const hoje = new Date()

    const segTotal = (dataAniver - hoje) / 1000

    const finalDias = Math.floor (segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor (segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor (segTotal / 60) % 60;
    const finalSegundos = Math.floor (segTotal) % 60;

    dia.innerHTML = finalDias + `D`
    hora.innerHTML = finalHoras + `H`
    min.innerHTML = finalMinutos + `M`
    seg.innerHTML = finalSegundos + `S`
}

countDown();
    setInterval(countDown, 1000)