let cenario;
let imgCenario;
let imgGota;
let imgLuna;
let gota;
let luna;
let somJogo;
let somPulo;
let spriteGota;
let spriteLuna;

function preload() {
    imgCenario = loadImage('imagens/cenario/floresta.png');
    imgLuna = loadImage('imagens/personagem/correndo.png');
    imgGota = loadImage('imagens/inimigos/gotinha.png');
    somJogo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
    getAudioContext().suspend();
    frameRate(32);
    createCanvas(windowWidth, windowHeight);
    cenario = getCenario(imgCenario, 10);

    spriteLuna = getSprite(imgLuna, 4, 4)
    luna = getAnimacao(spriteLuna, 110, 135, 25, height - 135);

    spriteGota = getSprite(imgGota, 4, 7)
    gota = getAnimacao(spriteGota, 52, 52, width -52 , height - 52);

    somJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();

    luna.show();
    luna.gravityPull();

    gota.show();
    gota.moveXToLeft(14);

    if (luna.isColliding(gota.getAnimationProps())) {
        noLoop();
    }
}

function mousePressed() {
    userStartAudio();
}

function keyPressed(keybordEvent) {
    const { code } = keybordEvent
    switch (code) {
        case 'Space':
        case 'ArrowUp':
        case 'KeyW':
            luna.jump(30, somPulo);
        break;
        default: {}
    }
}
