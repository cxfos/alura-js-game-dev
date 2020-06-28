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

function playing() {
    cenario.showScene();
    cenario.moveSceneXToLeft(getLvlSpeed(baseSpeed));

    luna.show();
    luna.animate();
    luna.gravityPull();

    if (showEnemy) {
        const enemy = enemies[currentEnemyIndex];
        enemy.show();
        enemy.animate();
        enemy.moveXToLeft(getLvlSpeed(baseSpeed));

        if (luna.isColliding(enemy.getAnimationProps())) {
            if (isDebbuging) {
                console.warn(`Collided to ${enemy.getName()}`);
            }
            currentScene = 'gameOver';
        }
        if (enemy.isOutLeft()) {
            showEnemy = false;
            msCurrentEmeny = milisecondsCount;
            currentEnemyIndex = Math.floor(random(0, enemies.length));
        }
    } else {
        showEnemy = ((milisecondsCount - msCurrentEmeny) > msBetweenEnemies);
    }

    incrementCounters();
}

function gameOver() {
    cenario.showScene();
    luna.show();
    enemies[currentEnemyIndex].show();
    image(imgGameOver, xCenter - (imgGameOver.width / 2), yCenter - (imgGameOver.height / 2));
}
