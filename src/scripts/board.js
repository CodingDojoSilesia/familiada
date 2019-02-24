const answerFieldFill = '... ... ... ... ... ... ... ... ... ... ... ... ...';

/**
 * @param {int} number
 * @param {string} text
 * @param {int} points
 */
function setAnswer(number, text, points) {
    const textContainer = document.querySelector(`[data-answer-num="${number}"] .text`);
    const pointsContainer = document.querySelector(`[data-answer-num="${number}"] .points`);

    textContainer.innerHTML = fillAnswerField(text);
    pointsContainer.innerHTML = points;
}

/**
 * @param {string} text
 * @returns {string}
 */
function fillAnswerField(text) {
    const fillLength = answerFieldFill.length;

    if (fillLength < text.length) {
        return text.substring(0, text.length - 3) + '...';
    } else {
        return text + answerFieldFill.substring(text.length);
    }
}

/**
 * @param {TEAMS} team
 * @param {int} points
 */
function setPoints(team, points) {
    document.querySelector(`.${team}-team .team-points`).innerHTML = points.toString();
}

/**
 * @param {TEAMS} team
 * @param {int} errorCnt
 */
function setErrors(team, errorCnt) {
    const errorIndicators = document.querySelectorAll(`.${team}-team .fail`);

    for (let i = 0; i < errorIndicators.length; i++) {
        if (i < errorCnt) {
            errorIndicators[i].className = 'fail active';
        } else {
            errorIndicators[i].className = 'fail';
        }
    }
}

/**
 * @param {string} text
 */
function setQuestion(text) {
    document.querySelector('.question').innerHTML = text;
}

module.exports = {
    setAnswer,
    fillAnswerField,
    setPoints,
    setErrors,
    setQuestion,
};
