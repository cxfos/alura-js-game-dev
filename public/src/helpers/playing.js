
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
            if (isDebugging) {
                debuggingInfo.setCollisionInfo(enemy);
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