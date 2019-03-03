import QuestionStore from '../src/scripts/model/questionStore';
import { questions } from '../src/data.json';
import Question from '../src/scripts/model/question';
import Answer from '../src/scripts/model/answer';
import Game from '../src/scripts/model/game';
import Team from '../src/scripts/model/team';
import TEAMS from '../src/scripts/teams';

describe('testOnNewGame', () => {

    let game = null;

    beforeAll(() => {
        game = new Game([new Team(TEAMS.BLUE), new Team(TEAMS.RED)], new QuestionStore(questions));
    });

    test('testCreatedNewGame', () => {
        expect(typeof game).toBe('object');
    });

    test('testFindGoodAnswerFromQuestionAswers', () => {

        const questionAnswers = ['Odpowiedz', 'Odpowiedz2', 'Odpowiedz3'];

        const playerSpeechAnswer = [
            {confidence: 0.9631079435348511, transcript: "odpowiedz"},
            {confidence: 0.9631079435348511, transcript: "cos innego"}
        ];

        const parsedQuestionAnswers = questionAnswers.map(answer => answer.toLowerCase());

        const result = playerSpeechAnswer.find(answer => { return parsedQuestionAnswers.includes(answer.transcript)});

        expect(result.transcript).toBe('odpowiedz');
    });

    test('testSetRandomTeamAsCurrentWhenStartGame', () => {
        expect(Object.values(TEAMS).includes(game.getCurrentTeam())).toBe(true);
    });
});
