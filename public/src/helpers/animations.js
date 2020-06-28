function getAnimation(
    sprite,
    widthAnimation,
    heightAnimation,
    xPosition,
    yPosition,
    name
) {
    const {imagem, imagens, widthSprite, heightSprite} = sprite;
    let imagemAtual = 0;
    let xPos = xPosition;
    let yPos = yPosition;
    let heightVariation = 0;
    let jumpCount = 0;

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

    }

    function getName() {
        return name;
    }

    function getAnimationProps() {
        return {xPos, yPos, widthAnimation, heightAnimation};
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

    function isOutLeft() {
        return (xPos < -widthAnimation);
    }

    function isOutRight() {
        return (xPos > width + widthAnimation);
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

    function isColliding(opposition) {
        const hAnimation = heightAnimation * collisionPrecision;
        const xAnimation = xPos + Math.floor((heightAnimation - hAnimation) / 2);

        const wAnimation = widthAnimation * collisionPrecision;
        const yAnimation = yPos + Math.floor((widthAnimation - wAnimation) / 2);

        const hOpposition = opposition.heightAnimation * collisionPrecision;
        const xOpposition = opposition.xPos + Math.floor((opposition.heightAnimation - hOpposition) / 2);

        const wOpposition = opposition.widthAnimation * collisionPrecision;
        const yOpposition = opposition.yPos + Math.floor((opposition.widthAnimation - wOpposition) / 2);

        if (isDebbuging){
            noFill();
            rect(xAnimation, yAnimation, wAnimation, hAnimation);
            rect(xOpposition, yOpposition, wOpposition, hOpposition);
        }
        return collideRectRect(
            xAnimation,
            yAnimation,
            wAnimation,
            hAnimation,
            xOpposition,
            yOpposition,
            wOpposition,
            hOpposition,
        );
    }

    return {
        show,
        animate,
        moveXToLeft,
        moveXToRight,
        jump,
        gravityPull,
        getAnimationProps,
        isColliding,
        getName,
        isOutLeft,
        isOutRight};
}
