
function loadPlayerCharacter() {
    spriteLuna = getSprite(imgLuna, 4, 4)
    luna = getAnimation(spriteLuna, 110, 135, 25, height - 190, 'Luna');
}

function mousePressed() {
    userStartAudio();
}

function keyPressed(keybordEvent) {
    const { code } = keybordEvent
    switch (currentScene) {
        case 'home':
        case 'playing': {
            switch (code) {
                case 'Space':
                case 'ArrowUp':
                case 'KeyW':
                    luna.jump(30, somPulo);
                    break;
                default: break;
            }
        }
            break;
        case 'gameOver': break;
        default: break;
    }
}