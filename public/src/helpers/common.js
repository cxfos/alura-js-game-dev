
function setupGameConfiguration() {
    getAudioContext().suspend();
    frameRate(framesPerSecond);
    createCanvas(windowWidth, windowHeight);
    msPerPoint = Math.floor(1000 / pointsPerSecond);
    levelMap = [
        {
            lvl: 1,
            speed: 30,
            pointsToNext: 100,
        },
        {
            lvl: 2,
            speed: 60,
            pointsToNext: 200,
        },
        {
            lvl: 3,
            speed: 100,
            pointsToNext: 400,
        },
        {
            lvl: 4,
            speed: 200,
            pointsToNext: 800,
        },
        {
            lvl: 5,
            speed: 300,
            pointsToNext: 1600,
        },
        {
            lvl: 6,
            speed: 400,
            pointsToNext: 3200,
        },
        {
            lvl: 7,
            speed: 500,
            pointsToNext: 6400,
        },
        {
            lvl: 8,
            speed: 600,
            pointsToNext: 12800,
        },
        {
            lvl: 9,
            speed: 700,
            pointsToNext: 25600,
        },
        {
            lvl: 10,
            speed: 800,
            pointsToNext: 51200,
        },
        {
            lvl: 11,
            speed: 900,
            pointsToNext: 102400,
        },
        {
            lvl: 12,
            speed: 1000,
            pointsToNext: 99999999,
        },
    ];
    xCenter = Math.floor(width / 2);
    yCenter = Math.floor(height / 2);
}

function getPxPerFrame(pxPerSecond) {
    return Math.floor(pxPerSecond / framesPerSecond);
}

function getLvlSpeed(baseSpeed = 0) {
    const level = levelMap[currentLevel-1];
    return getPxPerFrame(Math.floor(baseSpeed + level.speed));
}

function incrementCounters() {
    const level = levelMap[currentLevel-1];
    frameCount++;
    secondsCount = Math.floor(frameCount / framesPerSecond);
    milisecondsCount = Math.floor((1000 / framesPerSecond) * frameCount);
    totalPxMoved = totalPxMoved + getLvlSpeed(0);
    pointsCount = Math.floor(milisecondsCount / msPerPoint);
    currentLevel = pointsCount > level.pointsToNext ? currentLevel+1 : currentLevel;
    if (isDebugging) {
        debuggingInfo.setCounterInfo(
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

function isEven(value){
    return (value % 2 === 0);
}
