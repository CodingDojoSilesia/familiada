import board from '../board';
import Answer from './answer';
import Team from './team';
import Game from './game';
/**
 * Manage current question and board
 */
export default class Round {

    constructor(question) {
        this.right = 0;
        this.status = 'default';
        this.points = 0;
        this.question = question;
        board.setQuestion(this.question.getName());
        board.manageAnswerFields(this.getQuestion().getAnswers().length);
    }

    getQuestion() {
        return this.question;
    }
    /**
     * @param {Answer} answer 
     * @param {Game} game
     */
    setBoardAnswer(answer, game) {
        board.setAnswer(answer.lp, answer.ans, answer.points);
        this.right++; // all answers right! new Round! 
        this.points += answer.points;
        // all answers good
        if (this.checkFinish()) {
            this.finishRound();
            game.round = new Round(this.questionsStore.getRandomQuestion());
        }
    }
    /**
     * @param {Team} team 
     * @param {Game} game
     */
    setBoardError(team, game) {
        team.addError()
        board.setErrors(team.getName(), team.getErrors());
        if (team.getErrors() === 3) game.switchCurrentTeam();
        // @TODO when question is stolen finish round!
    }

    getStatus() {
        return this.status;
    }

    getRight() {
        return this.right;
    }

    checkFinish() {
        return this.question.getAnswers().length === this.right;
    }

    finishRound(team) {
        team.addPoints(this.round.points);
        board.setPoints(team.getName(), this.round.points);
        board.clearBoard();
    }

    getPoints () {
        return this.points;
    }
}
