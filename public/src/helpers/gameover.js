
function gameOver() {
    cenario.showScene();
    luna.show();
    enemies[currentEnemyIndex].show();
    image(imgGameOver, xCenter - (imgGameOver.width / 2), yCenter - (imgGameOver.height / 2));
}

function onGameOverKeyPressed(keybordEvent) {
    switch (keybordEvent.code) {
        case 'Space':
        case 'ArrowUp':
        case 'KeyW':
            luna.jump(30, somPulo);
            break;
        default: break;
    }
}

function onGameOverMousePressed(mouseEvent) {
    resetCounters();
    currentScene = 'home';
}