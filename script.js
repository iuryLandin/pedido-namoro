function yesFunction() {
    document.getElementById('body').style.background = '#FF1493'
    document.getElementById("container").innerHTML = `<h1 class="wow bounceIn"> Você escolheu a melhor opção!</h1>
    <p class="">
        <img src="dance_heart.gif" style="width: 200px;" />
    </p>`;

    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
}

function randomEmoji() {
    const emojis = ['😂', '😅', '🥰', '🥱', '😜', '🙃', '👾', '😻', '🙈', '🤭'];
    const numero_rand = Math.floor(Math.random() * emojis.length) + 0; // numero entre 0 e tamanho do array
    return emojis[numero_rand];
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}

function changePosition() {
    document.getElementById("btn_nao").style.top = `${randomNum(1, window.screen.height / 3)}px`;

    var num = randomNum(1, window.screen.width);
    if (num % 2 == 0)
        document.getElementById("btn_nao").style.left = `${randomNum(1, window.screen.width / 3)}px`;
    else
        document.getElementById("btn_nao").style.right = `${randomNum(1, window.screen.width / 3)}px`;

    document.getElementById('msg').innerHTML = `Tente novamente ${randomEmoji()}`

}

