import board from '../src/scripts/board';
import TEAMS from "../src/scripts/teams";

describe('fillAnswerField', () => {
    test('returns the empty text placeholder when received empty string', () => {
        expect(board.fillAnswerField('')).toBe('... ... ... ... ... ... ... ... ... ... ... ... ...');
    });

    test('places the string in the text and pads the remaining length using the placeholder text', () => {
        expect(board.fillAnswerField('Coding Dojo Silesia')).toBe('Coding Dojo Silesia ... ... ... ... ... ... ... ...');
    });

    test('crops the string in parameter to the length to the placeholder and leaves 3 dots at the end', () => {
        expect(board.fillAnswerField('Coding Dojo Silesia is the best thing to do your Thursday evening'))
            .toBe('Coding Dojo Silesia is the best thing to do your...');
    });
});

describe('setAnswer', () => {
    test('sets the answer text and points, given the correct number', () => {
        document.body.innerHTML = `
            <li data-answer-num="1">
                <span class="number">1.</span>
                <span class="text">This will change</span>
                <span class="points">42</span>
            </li>
            <li data-answer-num="2">
                <span class="number">2.</span>
                <span class="text">This will not</span>
                <span class="points">37</span>
            </li>
        `;

        board.setAnswer(1, 'See? It changed', 13);

        expect(document.querySelector('[data-answer-num="1"] .text').innerHTML)
           .toBe(board.fillAnswerField('See? It changed'));
        expect(document.querySelector('[data-answer-num="2"] .text').innerHTML)
           .toBe('This will not');

        expect(document.querySelector('[data-answer-num="1"] .points').innerHTML)
           .toBe('13');
        expect(document.querySelector('[data-answer-num="2"] .points').innerHTML)
           .toBe('37');
    });


    test('throws an Error when the answer does not exist', () => {
        expect(() => board.setAnswer(7, 'See? It changed', 13)).toThrow();
    });
});

describe('setErrors', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="col-lg-2 text-center blue-team team">
                <div class="fail">X</div>
                <div class="fail">X</div>
                <div class="fail">X</div>
            </div>
        `;
    });

    test('sets the correct number of errors to the chosen team', () => {
        board.setErrors(TEAMS.BLUE, -1);
        expect(document.querySelectorAll('.fail.active').length).toBe(0);
        board.setErrors(TEAMS.BLUE, 0);
        expect(document.querySelectorAll('.fail.active').length).toBe(0);
        board.setErrors(TEAMS.BLUE, 1);
        expect(document.querySelectorAll('.fail.active').length).toBe(1);
        board.setErrors(TEAMS.BLUE, 2);
        expect(document.querySelectorAll('.fail.active').length).toBe(2);
        board.setErrors(TEAMS.BLUE, 3);
        expect(document.querySelectorAll('.fail.active').length).toBe(3);
    });

    test('throws an Error when the team does not exist', () => {
        expect(() => board.setErrors('green', 2)).toThrow();
    })
});

describe('setPoints', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="col-lg-2 text-center blue-team team">
                <h3>SUMA: <span class="team-points">0</span></h3>
            </div>
        `;
    });

    test('sets the correct points value to the selected team', () => {
        board.setPoints(TEAMS.BLUE, 1337);
        expect(document.querySelector('.blue-team .team-points').innerHTML).toBe('1337');
    });

    test('throws an Error when the team does not exist', () => {
        expect(() => board.setPoints('green', 2)).toThrow();
    })
});

describe('setQuestion', () => {
    test('sets the question text', () => {
       document.body.innerHTML = '<h3 class="question">This question should be replaced</h3>';

       board.setQuestion('This replaces the question');

       expect(document.querySelector('.question').innerHTML)
           .toBe('This replaces the question');
    });
});

describe('removeDiacritics', () => {
    test('should remove Polish diacritics from text', () => {
        let testInput = 'zażółć gęślą jaźń';
        expect(board.removeDiacritics(testInput)).toBe('zazolc gesla jazn');
    });
});

describe('removeUnusedAnswerFieldsForQuestion', () => {
    test('should show one row for answer', () => {

        document.body.innerHTML = `
        <li data-answer-num="1">
            <span class="number">1.</span>
            <span class="text">This will change</span>
            <span class="points">42</span>
        </li>
        <li data-answer-num="2">
            <span class="number">2.</span>
            <span class="text">This will not</span>
            <span class="points">37</span>
        </li>
        `;

        board.manageAnswerFields(1);

        expect(document.querySelector('[data-answer-num="1"]') !== undefined)
        .toBe(true);
        expect(document.querySelector('[data-answer-num="2"]').style.display).toBe('none');
    });
});

describe('clearBoard', () => {
    test('should remove words from answer board rows', () => {
        document.body.innerHTML = `
        <li data-answer-num="1">
            <span class="number">1.</span>
            <span class="text">This will change</span>
            <span class="points">42</span>
        </li>
        <li data-answer-num="2">
            <span class="number">1.</span>
            <span class="text">This will change</span>
            <span class="points">42</span>
        </li>`

        board.clearBoard();
        const elements = document.querySelectorAll('[data-answer-num]');

        expect(elements.item(0).querySelector('span.text').innerHTML)
        .toBe('... ... ... ... ... ... ... ... ... ... ... ... ...');
        expect(elements.item(0).querySelector('span.points').innerHTML)
        .toBe('0');

        expect(elements.item(1).querySelector('span.text').innerHTML)
        .toBe('... ... ... ... ... ... ... ... ... ... ... ... ...');
        expect(elements.item(1).querySelector('span.points').innerHTML)
        .toBe('0');
    });
});

describe('finishGame', () => {
    test('show winner team name on board', () => {
        document.body.innerHTML = `<h3 class="winner"></h3>`
        board.finishGame(TEAMS.BLUE); 
        const winnerElement = document.querySelector('.winner');
        expect(winnerElement.innerHTML).toBe(`Wygrala druzyna ${TEAMS.BLUE}`)
    });
});
