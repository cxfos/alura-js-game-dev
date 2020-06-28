function setup() {
    setupGameConfiguration();
    cenario = getCenario(imgCenario);

    loadPlayerCharacter();
    loadEnemies();
    // somJogo.loop();
}

function draw() {
    switch (currentScene) {
        case 'playing' :
            playing();
            break;
        case 'gameOver':
            gameOver();
            break;
        default:
            noLoop();
            break;
    }
}