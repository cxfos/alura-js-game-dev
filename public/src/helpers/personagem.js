function getPersonagem(imagem, xDrawings, yDrawings) {
    const xSize = imagem.width / xDrawings;
    const ySize = imagem.height / yDrawings;
    const imagens = getImagens();
    let imagemAtual = 0;

    function getImagens() {
        let matriz = [];
        let xPos = 0;
        let yPos = 0;
        for (y = 0; y < yDrawings; y++) {
            xPos = 0;
            yPos = y === 0 ? 0 : yPos + ySize;
            for (x = 0; x < xDrawings; x++) {
                xPos = x === 0 ? 0 : xPos + xSize;
                matriz.push({startX: xPos, startY: yPos});
            }
        }
        return matriz;
    }

    function exibe() {
        image(imagem,
            25,
            height - 135,
            110,
            135,
            imagens[imagemAtual].startX,
            imagens[imagemAtual].startY,
            xSize,
            ySize);
        anima();
    }

    function anima() {
        imagemAtual++;
        imagemAtual = (imagemAtual === imagens.length) ? 0 : imagemAtual;
    }
    return {exibe}
}
