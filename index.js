//generate a random number [1:6]
function randomNumber1 () {
    var randNum = Math.floor(Math.random()* 6) + 1;
    return randNum;
}
const throwBtn = document.getElementById("throwBtn");
throwBtn.onclick = ()=>{
var player1Random = randomNumber1();
var player2Random = randomNumber1();
//choosing the image regarding the random number
var player1ImgSrc = "./images/dice" + player1Random+ ".png"; 
var player2ImgSrc = "./images/dice" + player2Random+ ".png";
//changing src attr for both images
document.getElementsByClassName("img1")[0].setAttribute("src",player1ImgSrc);
document.getElementsByClassName("img2")[0].setAttribute("src",player2ImgSrc);
//Winner reveal
if (player1Random > player2Random) {
    document.querySelector("h1").innerText = "🚩player1 won";
}
else if (player1Random < player2Random){
    document.querySelector("h1").innerText = "player2 won🚩";
}
else {
    document.querySelector("h1").innerText = "Draw";
}
}






