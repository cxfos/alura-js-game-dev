function getCenario(imagem) {
    let x1 = 0;
    let x2 = width;

    function showScene() {
        image(imagem, x1, 0, width, height);
        image(imagem, x2, 0, width, height);
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(pointsCount, width - 30, 50);
    }

    function moveSceneXToLeft(speed) {
        x1 = (x1 < - width) ? width : (x1 - speed);
        x2 = (x2 < - width) ? width : (x2 - speed);
    }

    return {showScene, moveSceneXToLeft}
}
