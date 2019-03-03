import QuestionStore from '../src/scripts/model/questionStore';
import { questions } from '../src/data.json';
import Question from '../src/scripts/model/question';
import Answer from '../src/scripts/model/answer';

describe('testQuestionStore', () => {

    let questionsStore = null;

    beforeAll(() => {
        questionsStore = new QuestionStore(questions);
    });

    test('testReturnRandomQuestion', () => {
        const randomQuestion = questionsStore.getRandomQuestion();
        const firstAnswersKeysFromRandomQuestion = Object.keys(randomQuestion.getAnswers()[0]);

        expect(typeof randomQuestion).toBe('object');
        expect(Array.isArray(randomQuestion.getAnswers())).toBe(true);
        expect(firstAnswersKeysFromRandomQuestion.length).toBe(3);
        expect(firstAnswersKeysFromRandomQuestion[0]).toBe('ans');
        expect(firstAnswersKeysFromRandomQuestion[1]).toBe('lp');
        expect(firstAnswersKeysFromRandomQuestion[2]).toBe('points');
    });
    test('testReturnParsedArrayOfQuestions', () => {

    });
});
