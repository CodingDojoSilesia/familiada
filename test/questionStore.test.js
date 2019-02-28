import { QuestionStore } from '../src/scripts/model/questionStore';
import { questions } from '../src/data.json';

describe('returnRandomQuestionFromDataJson', () => {
    test('should return random question', () => {
        const questionsStore = new QuestionStore(questions);
        const randomQuestionNumber = questionsStore.getRandomQuestionNumber();
        expect(randomQuestionNumber).toBeGreaterThan(0);
        expect(randomQuestionNumber).toBeLessThan(Object.keys(questions).length + 1);
        expect(questionsStore.getRandomQuestion()).toBe(true);
    });
});