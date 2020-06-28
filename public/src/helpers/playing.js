
function playing() {
    cenario.showScene();
    cenario.moveSceneXToLeft(getLvlSpeed(100));

    luna.show();
    luna.animate();
    luna.gravityPull();
    life.drawLife();

    if (showEnemy) {
        const currentMap = enemiesMap[currentEnemyMap];
        currentEnemyIndex = currentMap.index;
        const enemy = enemies[currentEnemyIndex];
        enemy.show();
        enemy.animate();
        enemy.moveXToLeft(getLvlSpeed(currentMap.speedMod));

        if (!wasEnemyCollided && luna.isColliding(enemy.getAnimationProps())) {
            if (isDebugging) {
                debuggingInfo.setCollisionInfo(enemy);
            }

            life.loseLife();
            wasEnemyCollided = true;

            if (life.isDead()) {
                currentScene = 'gameOver';
            } else {
                luna.startBlink();
            }
        }
        if (enemy.isOutLeft()) {
            luna.stopBlink();
            showEnemy = false;
            wasEnemyCollided = false;
            msCurrentEmeny = milisecondsCount;
            currentEnemyMap++;
            currentEnemyMap = currentEnemyMap > enemiesMap.length - 1 ? 0 : currentEnemyMap;
        }
    } else {
        showEnemy = ((milisecondsCount - msCurrentEmeny) > msBetweenEnemies);
    }

    incrementCounters();
}

function onPlayingKeyPressed(keybordEvent) {
    switch (keybordEvent.code) {
        case 'Space':
        case 'ArrowUp':
        case 'KeyW':
            luna.jump(30, somPulo);
            break;
        default: break;
    }
}

function onPlayingMousePressed(mouseEvent) {

}