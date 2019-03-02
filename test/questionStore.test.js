import QuestionStore from '../src/scripts/model/questionStore';
import { questions } from '../src/data.json';
import Question from '../src/scripts/model/question';
import Answer from '../src/scripts/model/answer';

describe('testQuestionStore', () => {
    test('testReturnRandomQuestion', () => {
        const questionsStore = new QuestionStore(questions);
        const randomQuestion = questionsStore.getRandomQuestion();

        expect(typeof randomQuestion).toBe('object');
    });
});
