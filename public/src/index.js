let cenario;
let imagemCenario;
let imagemPersonagem;
let personagem;
let somDoJogo;

function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    getAudioContext().suspend();
    frameRate(30);
    createCanvas(windowWidth, windowHeight);
    cenario = getCenario(imagemCenario, 5);
    personagem = getPersonagem(imagemPersonagem, 4, 4);
    somDoJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();
}

function mousePressed() {
    userStartAudio();
}
