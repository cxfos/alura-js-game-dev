function getAnimacao(
    sprite,
    widthAnimation,
    heightAnimation,
    xPosition,
    yPosition
) {
    const isDebbuging = false;
    const {imagem, imagens, widthSprite, heightSprite} = sprite;
    const gravity = 3;
    let imagemAtual = 0;
    let xPos = xPosition;
    let yPos = yPosition;
    let heightVariation = 0;
    let jumpCount = 0;
    let actions = {show, moveXToLeft, moveXToRight, jump, gravityPull, getAnimationProps, isColliding};

    function show() {
        image(imagem,
            xPos,
            yPos,
            widthAnimation,
            heightAnimation,
            imagens[imagemAtual].startX,
            imagens[imagemAtual].startY,
            widthSprite,
            heightSprite);
        animate();

    }

    function animate() {
        imagemAtual = (++imagemAtual === imagens.length) ? 0 : imagemAtual;
    }

    function gravityPull() {
        yPos = yPos + heightVariation;
        if (yPos > yPosition) {
            yPos = yPosition;
            jumpCount = 0;
        }
        heightVariation = heightVariation + gravity;
    }

    function moveXToLeft(speed) {
        xPos = (xPos < -widthAnimation) ? width : xPos - speed
    }

    function moveXToRight(speed) {
        xPos = (xPos > width + widthAnimation) ? -widthAnimation : xPos + speed
    }

    function jump(jumpHeight, som) {
        if (jumpCount < 2) {
            heightVariation = -jumpHeight;
            jumpCount++;
            som.play();
        }
    }

    function getAnimationProps() {
        return {xPos, yPos, widthAnimation, heightAnimation};
    }

    function isColliding(enemy) {
        if (isDebbuging){
            noFill();
            rect(xPos, yPos, widthAnimation, heightAnimation);
            rect(enemy.xPos, enemy.yPos, enemy.widthAnimation, enemy.heightAnimation);
        }
        const precision = 0.7;
        return collideRectRect(
            xPos,
            yPos,
            widthAnimation * precision,
            heightAnimation * precision,
            enemy.xPos,
            enemy.yPos,
            enemy.widthAnimation * precision,
            enemy.heightAnimation * precision,
        );
    }

    return {...actions};
}
