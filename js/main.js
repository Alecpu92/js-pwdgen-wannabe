// chiedi all'utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

// chiedere nome utente

let nomeUtente = prompt("inserisci il tuo nome");
console.log(nomeUtente)

// chiedere cognome utente
let cognomeUtente = prompt("inserisci il tuo cognome")
console.log(cognomeUtente)

// chiedere colore preferito utente
let colorePreferito = prompt("inserisci il tuo colore preferito")
console.log(colorePreferito)

// scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("mio_id").innerHTML = nomeUtente + cognomeUtente + colorePreferito + "21"