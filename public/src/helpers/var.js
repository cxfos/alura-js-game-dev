/** Imagens ambiente **/
    // Src
const srcCenario   = 'imagens/cenario/floresta.png';
const srcGameOver  = 'imagens/assets/game-over.png';
const srcCoracao   = 'imagens/assets/coracao.png';
const srcIncio     = 'imagens/assets/telaInicial.png';
// Imagens
let imgCenario;
let imgGameOver;
let imgCoracao;
let imgIncio;

/** Imagens animacoes **/
    // Src
const srcLuna      = 'imagens/personagem/correndo.png';
const srcGota      = 'imagens/inimigos/gotinha.png';
const srcGotaVoa   = 'imagens/inimigos/gotinha-voadora.png';
const srcTroll     = 'imagens/inimigos/troll.png';
// Imagens
let imgLuna;
let imgGota;
let imgGotaVoa;
let imgTroll;
// Sprites Map
let spriteLuna;
let spriteGota;
let spriteGotaVoa;
let spriteTroll;
// Animacoes
let cenario;
let luna;

/** Sons **/
    // Src
const srcSomJogo   = 'sons/trilha_jogo.mp3';
const srcSomPulo   = 'sons/somPulo.mp3';
// Som
let somJogo;
let somPulo;

/** Game logic **/
const enemies = [];
const collisionPrecision = 0.55;
const gravity = 2.6;
let isDebbuging = true;
let xCenter = 0;
let yCenter = 0;
let framesPerSecond = 32;
let frameCount = 0;
let secondsCount = 0;
let milisecondsCount = 0;
let pointsCount = 0;
let pointsPerLevel = 500;
let pointsPerWidth = 100;
let pxPerPoint = 0;
let totalPxMoved = 0;
let baseSpeed = 1500;
let currentScene = 'playing'; // @todo - Implement the Home Scene Scene
let currentLevel = 1;
let levelFactor = 10;
let showEnemy = true;
let currentEnemyIndex = 0;
let msCurrentEmeny = 0
let msBetweenEnemies = 2000;

function preload() {
    imgCenario = loadImage(srcCenario);
    imgGameOver = loadImage(srcGameOver);
    imgCoracao = loadImage(srcCoracao);
    imgIncio = loadImage(srcIncio);

    imgLuna = loadImage(srcLuna);
    imgGota = loadImage(srcGota);
    imgGotaVoa = loadImage(srcGotaVoa);
    imgTroll = loadImage(srcTroll);

    somJogo = loadSound(srcSomJogo);
    somPulo = loadSound(srcSomPulo);
}