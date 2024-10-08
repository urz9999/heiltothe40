window.heiltothe40 = window.heiltothe40 || {};

window.heiltothe40.enigmaNumber = 1;

window.heiltothe40.hints = [
    "è semplice matematica, osserva bene l'immagine, non farti trarre in inganno!",
    "il ragionamento è sempre legato alle triplette, non è necessaria matematica complicata, lo spazio vuoto è considerato X.",
    "schema per sostituzione e a step!",
    "Agisci con uno schema ben definito, appuntati le informazioni con carta e penna, è simile a mastermind.",
    "Anche questo enigma è molto semplice, ragiona bene sulle parole, è in piena luce del sole!",
    "Una volta qui, pensa ad una tastiera completa con tastierino numerico, questa informazione è utile per il confronto finale oltre che per l'enigma in sè!",
];

window.heiltothe40.answers = [
    "2",
    "33",
    "4",
    "6347",
    "4",
    "24644",
];

window.heiltothe40.results = [
   false,
   false,
   false,
   false,
   false,
   false,
];

window.heiltothe40.setUI = () => {
    for(let i = 1; i <= window.heiltothe40.answers.length; i++) {
        if(i > window.heiltothe40.enigmaNumber) {
            document.getElementById(`enigma${i}`).classList.add("hidden");
        } else {
            document.getElementById(`enigma${i}`).classList.remove("hidden");
        }
    }
};

window.heiltothe40.next  = () => {
    if(window.heiltothe40.results[window.heiltothe40.enigmaNumber - 1] === true) {
        window.heiltothe40.enigmaNumber += 1;
        window.heiltothe40.setUI();
    }
};

window.heiltothe40.check = () => {
    const userAnswer = document.getElementById(`answer${window.heiltothe40.enigmaNumber}`).value.toLowerCase();
    if (userAnswer === window.heiltothe40.answers[window.heiltothe40.enigmaNumber - 1].toLowerCase()) {
        if(window.heiltothe40.enigmaNumber < window.heiltothe40.answers.length) {
            alert('Ottimo lavoro agente Sangalli! Hai trovato l\'artefatto numero ' + window.heiltothe40.enigmaNumber);
        } else {
            alert('Complimenti agente Sangalli! Hai trovato tutti gli artefatti, ora salvati in un luogo sicuro le risposte ti torneranno utili alla fine per completare la missione');
        }

        document.getElementById(`prize${window.heiltothe40.enigmaNumber}`).classList.remove("hidden");
        document.getElementById(`story${window.heiltothe40.enigmaNumber}`).classList.remove("hidden");
        window.heiltothe40.results[window.heiltothe40.enigmaNumber - 1] = true;
        window.heiltothe40.next();
        window.heiltothe40.setUI();
    } else {
        alert('Fai attenzione agente Sangalli. La risposta è sbagliata, riprova!');
    }
};

window.heiltothe40.hint = () => {
    alert(window.heiltothe40.hints[window.heiltothe40.enigmaNumber - 1]);
};

window.heiltothe40.init = () => {
    window.heiltothe40.enigmaNumber = 1;
    for(let i = 1; i <= window.heiltothe40.answers.length; i++) {
        document.getElementById(`enigma${i}`).classList.add("hidden");
    }
};

window.heiltothe40.start = () => {
    document.getElementById("start").classList.add("hidden");
    document.getElementById("navigator").classList.remove("hidden");
    window.heiltothe40.setUI();
};

document.addEventListener("DOMContentLoaded", () => {
    window.heiltothe40.init();
});
