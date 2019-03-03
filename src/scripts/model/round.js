import board from '../board';
import Answer from './answer';
import Team from './team';
/**
 * Manage current question and board
 */
export default class Round {

    constructor(question) {
        this.right = 0; // rozpoznanie kiedy konczy sie runda (wszystkie odpowiedzi ok, niezaleznie od druzyny)
        this.status = 'default';
        this.points = 0;
        this.question = question;
        this.disableUnusedBoardRows();
        board.setQuestion(this.question.getName());
    }

    getQuestion() {
        return this.question;
    }
    /**
     * @param {Answer} answer 
     */
    setBoardAnswer(answer) {
        board.setAnswer(answer.lp, answer.ans, answer.points);
        this.right++; // all answers right! new Round! 
        this.points += answer.points;
    }
    /**
     * @param {Team} team 
     */
    setError(team) {
        board.setErrors(team.getName(), team.getErrors());
    }

    /**
     * Remove unused board answers fields for question on board
     */
    disableUnusedBoardRows() {
        for (let i = 6; i > this.getQuestion().getAnswers().length; i--) { 
            board.hideUnusedAnswerField(i);
        }
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
}
