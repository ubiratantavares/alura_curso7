function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value); 

    let sorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let sorteado = obterNumeroAleatorio(de, ate);
        sorteados.push(sorteado);    
    }
    
    console.log(sorteados)
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {

}

