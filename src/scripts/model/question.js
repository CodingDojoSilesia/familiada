export default class Question {
    constructor(name, answers) {
        this.name = name;
        this.answers = answers.filter(answer => answer);
    }

    getName() {
        return this.name;
    }

    getAnswers() {
        return this.answers;
    }

    getAnswersWords() {
        return this.answers.map(answer => answer.ans);
    }

}
