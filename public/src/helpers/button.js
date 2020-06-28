function getButton(buttonText, x, y, w, h, radius, onClick) {
    const xPos = x - Math.floor(w/2);
    const yPos = y - Math.floor(h/2);
    const buttonColor = '#3e3e5f';
    const textColor = '#ffdfd9';
    const buttonColorHover = '#636fa9';

    function showButton() {
        showRect();
        showText();
    }

    function showRect() {
        if (isMouseHovering()) {
            fill(buttonColorHover);
        } else {
            fill(buttonColor);
        }
        rect(xPos, yPos, w, h, radius);
    }

    function showText() {
        textAlign(CENTER, CENTER);
        fill(textColor);
        textSize(25);
        text(buttonText, x, y);
    }

    function mouseClicked() {
        if(isMouseHovering()){
            onClick();
        }
    }

    function isMouseHovering() {
        if (isDebugging){
            debuggingInfo.pushRectDraw(xPos, yPos, w, h);
            debuggingInfo.pushRectDraw(mouseX, mouseY, 5, 5);
        }
        return collideRectRect(
            xPos, yPos, w, h,
            mouseX, mouseY, 5, 5,
        );
    }

    return {showButton, mouseClicked};
}