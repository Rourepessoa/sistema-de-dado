var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage= "foto" + randomNumber1 + ".png";

var randomImageSource = randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "foto" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "jogador 1 venceu!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "jogador 2 venceu!";
} else {
    document.querySelector("h1").innerHTML = "empatou saporra";
}