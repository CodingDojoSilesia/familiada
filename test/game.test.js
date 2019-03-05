import QuestionStore from '../src/scripts/model/questionStore';
import Question from '../src/scripts/model/question';
import Answer from '../src/scripts/model/answer';
import Game from '../src/scripts/model/game';
import Team from '../src/scripts/model/team';
import TEAMS from '../src/scripts/teams';

describe('testOnNewGame', () => {

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

    const playerSpeechAnswer = [
        {confidence: 0.9631079435348511, transcript: "worek"},
        {confidence: 0.9631079435348511, transcript: "cos innego"}
    ];

    let game = null;

    document.body.innerHTML = '<h3 class="question">This question should be replaced</h3>';

    beforeAll(() => {
        game = new Game([new Team(TEAMS.BLUE), new Team(TEAMS.RED)], new QuestionStore(questions));
    });

    test('test created new game', () => {
        expect(typeof game).toBe('object');
    });

    test('test find good answer from question aswers', () => {
        const result = game.resolvePlayerAnswer(playerSpeechAnswer[0].transcript);
        expect(result.status).toBe(true);
    });

    test('test return false when answer is bad', () => {
        const result = game.resolvePlayerAnswer('bledna odpowiedz');
        expect(result.status).toBe(false);
    });

    test('test set random team as current when start game', () => {
        expect(Object.values(TEAMS).includes(game.getCurrentTeam().getName())).toBe(true);
    });

    test('test switch current team on round', () => {
        const initialTeamName = game.getCurrentTeam().getName();
        game.switchCurrentTeam();
        const changedTeamName = game.getCurrentTeam().getName();
        expect(initialTeamName === changedTeamName).toBe(false);
    });
});
