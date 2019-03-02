import { QuestionStore } from '../src/scripts/model/questionStore';
import { questions } from '../src/data.json';
import { Question } from '../src/scripts/model/question';
import { Answer } from '../src/scripts/model/answer';
import { exists } from 'fs';

describe('returnRandomQuestionFromDataJson', () => {
    test('should return random question', () => {

        const questionsStoreTest = new QuestionStore(questions);
        const questionRandomTitle = questionsStoreTest.getRandomQuestionTitle();

        expect(typeof questionRandomTitle).toBe('string');
    });

    test('testReturnQuestionAsModels', () => {

        const questionsStore = new QuestionStore(questions);
        const questionsInGame = questionsStore.getQuestions();
    });

    test('testParseQuestions', () => {
        for (let i = 0; i < Object.keys(questions).length; i++) {
            const answers = Object.values(questions)[i];
            const parsedAnswers = answers.filter(answer => answer).map(answer => new Answer(answer));
            const question = new Question(Object.keys(questions)[i], parsedAnswers)
        }
    });
});
