import QuestionStore from '../src/scripts/model/questionStore';
import Question from '../src/scripts/model/question';
import Answer from '../src/scripts/model/answer';

describe('testQuestionStore', () => {

    const questions = { 'Atrybut świętego Mikołaja?': 
        [ 
            null,
            { ans: 'Worek', lp: 1, points: 35 },
            { ans: 'Czapka', lp: 2, points: 23 },
            { ans: 'Broda', lp: 3, points: 20 },
            { ans: 'Dzwonek', lp: 4, points: 8 },
            { ans: 'Renifery', lp: 5, points: 7 } 
        ]
    };

    let questionsStore = null;

    beforeAll(() => {
        questionsStore = new QuestionStore(questions);
    });

    test('testReturnRandomQuestionAnswers', () => {
        const randomQuestion = questionsStore.getRandomQuestion();
        const firstAnswersKeysFromRandomQuestion = Object.keys(randomQuestion.getAnswers()[0]);

        expect(typeof randomQuestion).toBe('object');
        expect(Array.isArray(randomQuestion.getAnswers())).toBe(true);
        expect(firstAnswersKeysFromRandomQuestion.length).toBe(3);
        expect(firstAnswersKeysFromRandomQuestion[0]).toBe('ans');
        expect(firstAnswersKeysFromRandomQuestion[1]).toBe('lp');
        expect(firstAnswersKeysFromRandomQuestion[2]).toBe('points');
    });

    test('testReturnRandomQuestionIndexWhenAddOneQuestion', () => {
        expect(questionsStore.getRandomQuestionId()).toBe(0);
    });

    test('testReturnRandomQuestionWhenAddOneQuestion', () => {
        expect(questionsStore.getRandomQuestion().getName()).toBe('Atrybut świętego Mikołaja?');
    });



});
