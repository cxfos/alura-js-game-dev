
function getLife(total, x, y, w, h) {
    const margin = 10;
    let currentLife = total;
    let i;

    function drawLife() {
        if (isDebugging) {
            debuggingInfo.setCounterInfo({currentLife});
        }
        for (i = 0; i < currentLife; i++) {
            const xPos = x + ((w + margin) * (i + 1));
            image(imgCoracao, xPos, y, w, h);
        }
    }

    function loseLife() {
        currentLife--;
    }

    function addLife() {
        currentLife = currentLife > total ? total : currentLife + 1;
    }

    function isDead() {
        return currentLife < 1;
    }

    function resetLife() {
        currentLife = total;
    }

    return {drawLife, loseLife, addLife, isDead, resetLife};
}


