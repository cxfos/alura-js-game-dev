function getSprite(imagem, xSpritesCount, ySpritesCount, total = null) {
    const hasTotal = total !== undefined && total !== null;
    const countTotal = hasTotal ? total : (xSpritesCount * ySpritesCount);
    const {width: imgWidth, height: imgHeight} = imagem;
    const widthSprite = imgWidth / xSpritesCount;
    const heightSprite = imgHeight / ySpritesCount;
    const imagens = getImagens();

    function getImagens() {
        let matriz = [];
        let xPos = 0;
        let yPos = 0;
        for (y = 0; y < ySpritesCount; y++) {
            xPos = 0;
            yPos = y === 0 ? 0 : yPos + heightSprite;
            for (x = 0; x < xSpritesCount; x++) {
                xPos = x === 0 ? 0 : xPos + widthSprite;
                if (matriz.length < (countTotal - 1)) {
                    matriz.push({startX: xPos, startY: yPos});
                }
            }
        }
        return matriz;
    }

    return {imagem, imagens, widthSprite, heightSprite}
}
