export default class Question {
    constructor(name, answers) {
        this.name = name;
        this.answers = answers.filter(answer => answer);
    }
}
