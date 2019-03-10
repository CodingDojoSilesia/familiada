import board from '../board';
import Answer from './answer';
import Team from './team';
import Game from './game';
import ROUND_STATUS from '../roundStatus';
/**
 * Manage current question and board
 */
export default class Round {

    constructor(question) {
        this.right = 0;
        this.status = ROUND_STATUS.DEFAULT;
        this.points = 0;
        this.question = question;
        board.setQuestion(this.question.getName());
        board.manageAnswerFields(this.getQuestion().getAnswers().length);
    }

    /**
     * @param {Answer} answer 
     * @param {Game} game
     */
    setBoardAnswer(answer, game) {
        board.setAnswer(answer.lp, answer.ans, answer.points);
        this.right++;
        this.points += answer.points;
        if (this.checkFinish() || this.status === ROUND_STATUS.STOLEN) this.finishRound(game);

    }
    /**
     * @param {Team} team 
     * @param {Game} game
     */
    setBoardError(team, game) {
        team.addError()
        board.setErrors(team.getName(), team.getErrors());

        if (this.status === ROUND_STATUS.STOLEN) {
            game.switchCurrentTeam();
            game.getCurrentTeam().addPoints(this.points);
            this.startNewRound(game);
        }

        if (team.getErrors() === 3) {
            game.switchCurrentTeam();
            this.status = ROUND_STATUS.STOLEN;
        }    
    }

    
    checkFinish() {
        return this.question.getAnswers().length === this.right;
    }

    /**
     * @param {Team} team 
     * @param {Game} game 
     */
    finishRound(game) {

        if(game.getRoundCount() === 4) this.points * 2;
        if(game.getRoundCount() === 5) this.points * 3;

        game.getCurrentTeam().addPoints(this.points);
        board.setPoints(game.getCurrentTeam().getName(), this.points);

        if (game.getCurrentTeam().getPoints() >= 400) {
            this.finishGame(game.getCurrentTeam().getName());
            return;
        }
        this.startNewRound(game);   
    }

    /**
     * @param {Game} game 
     */
    startNewRound(game) {
        board.clearBoard();
        game.startNewRound();
    }
    /**
     * @param {string} teamName 
     */
    finishGame(teamName) {
        board.finishGame(teamName);
    }

    getQuestion() {
        return this.question;
    }

    getPoints () {
        return this.points;
    }

    getStatus() {
        return this.status;
    }

    getRight() {
        return this.right;
    }
}
