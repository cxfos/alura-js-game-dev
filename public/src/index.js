function setup() {
    setupGameConfiguration();
    cenario = getCenario(imgCenario);
    if (isDebugging) {
        debuggingInfo = getDebugging();
    }

    loadStartComponents();
    loadPlayerCharacter();
    loadEnemies();
    loadGameOverComponents();
    // somJogo.loop();
}

function draw() {
    sceneActions[currentScene].draw();
    if (isDebugging) {
        debuggingInfo.draw();
    }
}

function mousePressed(mouseEvent) {
    userStartAudio();
    sceneActions[currentScene].mouse(mouseEvent);
}

function keyPressed(keybordEvent) {
    userStartAudio();
    sceneActions[currentScene].keyboard(keybordEvent);
}