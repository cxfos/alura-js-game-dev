function loadEnemies() {
    spriteGota = getSprite(imgGota, 4, 7)
    spriteGotaVoa = getSprite(imgGotaVoa, 3, 6, 16)
    spriteTroll = getSprite(imgTroll, 5, 6, 28)

    enemies.push(
        getAnimation(spriteGota, 52, 52, width , height - 104, 'Cuspe')
    );
    enemies.push(
        getAnimation(spriteGotaVoa, 100, 75, width , height - 250, 'Chuvisco')
    );
    enemies.push(
        getAnimation(spriteGotaVoa, 100, 75, width , height - 200, 'Chuvisco')
    );
    enemies.push(
        getAnimation(spriteGotaVoa, 100, 75, width , height - 170, 'Chuvisco')
    );
    enemies.push(
        getAnimation(spriteTroll, 175, 175, width , height - 200, 'Birrao')
    );
}