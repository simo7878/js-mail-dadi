alert('Benvenuto!');

//creare lista di email
var listaEmail = ['ladyes77@hotmail.it', 'simosimo7878@libero.it', 'francescadecesare@yahoo.it', 'nickspan@gmail.com'];

//chiedere email all'utente
var emailUtente = prompt('inserisci la tua email');
console.log(emailUtente);
var mailPresente = false;

//verifica presenza email nella listaEmails
for (var i = 0; i < listaEmail.length; i++) {
  var lista = listaEmail[i];
  if(lista == mailPresente){
    mailPresente = true;
  }
}
if (mailPresente == true){
  alert('Benvenuto nella tua area riservata');
}else{
  alert('Email non riconosciuta');
}
