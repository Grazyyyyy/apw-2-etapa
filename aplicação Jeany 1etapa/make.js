result.style.visibility = 'hidden'

function comprar() {
    
    let b = Number(basica.value)
    let valor1 = 150
    let tot1 = b * valor1

    let r = Number(rebocao.value)
    let valor2 = 200
    let tot2 = r * valor2

    let a = Number(artistica.value)
    let valor3 = 300
    let tot3 = a * valor3
    
    let tudo = tot1 + tot2 + tot3

    if(b > 0) {
        lista.innerHTML += `<li>${b} x Maquiagem Básica = R$ ${tot1.toFixed(2)}</li>`
    }

    if(r > 0) {
        lista.innerHTML += `<li>${r} x Maquiagem Rebocão = R$ ${tot2.toFixed(2)}</li>`
    }

    if(a > 0) {
        lista.innerHTML += `<li>${a} x Maquiagem Artística = R$ ${tot3.toFixed(2)}</li>`
    }

    
    resp.innerHTML = `O que você irá pagar: <strong> R$${tudo.toFixed(2)}</strong>`

    result.style.visibility = 'visible'
}