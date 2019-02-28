class QuestionStore {

    constructor(questions) {
        this.questions = questions;
    }

    getRandomQuestion() {
        return true;
    }

    getRandomQuestionNumber() {
        const numberOfQuestions = Object.keys(this.questions).length;

        return Math.floor(Math.random() * (numberOfQuestions - 1 + 1) + 1);
    }
}

module.exports = {
    QuestionStore,
}    