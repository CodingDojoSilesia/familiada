import QuestionStore from '../src/scripts/model/questionStore';
import { questions } from '../src/data.json';
import Question from '../src/scripts/model/question';
import Answer from '../src/scripts/model/answer';
import Game from '../src/scripts/model/game';
import Team from '../src/scripts/model/team';
import teams from '../src/scripts/teams';

describe('testQuestionStore', () => {
    test('testReturnRandomQuestion', () => {
  
        const game = new Game([new Team(teams.BLUE), new Team(teams.RED)], new QuestionStore(questions));

        expect(typeof game).toBe('object');
    });
});