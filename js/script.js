/*Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.*/

var arrayNumeriCasuali = []; //numeri che apparirano nell'alert

while (arrayNumeriCasuali.length < 5) {
  var numeriCasuali = numeroRangomGen(1, 100);
  //unicità dei numeri random
  if (! arrayNumeriCasuali.includes(numeriCasuali)){
    arrayNumeriCasuali.push(numeriCasuali);
  };
};

//creo un alert che mostri i 5 numeri casuali
alert("Memorizza i seguenti numeri: " + arrayNumeriCasuali);
console.log(arrayNumeriCasuali);

//parte il timer di 30 secondi
setTimeout(numeroPrompt, 3000);


/*******************FUNZIONI PER L'OUTPUT*******************************/

//FUNZIONE PER GENERARE NUMERI RANDOM
function numeroRangomGen(min, max) {
  var nRG = Math.floor(Math.random()* max) + min;
  return nRG;
};

//FUNZIONI PER TIMER 30sec E 5 PROMPT
function numeroPrompt() {
  var arrayNumeriUser = [];
  var numeriTrovati = [];

  for (var i = 0; i < 5; i++) {
    var numeriUser = parseInt(prompt("Inserisci un numero"));
    //i numeri inseriti non possono ripetersi, non possono essere minori di 1 o maggiori di 100
    while (arrayNumeriUser.includes(numeriUser) || (numeriUser < 1) || (numeriUser > 100)) {
      alert("Attenzione! Scrivi un numero corretto");
      numeriUser = parseInt(prompt("Inserisci un numero"));
    };
    arrayNumeriUser.push(numeriUser);
    console.log(arrayNumeriUser);
    //verifico che i numeri che ha inserito l'utente siano presenti in arrayNumeriCasuali
    if (arrayNumeriCasuali.includes(numeriUser)) {
      numeriTrovati.push(numeriUser);
    };
  };

  console.log(numeriTrovati);

  if (numeriTrovati.length === 5) {
    alert("Complimenti hai indovinato tutti i numeri!!");
    alert("I numeri che hai indovinato sono: " + numeriTrovati);
  } else if (numeriTrovati.length > 0) {
    alert("Hai indovinato " + numeriTrovati.length + " numeri");
    alert("I numeri che hai indovinato sono: " + numeriTrovati);
  } else {
    alert("Ci dispiace ma hai indovinato " + numeriTrovati.length + " numeri");
  };

};
