import QuestionStore from '../src/scripts/model/questionStore';

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

    test('test return random question answers', () => {
        const randomQuestion = questionsStore.getRandomQuestion();
        const firstAnswersKeysFromRandomQuestion = Object.keys(randomQuestion.getAnswers()[0]);

        expect(typeof randomQuestion).toBe('object');
        expect(Array.isArray(randomQuestion.getAnswers())).toBe(true);
        expect(firstAnswersKeysFromRandomQuestion.length).toBe(3);
        expect(firstAnswersKeysFromRandomQuestion[0]).toBe('ans');
        expect(firstAnswersKeysFromRandomQuestion[1]).toBe('lp');
        expect(firstAnswersKeysFromRandomQuestion[2]).toBe('points');
    });

    test('test return random question index when add one question', () => {
        expect(questionsStore.getRandomQuestionId()).toBe(0);
    });

    test('testr return random question when add one question', () => {
        expect(questionsStore.getRandomQuestion().getName()).toBe('Atrybut świętego Mikołaja?');
    });
});
