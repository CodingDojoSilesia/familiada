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
board.setQuestion(game.getRound().getQuestion().getName());

speech.loadGrammar(game.getRound().getQuestion().getAnswersWords());
document.querySelector('.record').onclick = function() {
    speech.start().then((result) => {
        

        const playerSpeechAnswer = result[0][0].transcript;

        const answerForQuestion = game.getRound().getQuestion().getAnswers();

        const playerAnswerResult = answerForQuestion.find(answer => {
            return answer.ans.toLowerCase() === playerSpeechAnswer;
        });

        if (playerAnswerResult != undefined) {
            board.setAnswer(playerAnswerResult.lp, playerAnswerResult.ans, playerAnswerResult.points);
            return true;
        }

        board.setErrors(game.getTeam(), 1);
    });
};
