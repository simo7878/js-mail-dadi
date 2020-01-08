alert('Start Game!');

//lista numeri da 1 a 6
var numeriDado = [1,2,3,4,5,6];

// player 1 lancio dado random
alert('turno Player 1');
var numeroPlayer1 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer1);

//player 2 lancio dado random
alert('turno Player2');
var numeroPlayer2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer2);

//confronto tra i due numeri e vincita numero maggiore
if(numeroPlayer1>numeroPlayer2){
  console.log('Player1 Wins');
}
else if(numeroPlayer1==numeroPlayer2){
  console.log('parity');
}
else{
  console.log('Player2 Wins');
}
