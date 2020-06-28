
function loadGameOverComponents() {
    const onClick = () => {
        resetCounters();
        currentScene = 'home';
    };
    buttonRestart = getButton('Retry', xCenter, yCenter + (yCenter / 2), 100, 50, 15, onClick);
}

function gameOver() {
    cenario.showScene();
    luna.show();
    enemies[currentEnemyIndex].show();
    image(imgGameOver, xCenter - (imgGameOver.width / 2), yCenter - (imgGameOver.height / 2));
    buttonRestart.showButton();
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

function onGameOverMousePressed() {
    buttonRestart.mouseClicked();
}