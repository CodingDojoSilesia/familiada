import QuestionStore from '../src/scripts/model/questionStore';
import Game from '../src/scripts/model/game';
import Team from '../src/scripts/model/team';
import TEAMS from '../src/scripts/teams';
import { exampleDomDocument } from './documentForTests';
import ROUND_STATUS from '../src/scripts/roundStatus';

describe('testsOnNewGame', () => {

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

    test('test find good answer from question answers', () => {
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


describe('testTeamAnswersForQuestion', () => {

    let game;

    beforeEach(() => {

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

        game = new Game([new Team(TEAMS.BLUE), new Team(TEAMS.RED)], new QuestionStore(questions));

        document.body.innerHTML = exampleDomDocument;
    });

    test('team should win round when all answers are good', () => {
        const startedTeam = game.getCurrentTeam();

        game.handlePlayerAnswer('worek');
        game.handlePlayerAnswer('czapka');
        game.handlePlayerAnswer('broda');
        game.handlePlayerAnswer('dzwonek');
        game.handlePlayerAnswer('renifery');

        const teamAfterAnswers = game.getCurrentTeam();

        expect(startedTeam.getName() === teamAfterAnswers.getName()).toBe(false);
        expect(startedTeam.getPoints()).toBe(93);
    });

    test('question move to second question after 3 bad answers', () => {

        const startedTeam = game.getCurrentTeam();

        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');

        const teamAfterAnswers = game.getCurrentTeam();

        expect(startedTeam.getName() === teamAfterAnswers.getName()).toBe(false);
        expect(startedTeam.getPoints()).toBe(0);
        expect(game.getRound().getStatus()).toBe(ROUND_STATUS.STOLEN);

    });

    test('test question move to second team and this team answers properly', () => {

        const startedTeam = game.getCurrentTeam();

        game.handlePlayerAnswer('worek');
        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');

        const teamAfterAnswers = game.getCurrentTeam();

        expect(startedTeam.getName() === teamAfterAnswers.getName()).toBe(false);
        expect(startedTeam.getPoints()).toBe(0);
        expect(game.getRound().getStatus()).toBe(ROUND_STATUS.STOLEN);

        game.handlePlayerAnswer('czapka');

        expect(teamAfterAnswers.getPoints()).toBe(58);
    });

    test('test question move to second team and this team answers bad', () => {

        const startedTeam = game.getCurrentTeam();

        game.handlePlayerAnswer('worek');
        game.handlePlayerAnswer('czapka');
        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');
        game.handlePlayerAnswer('bledna odpowiedz');

        expect(startedTeam.getPoints()).toBe(58);
    });

    test('finish game when has at least 400 points', () => {

        const startedTeam = game.getCurrentTeam();
        startedTeam.addPoints(380);

        game.handlePlayerAnswer('worek');
        game.handlePlayerAnswer('czapka');
        game.handlePlayerAnswer('broda');
        game.handlePlayerAnswer('dzwonek');
        game.handlePlayerAnswer('renifery');
    });

    test('double points when is fourth round', () => {

        game.roundCount = 4;
        const startedTeam = game.getCurrentTeam();

        game.handlePlayerAnswer('worek');
        game.handlePlayerAnswer('czapka');
        game.handlePlayerAnswer('broda');
        game.handlePlayerAnswer('dzwonek');
        game.handlePlayerAnswer('renifery');

        expect(startedTeam.getPoints()).toBe(186);
    });

    test('multiple by 3 points when is fifth round', () => {

        game.roundCount = 5;
        const startedTeam = game.getCurrentTeam();

        game.handlePlayerAnswer('worek');
        game.handlePlayerAnswer('czapka');
        game.handlePlayerAnswer('broda');
        game.handlePlayerAnswer('dzwonek');
        game.handlePlayerAnswer('renifery');

        expect(startedTeam.getPoints()).toBe(279);
    });
});
