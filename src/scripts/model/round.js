import board from '../board';

export default class Round {

    constructor(question) {
        this.question = question;
        this.disableUnusedBoardRows();
    }

    getQuestion() {
        return this.question;
    }

    /**
     * Remove unused board answers fields for question
     */
    disableUnusedBoardRows() {
        for (let i = 6; i > this.getQuestion().getAnswers().length; i--) { 
            board.hideUnusedAnswerField(i);
        }
    }
}
