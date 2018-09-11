var gameSpace = document.querySelectorAll('.playerBox'),
    homeScores = document.querySelectorAll('.home-score-box'),
    awayScores = document.querySelectorAll('.away-score-box'),
    scoresButton = document.getElementById('scoresButton');

for (var x=0; x<gameSpace.length; x++){
    gameSpace[x].addEventListener('click', selectBox);
}

scoresButton.addEventListener('click', generateScores);

function selectBox(){
    var player = prompt('Enter Your Name: ');

    if (player != null && player.length > 0){
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(player));
        this.appendChild(p);
        this.querySelector("img").classList.add('hidden');
        this.removeEventListener('click', selectBox);
    }
}

function randomScores(){
    var scoreSet = [0,1,2,3,4,5,6,7,8,9],
        counter = scoreSet.length,
        index,
        temp;

    while(counter > 0){
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = scoreSet[counter];
        scoreSet[counter] = scoreSet[index];
        scoreSet[index] = temp;
    }
    return scoreSet;
}

function generateScores(){
    hscores = randomScores();
    ascores = randomScores();

    for (var x=0; x<homeScores.length; x++){
        homeScores[x].querySelector("p").innerHTML = hscores[x];
    }

    for (var x=0; x<awayScores.length; x++){
        awayScores[x].querySelector("p").innerHTML = ascores[x];
    }

}