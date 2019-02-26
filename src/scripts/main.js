import TEAMS from './teams'
import board from './board';
import speech from './speech';

board.setAnswer(1, '', 0);
board.setAnswer(2, '', 0);
board.setAnswer(3, '', 0);
board.setAnswer(4, '', 0);
board.setAnswer(5, '', 0);
board.setAnswer(6, '', 0);

board.setPoints(TEAMS.BLUE, 0);
board.setPoints(TEAMS.RED, 0);

board.setErrors(TEAMS.RED, 0);
board.setErrors(TEAMS.BLUE, 0);

board.setQuestion('Coding Dojo Silesia');

speech.loadGrammar(['żółty', 'zielony', 'fioletowy', 'niebieski']);
document.querySelector('.record').onclick = function() {
    speech.start().then((result) => {
        console.log(result);
    });
};
