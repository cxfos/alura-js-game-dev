function getInimigo(sprite, inimWidth, inimHeight, xPosition, yPosition) {
    const animacao = getAnimacao(
        sprite,
        inimWidth,
        inimHeight,
        xPosition,
        yPosition
    );

    return {...animacao}
}
