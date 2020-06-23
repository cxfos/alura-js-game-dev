function getCenario(imagem, velocidade) {
    let x1 = 0;
    let x2 = width;

    function exibe() {
        image(imagem, x1, 0, width, height);
        image(imagem, x2, 0, width, height);
    }

    function move() {
        x1 = (x1 < - width) ? width : (x1 - velocidade);
        x2 = (x2 < - width) ? width : (x2 - velocidade);
    }

    return {exibe, move}
}
