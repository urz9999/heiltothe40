window.heiltothe40 = window.heiltothe40 || {};

window.heiltothe40.enigmaNumber = 1;

window.heiltothe40.hints = [
    "Devi trovare informazioni sull'alfabeto della lingua Maya, scritto in glifi. Cerca anche di dedurre il metodo di scrittura/lettura dal nostro aiuto in codice. Quindi indovina la parola d'ordine della valigetta con il primo indizio che abbiamo preparato.",
];

window.heiltothe40.answers = [
    "punti cardinali",
];

window.heiltothe40.results = [
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
