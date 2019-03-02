import Answer from '../model/answer';
import Question from '../model/question';

export default class QuestionStore {

    constructor(questions) {
        this.questions = this.parseQuestions(questions);
    }

    parseQuestions(questions) {
        const titles = Object.keys(questions);
        const answers = Object.values(questions);
        const parsedQuestions = [];

        for (let i = 0; i < answers.length; i++) {
            const parsedAnswers = answers[i].filter(answer => answer).map(answer => new Answer(answer));
            parsedQuestions.push(new Question(titles[i], parsedAnswers));
        }
        return parsedQuestions;
    }

    getRandomQuestion() {
        return this.questions[this.getRandomQuestionId()];
    }
    
    getRandomQuestionId() {
        return Math.floor(Math.random() * (this.questions.length - 1 + 1) + 1);
    }
}
