
function setupGameConfiguration() {
    getAudioContext().suspend();
    frameRate(framesPerSecond);
    createCanvas(windowWidth, windowHeight);
    pxPerPoint = Math.floor(width / pointsPerWidth);
    xCenter = Math.floor(width / 2);
    yCenter = Math.floor(height / 2);
}

function getPxPerFrame(pxPerSecond) {
    return Math.floor(pxPerSecond / framesPerSecond);
}

function getLvlSpeed(baseSpeed) {
    return getPxPerFrame(Math.floor(baseSpeed * (currentLevel / levelFactor)))
}

function incrementCounters() {
    frameCount++;
    secondsCount = Math.floor(frameCount / framesPerSecond);
    milisecondsCount = Math.floor((1000 / framesPerSecond) * frameCount);
    totalPxMoved = totalPxMoved + getLvlSpeed(baseSpeed);
    pointsCount = Math.floor(totalPxMoved / pxPerPoint);
    currentLevel = Math.floor(pointsCount / pointsPerLevel) + 1;
    if (isDebbuging) {
        console.info('counters',
            {
                lvl: currentLevel,
                pts: pointsCount,
                s: secondsCount,
                ms: milisecondsCount,
                fps: framesPerSecond,
            });
    }
}

function resetCounters() {
    frameCount = 0;
    secondsCount = 0;
    milisecondsCount = 0;
    totalPxMoved = 0;
    pointsCount = 0;
}
