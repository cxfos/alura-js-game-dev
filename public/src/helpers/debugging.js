function getDebugging() {
    let rects = [];
    let infos = {};
    function draw() {
        let ownProps = Object.keys(infos),
            ownValues = Object.values(infos),
            i = ownProps.length;
        while (i--) {
            fill('#ff0000');
            textSize(14);
            textAlign(LEFT);
            text(`${ownProps[i]}: ${ownValues[i]}`, 15, 15 + (14 * i + 1));
        }
        rects.forEach(r => {
            noFill();
            rect(r.x, r.y, r.w, r.h);
        })
        rects =[];
    }

    function setCounterInfo(info) {
        infos = {...infos, ...info};
    }

    function setCollisionInfo(enemy) {
        infos = {...infos, lastCollision: enemy.getName()};
    }

    function pushRectDraw(x, y, w, h) {
        rects.push({x, y, w, h});
    }

    return {draw, setCounterInfo, setCollisionInfo, pushRectDraw};
}