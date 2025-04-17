let lives = 3;
let score = 0;
let correctColor = null;

const livesText = document.getElementById('lives');
const scoreText = document.getElementById('score');
const rgbText = document.getElementById('rgb-value');
const colorsDiv = document.getElementById('colors');
const messageText = document.getElementById('message');
const gameOverDiv = document.getElementById('game-over');
const finalScoreText = document.getElementById('final-score');
const replayButton = document.getElementById('replay');

function makeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

function newRound() {
    colorsDiv.innerHTML = '';
    messageText.textContent = '';
    correctColor = makeColor();
    rgbText.textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`;
    const colors = [correctColor, makeColor(), makeColor()];
    colors.sort(() => Math.random() - 0.5);
    colors.forEach(color => {
        const box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        box.style.border = '3px solid transparent';
        box.style.transition = 'all 0.3s ease';
        box.addEventListener('click', () => checkColor(box, color));
        colorsDiv.appendChild(box);
    });
}

function checkColor(box, color) {
    if (color.r === correctColor.r && color.g === correctColor.g && color.b === correctColor.b) {
        messageText.textContent = '🎉 Correct!';
        messageText.style.color = '#4CAF50';
        score += 10;
        scoreText.textContent = score;
        box.style.border = '3px solid #4CAF50';
        setTimeout(newRound, 1000);
    } else {
        messageText.textContent = '❌ Wrong!';
        messageText.style.color = '#E94F37';
        lives -= 1;
        livesText.textContent = lives;
        box.style.opacity = '0.4';
        if (lives === 0) endGame();
    }
}

function endGame() {
    colorsDiv.innerHTML = '';
    rgbText.textContent = '';
    messageText.textContent = '';
    finalScoreText.textContent = `Your Score: ${score}`;
    gameOverDiv.classList.remove('hidden');
}

function startGame() {
    lives = 3;
    score = 0;
    livesText.textContent = lives;
    scoreText.textContent = score;
    gameOverDiv.classList.add('hidden');
    newRound();
}

replayButton.addEventListener('click', startGame);
startGame();
