import TEAMS from './teams'
import board from './board';
import speech from './speech';
import { questions } from './../data.json';
import Game from './model/game';
import Team from './model/team';
import QuestionStore from './model/questionStore';

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

const game = new Game([new Team(TEAMS.BLUE), new Team(TEAMS.RED)], new QuestionStore(questions));

speech.loadGrammar(game.getRound().getQuestion().getAnswersWords());
document.querySelector('.record').onclick = function() {
    board.recordButton('start');
    speech.start().then((result) => {
        game.handlePlayerAnswer(result[0][0].transcript);
        board.recordButton('stop');
    });
};
