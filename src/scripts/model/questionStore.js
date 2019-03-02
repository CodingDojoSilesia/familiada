class QuestionStore {

    constructor(questions) {
        this.questions = questions;
    }

    parseQuestions() {
        // return Object.values(this.questions);

        for (let i = 0; i < Object.keys(questions).length; i++) {

        }
    }

    getRandomQuestion() {

        const title = this.getRandomQuestionTitle();
        return true;
    }

    getRandomQuestionTitle() {
        const questionsTitles = Object.keys(this.questions);
        const randomNumber = Math.floor(Math.random() * (Object.keys(this.questions).length - 1 + 1) + 1);

        return questionsTitles[randomNumber];
    }
    
    getQuestions() {
        return this.questions;
    }
}

module.exports = {
    QuestionStore,
}    