let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
let SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

let recognition = new SpeechRecognition();
let speechRecognitionList = new SpeechGrammarList();

function loadGrammar(words) {
    let grammar = '#JSGF V1.0; grammar colors; public <color> = ' + words.join(' | ') + ' ;'
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'pl-PL';
    recognition.interimResults = false;
    recognition.maxAlternatives = 10;
}

function start() {
    return new Promise((resolve, reject)=> {
        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onnomatch = () => {
            reject('No match');
        };

        recognition.onerror = event => {
            reject('Error occurred in recognition: ' + event.error);
        };

        recognition.onresult = event => {
            resolve(event.results);
        };

        recognition.start();
    });
}

module.exports = {
    loadGrammar,
    start,
};
