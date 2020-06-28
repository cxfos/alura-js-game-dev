
function loadStartComponents() {
    buttonStart = getButton('Start', xCenter, yCenter + (yCenter / 2), 100, 50, 15, () => currentScene = 'playing');
}

function home() {
    image(imgIncio,  xCenter - (imgIncio.width / 2), yCenter - (imgIncio.height / 2));
    drawTitle();
    buttonStart.showButton();
    luna.resetAnimation();
    life.resetLife();
    enemies.forEach(enemy => enemy.resetAnimation());
}

function drawTitle() {
    textFont(fontInicio);
    textAlign(CENTER, CENTER);
    fill('#000');
    textSize(60);
    text('The adventures of\nLuna', xCenter, yCenter - (yCenter / 4));
}

function onHomeKeyPressed(keybordEvent) {
    switch (keybordEvent.code) {
        case 'Space':
        case 'ArrowUp':
        case 'KeyW':
            luna.jump(30, somPulo);
            break;
        default: break;
    }
}

function onHomeMousePressed() {
    buttonStart.mouseClicked();
}