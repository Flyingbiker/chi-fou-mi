var scorePlayerOne = 0;
var scoreComputer = 0;
var choiceComputer = '';
var choicePlayerOne = '';
var buttonCiseaux = document.getElementById("ciseaux");
var buttonFeuille = document.getElementById("feuille");
var buttonPierre = document.getElementById("pierre");
var buttonStartGame = document.getElementById("startGame");
var displayScorePlayerOne = document.getElementById("scorePlayerOne");
var displayScoreComputer = document.getElementById("scoreComputer");
var scorePlayerOneAfficher = document.createElement("h3");
var scoreComputerAfficher = document.createElement("h3");
var egaliteId = document.getElementById("egalite");
var victory = document.getElementById('victory');
var pictureComputer = document.getElementById("cardComputer");
var buttonPlayAgain = document.getElementById('playAgain');

console.log(buttonCiseaux, buttonFeuille, buttonPierre);

//increment score player 1
function incScorePlayerOne(){
    return ++scorePlayerOne;    
}

//increment score computer
function incScoreComputer(){
    return ++scoreComputer;    
}

//test if the goal of 5 point is achieved
function goalPlayerOne(){
    if (scorePlayerOne === 5) {return true}
    else {return false};
}

//test if the goal of 5 point is achieved
function goalComputer(){
    if (scoreComputer === 5) {return true}
    else {return false};
}

//for determine the comuter choice 
function randomChoiceComputer(){
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) { 
        discardComputerCard('ciseaux')
        return 'ciseaux'} 
        else if (choice === 1) {
            discardComputerCard('feuille')
            return 'feuille'} 
            else {discardComputerCard('pierre')
                return 'pierre'} ;
    
}

/*compare the choice of the two player 
and attribute the point to the winner*/
function whoWinThePoint(){
    let choiceComputer = randomChoiceComputer();
    if (choiceComputer === choicePlayerOne) {
        afficherEgalite();
        return 'égalité';
        } else{
        switch (choicePlayerOne) {
            case 'pierre':
                if (choiceComputer === 'ciseaux') {
                    incScorePlayerOne();                    
                    break;} 
                else {incScoreComputer();
                    break;}; 
            case 'feuille':
                if (choiceComputer === 'pierre') {
                    incScorePlayerOne();                    
                    break;} 
                else {incScoreComputer();                    
                    break;} 
            case 'ciseaux':
                if (choiceComputer === 'feuille') {
                    incScorePlayerOne();                    
                    break;} 
                else {incScoreComputer();                    
                    break;} 
            default: console.log('Désolé pas de choix cohérent de valeur ChiFouMi');
        }
    }
}

//display on the html 
function displayScore(){
    scorePlayerOneAfficher.innerHTML = scorePlayerOne ;
    displayScorePlayerOne.appendChild(scorePlayerOneAfficher); 
    scoreComputerAfficher.innerHTML = scoreComputer ;
    displayScoreComputer.appendChild(scoreComputerAfficher); 
}

//to test if there is a winner and to advertise it
 function andTheWinnerIs(){
    let victory = document.getElementById("victory");
    let modaleEndGame = document.getElementById("modale");
    if (goalPlayerOne()) {
        victory.innerHTML = "<h3>Victoire du joueur 1</h3>"; 
        modaleEndGame.style.visibility = "visible";    
     } else if (goalComputer()) {
        victory.innerHTML = "<h3>Victoire de l'ordinateur</h3>";
        modaleEndGame.style.visibility = "visible";
    }    
 }


//fonction pour factoriser les actions sur le click des images
function refactoFunction(choice){
    choicePlayerOne = choice;    
    whoWinThePoint();  
    displayScore(); 
    andTheWinnerIs();
}

//action sur le click du bouton start game
buttonStartGame.addEventListener("click", function(){
    startGame.style.display = "none";
    let titleGame = document.getElementById("Title");
    titleGame.style.display = "none";    
    let picturePlayerOne = document.getElementById("picturePlayerOne");
    picturePlayerOne.style.visibility = "visible";   
    pictureComputer.style.visibility = "visible";
    let score = document.getElementById("score");
    score.style.visibility = "visible";
})

//function pour afficher le message égalité
function afficherEgalite(){
    egaliteId.style.visibility = "visible";
    egaliteId.innerHTML = "<h4>Egalité</h4>";
    setTimeout(function(){egaliteId.style.visibility = "hidden"},1000);
}

//faire afficher carte ordi
function discardComputerCard(choice){
    let urlPicture = "img/" + choice + ".png";
    let placeCardComputer = document.getElementById("placeCardComputer");
    placeCardComputer.setAttribute("src", urlPicture);
    let interogationPoint = document.querySelector("#cardComputer h2");
    interogationPoint.style.visibility= "hidden";
}

//function for paying again
buttonPlayAgain.addEventListener('click', function(){
    document.location.reload('true');    
    // scorePlayerOne = 0;
    // scoreComputer = 0;
    // let interogationPoint = document.querySelector("#cardComputer h2");
    // interogationPoint.style.visibility= "visible";
    // let modaleEndGame = document.getElementById("modale");
    // modaleEndGame.style.visibility = "hidden";
})

buttonCiseaux.addEventListener("click", function(){
    refactoFunction("ciseaux");
});
buttonPierre.addEventListener("click", function(){
    refactoFunction("pierre");
});
buttonFeuille.addEventListener("click", function(){
    refactoFunction("feuille");
});