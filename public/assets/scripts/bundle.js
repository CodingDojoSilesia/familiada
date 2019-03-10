/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: questions, default */
/***/ (function(module) {

eval("module.exports = {\"questions\":{\"Atrybut świętego Mikołaja?\":[null,{\"ans\":\"Worek\",\"lp\":1,\"points\":35},{\"ans\":\"Czapka\",\"lp\":2,\"points\":23},{\"ans\":\"Broda\",\"lp\":3,\"points\":20},{\"ans\":\"Dzwonek\",\"lp\":4,\"points\":8},{\"ans\":\"Renifery\",\"lp\":5,\"points\":7}],\"Co jest slodkie, a przy tym zdrowe?\":[null,{\"ans\":\"Miod\",\"lp\":1,\"points\":51},{\"ans\":\"Owoce\",\"lp\":2,\"points\":19},{\"ans\":\"Bakalie\",\"lp\":3,\"points\":19},{\"ans\":\"Syrop\",\"lp\":4,\"points\":11},{\"ans\":\"Pocalunek\",\"lp\":5,\"points\":9}],\"Co można mieć do drugiej osoby?\":[null,{\"ans\":\"Sprawe\",\"lp\":1,\"points\":24},{\"ans\":\"Prosbe\",\"lp\":2,\"points\":22},{\"ans\":\"Pretensje\",\"lp\":3,\"points\":19},{\"ans\":\"Zal\",\"lp\":4,\"points\":15},{\"ans\":\"Zaufanie\",\"lp\":5,\"points\":7},{\"ans\":\"Slabosc\",\"lp\":6,\"points\":6}],\"Co ryczy na pastwisku?\":[null,{\"ans\":\"Krowa\",\"lp\":1,\"points\":55},{\"ans\":\"Owca\",\"lp\":2,\"points\":23},{\"ans\":\"Kon\",\"lp\":3,\"points\":10},{\"ans\":\"Rolnik\",\"lp\":4,\"points\":1}],\"Co w gospodarstwie domowym zużywa się najszybciej?\":[null,{\"ans\":\"Jedzenie\",\"lp\":1,\"points\":26},{\"ans\":\"Proszek do prania\",\"lp\":2,\"points\":21},{\"ans\":\"Papier toaletowy\",\"lp\":3,\"points\":18},{\"ans\":\"Mydlo\",\"lp\":4,\"points\":16},{\"ans\":\"Pasta do zebow\",\"lp\":5,\"points\":10},{\"ans\":\"Plyn do zmywania\",\"lp\":6,\"points\":6}],\"Co wysysa krew?\":[null,{\"ans\":\"Pijawka\",\"lp\":1,\"points\":44},{\"ans\":\"Komar\",\"lp\":2,\"points\":35},{\"ans\":\"Wampir\",\"lp\":3,\"points\":16},{\"ans\":\"Strzykawka\",\"lp\":4,\"points\":8}],\"Co zabieramy ze sobą na piknik?\":[null,{\"ans\":\"Koc\",\"lp\":1,\"points\":28},{\"ans\":\"Jedzenie\",\"lp\":2,\"points\":24},{\"ans\":\"Napoje\",\"lp\":3,\"points\":19},{\"ans\":\"Naczynia\",\"lp\":4,\"points\":10},{\"ans\":\"Grill\",\"lp\":5,\"points\":8},{\"ans\":\"Gry\",\"lp\":6,\"points\":7}],\"Co zawiera nota biograficzna w encyklopedii?\":[null,{\"ans\":\"Data urodzin\",\"lp\":1,\"points\":30},{\"ans\":\"Dziela\",\"lp\":2,\"points\":21},{\"ans\":\"Imie i nazwisko\",\"lp\":3,\"points\":18},{\"ans\":\"Miejsce urodzenia\",\"lp\":4,\"points\":11},{\"ans\":\"Data smierci\",\"lp\":5,\"points\":9},{\"ans\":\"Fakty z zycia\",\"lp\":6,\"points\":6}],\"Czego zazwyczaj nie reklamuje sie w telewizji i radiu?\":[null,{\"ans\":\"Chleba\",\"lp\":1,\"points\":28},{\"ans\":\"Papierosow\",\"lp\":2,\"points\":17},{\"ans\":\"Cukru\",\"lp\":3,\"points\":16},{\"ans\":\"Maki\",\"lp\":4,\"points\":12},{\"ans\":\"Warzyw\",\"lp\":5,\"points\":9},{\"ans\":\"Alkoholu\",\"lp\":6,\"points\":8}],\"Film który zaczyna się od słowa 'Dzień'?\":[null,{\"ans\":\"Dzien Swira\",\"lp\":1,\"points\":28},{\"ans\":\"Dzien niepodleglosci\",\"lp\":2,\"points\":21},{\"ans\":\"Dzien Swistaka\",\"lp\":3,\"points\":18},{\"ans\":\"Dzien Szakala\",\"lp\":4,\"points\":10},{\"ans\":\"Dzien Ojca\",\"lp\":5,\"points\":8},{\"ans\":\"Dzien Proby\",\"lp\":6,\"points\":5}],\"Jadalna jasna bulwa?\":[null,{\"ans\":\"Rzepa\",\"lp\":1,\"points\":36},{\"ans\":\"Ziemniak\",\"lp\":2,\"points\":29},{\"ans\":\"Seler\",\"lp\":3,\"points\":25}],\"Jakie moce mają superbohaterowie?\":[null,{\"ans\":\"Latanie\",\"lp\":1,\"points\":23},{\"ans\":\"Niewidzialnosc\",\"lp\":2,\"points\":18},{\"ans\":\"Sila\",\"lp\":3,\"points\":17},{\"ans\":\"Teleportacja\",\"lp\":4,\"points\":13},{\"ans\":\"Czytanie w myslach\",\"lp\":5,\"points\":12},{\"ans\":\"Szybkosc\",\"lp\":6,\"points\":10}],\"Kogo i czego potrzebowalibyscie do nakrecenia filmu?\":[null,{\"ans\":\"Aktorow\",\"lp\":1,\"points\":27},{\"ans\":\"Rezysera\",\"lp\":2,\"points\":20},{\"ans\":\"Scenariusza\",\"lp\":3,\"points\":15},{\"ans\":\"Kamery\",\"lp\":4,\"points\":13},{\"ans\":\"Pieniedzy\",\"lp\":5,\"points\":11},{\"ans\":\"Kateringu\",\"lp\":6,\"points\":9}],\"Którego urządzenia elektrycznego używamy rano?\":[null,{\"ans\":\"Ekspres\",\"lp\":1,\"points\":26},{\"ans\":\"Toster\",\"lp\":2,\"points\":23},{\"ans\":\"Radio\",\"lp\":3,\"points\":19},{\"ans\":\"Maszynka do golenia\",\"lp\":4,\"points\":18},{\"ans\":\"Lodowka\",\"lp\":5,\"points\":7},{\"ans\":\"Szczoteczka elektryczna\",\"lp\":6,\"points\":6}],\"Ozdoba meskiej szyi?\":[null,{\"ans\":\"Krawat\",\"lp\":1,\"points\":36},{\"ans\":\"Muszka\",\"lp\":2,\"points\":27},{\"ans\":\"Szalik\",\"lp\":3,\"points\":15},{\"ans\":\"Apaszka\",\"lp\":4,\"points\":10},{\"ans\":\"Lancuszek\",\"lp\":5,\"points\":6}],\"Po co w coś dmuchamy?\":[null,{\"ans\":\"Zgasic\",\"lp\":1,\"points\":46},{\"ans\":\"Ostudzic\",\"lp\":2,\"points\":30},{\"ans\":\"Napompowac\",\"lp\":3,\"points\":23}],\"Popularny nadmorski kurort?\":[null,{\"ans\":\"Ustka\",\"lp\":1,\"points\":28},{\"ans\":\"Wladyslawowow\",\"lp\":2,\"points\":20},{\"ans\":\"Hel\",\"lp\":3,\"points\":17},{\"ans\":\"Chalupy\",\"lp\":4,\"points\":17},{\"ans\":\"Kolobrzeg\",\"lp\":5,\"points\":9},{\"ans\":\"Sopot\",\"lp\":6,\"points\":6}],\"Potocznie ukrasc?\":[null,{\"ans\":\"Gwizdnac\",\"lp\":1,\"points\":29},{\"ans\":\"Buchnac\",\"lp\":2,\"points\":26},{\"ans\":\"Zwedzic\",\"lp\":3,\"points\":19},{\"ans\":\"Zakosic\",\"lp\":4,\"points\":13},{\"ans\":\"Podprowadzic\",\"lp\":5,\"points\":6}],\"Udawanie inaczje?\":[null,{\"ans\":\"Symulowanie\",\"lp\":1,\"points\":29},{\"ans\":\"Granie\",\"lp\":2,\"points\":26},{\"ans\":\"Pozorowanie\",\"lp\":3,\"points\":22},{\"ans\":\"Markowanie\",\"lp\":4,\"points\":10},{\"ans\":\"Parodiowanie\",\"lp\":5,\"points\":8}],\"Wymień najczęściej pieczone w Polsce ciasta?\":[null,{\"ans\":\"Szarlotka\",\"lp\":1,\"points\":24},{\"ans\":\"Sernik\",\"lp\":2,\"points\":22},{\"ans\":\"Drozdzowiec\",\"lp\":3,\"points\":21},{\"ans\":\"Makowiec\",\"lp\":4,\"points\":15},{\"ans\":\"Murzynek\",\"lp\":5,\"points\":8},{\"ans\":7,\"lp\":6}],\"Wymień rodzaje samolotów?\":[null,{\"ans\":\"Pasazerski\",\"lp\":1,\"points\":25},{\"ans\":\"Sportowy\",\"lp\":2,\"points\":24},{\"ans\":\"Mysliwski\",\"lp\":3,\"points\":22},{\"ans\":\"Bombowy\",\"lp\":4,\"points\":16},{\"ans\":\"Transportowy\",\"lp\":5,\"points\":6}],\"Wymień włoskie danie?\":[null,{\"ans\":\"Pomodoro\",\"lp\":1,\"points\":25},{\"ans\":\"Arancini\",\"lp\":2,\"points\":19},{\"ans\":\"Tiramisu\",\"lp\":3,\"points\":17},{\"ans\":\"Ricotta\",\"lp\":4,\"points\":10},{\"ans\":\"Gnocchi\",\"lp\":5,\"points\":6}],\"Wyraz który nie ma liczby pojedynczej?\":[null,{\"ans\":\"Drzwi\",\"lp\":1,\"points\":22},{\"ans\":\"Spodnie\",\"lp\":2,\"points\":20},{\"ans\":\"Nozyce\",\"lp\":3,\"points\":16},{\"ans\":\"Skrzypce\",\"lp\":4,\"points\":14},{\"ans\":\"Sanki\",\"lp\":5,\"points\":10},{\"ans\":\"Urodziny\",\"lp\":6,\"points\":8}]}};\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const answerFieldFill = '... ... ... ... ... ... ... ... ... ... ... ... ...';\n/**\n * @param {int} number\n * @param {string} text\n * @param {int} points\n */\n\nfunction setAnswer(number, text, points) {\n  if (!document.querySelector(`[data-answer-num=\"${number}\"]`)) {\n    throw new Error('The HTML for the answer does not exist, ' + 'make sure the question number you provided is in a 1-6 range');\n  }\n\n  const textContainer = document.querySelector(`[data-answer-num=\"${number}\"] .text`);\n  const pointsContainer = document.querySelector(`[data-answer-num=\"${number}\"] .points`);\n  textContainer.innerHTML = fillAnswerField(removeDiacritics(text));\n  pointsContainer.innerHTML = points;\n}\n/**\n * Add display none to unused rows\n * @param {int} answerLength \n */\n\n\nfunction manageAnswerFields(answerLength) {\n  const rowFields = document.querySelectorAll(`[data-answer-num]`);\n\n  for (let i = 1; i <= 6; i++) {\n    if (i > answerLength && rowFields.item(i - 1) !== null) {\n      rowFields.item(i - 1).style.display = 'none';\n    }\n  }\n}\n/**\n * @param {string} text\n * @returns {string}\n */\n\n\nfunction fillAnswerField(text) {\n  const fillLength = answerFieldFill.length;\n\n  if (fillLength < text.length) {\n    return text.substring(0, fillLength - 3) + '...';\n  } else {\n    return text + answerFieldFill.substring(text.length);\n  }\n}\n/**\n * @param {TEAMS} team\n * @param {int} points\n */\n\n\nfunction setPoints(team, points) {\n  const teamPointContainer = document.querySelector(`.${team}-team .team-points`);\n\n  if (!teamPointContainer) {\n    throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');\n  }\n\n  document.querySelector(`.${team}-team .team-points`).innerHTML = points.toString();\n}\n/**\n * @param {TEAMS} team\n * @param {int} errorCnt\n */\n\n\nfunction setErrors(team, errorCnt) {\n  const errorIndicators = document.querySelectorAll(`.${team}-team .fail`);\n\n  if (!errorIndicators.length) {\n    throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');\n  }\n\n  for (let i = 0; i < errorIndicators.length; i++) {\n    if (i < errorCnt) {\n      errorIndicators[i].className = 'fail active';\n    } else {\n      errorIndicators[i].className = 'fail';\n    }\n  }\n}\n/**\n * @param {string} text\n */\n\n\nfunction setQuestion(text) {\n  document.querySelector('.question').innerHTML = removeDiacritics(text);\n}\n/**\n * @param {string} input\n * @returns {string}\n */\n\n\nfunction removeDiacritics(input) {\n  return input.replace(/\\u0142/g, \"l\").normalize('NFKD').replace(/[^\\w\\s.-_\\/]/g, '');\n}\n/**\n * Clear game board\n */\n\n\nfunction clearBoard() {\n  const elements = document.querySelectorAll('[data-answer-num]');\n\n  for (let i = 0; i < elements.length; i++) {\n    elements.item(i).querySelector('span.text').innerHTML = answerFieldFill;\n    elements.item(i).querySelector('span.points').innerHTML = '0';\n  }\n}\n/**\n * @param {string} teamName \n */\n\n\nfunction finishGame(teamName) {\n  const winner = document.querySelector('.winner');\n  winner.innerHTML = `Wygrala druzyna ${teamName}`;\n  winner.style.display = 'block';\n}\n/**\n * @param {string} status \n */\n\n\nfunction recordButton(status) {\n  const button = document.querySelector('#recordButton');\n  status === 'start' ? button.className = 'rec' : button.className = 'notRec';\n}\n\nmodule.exports = {\n  setAnswer,\n  fillAnswerField,\n  setPoints,\n  setErrors,\n  setQuestion,\n  removeDiacritics,\n  manageAnswerFields,\n  clearBoard,\n  finishGame,\n  recordButton\n};\n\n//# sourceURL=webpack:///./src/scripts/board.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams */ \"./src/scripts/teams.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speech */ \"./src/scripts/speech.js\");\n/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_speech__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data.json */ \"./src/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../data.json */ \"./src/data.json\", 1);\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/game */ \"./src/scripts/model/game.js\");\n/* harmony import */ var _model_team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/team */ \"./src/scripts/model/team.js\");\n/* harmony import */ var _model_questionStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/questionStore */ \"./src/scripts/model/questionStore.js\");\n\n\n\n\n\n\n\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(1, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(2, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(3, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(4, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(5, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(6, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\nconst game = new _model_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"]([new _model_team__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE), new _model_team__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED)], new _model_questionStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_data_json__WEBPACK_IMPORTED_MODULE_3__[\"questions\"]));\n_speech__WEBPACK_IMPORTED_MODULE_2___default.a.loadGrammar(game.getRound().getQuestion().getAnswersWords());\n\ndocument.querySelector('.record').onclick = function () {\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.recordButton('start');\n  _speech__WEBPACK_IMPORTED_MODULE_2___default.a.start().then(result => {\n    game.handlePlayerAnswer(result[0][0].transcript);\n    _board__WEBPACK_IMPORTED_MODULE_1___default.a.recordButton('stop');\n  });\n};\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/model/answer.js":
/*!*************************************!*\
  !*** ./src/scripts/model/answer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Answer; });\nclass Answer {\n  constructor(answer) {\n    this.ans = answer.ans;\n    this.lp = answer.lp;\n    this.points = answer.points;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/model/answer.js?");

/***/ }),

/***/ "./src/scripts/model/game.js":
/*!***********************************!*\
  !*** ./src/scripts/model/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ \"./src/scripts/model/round.js\");\n/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teams */ \"./src/scripts/teams.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass Game {\n  /*\n  * @param teams = []\n  * @param questions QuestionStore\n  */\n  constructor(teams, questionsStore) {\n    this.teams = teams;\n    this.questionsStore = questionsStore;\n    this.roundCount = 1;\n    this.round = new _round__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.questionsStore.getRandomQuestion());\n    this.setRandomTeam();\n  }\n\n  startNewRound() {\n    this.switchCurrentTeam();\n    this.roundCount++;\n    this.round = new _round__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.questionsStore.getRandomQuestion());\n  }\n  /**\n   * @param {string} playerAnswer \n   */\n\n\n  handlePlayerAnswer(playerAnswer) {\n    const result = this.resolvePlayerAnswer(playerAnswer);\n    const currentTeam = this.getCurrentTeam();\n\n    switch (result.status) {\n      case true:\n        {\n          this.round.setBoardAnswer(result.answer, this);\n          break;\n        }\n\n      case false:\n        {\n          this.round.setBoardError(currentTeam, this);\n          break;\n        }\n\n      default:\n        {\n          throw new Error('Result have only true of false status');\n        }\n    }\n  }\n\n  resolvePlayerAnswer(playerAnswer) {\n    const answer = this.round.getQuestion().getAnswers().find(answer => {\n      return answer.ans.toLowerCase() === _board__WEBPACK_IMPORTED_MODULE_2___default.a.removeDiacritics(playerAnswer);\n    });\n    return answer !== undefined ? {\n      answer,\n      status: true\n    } : {\n      answer: null,\n      status: false\n    };\n  }\n\n  getQuestionsStore() {\n    return this.questionsStore;\n  }\n\n  switchCurrentTeam() {\n    this.setCurrentTeam(this.teams.find(team => team.getName() !== this.currentTeam).name);\n  }\n\n  setRandomTeam() {\n    this.setCurrentTeam(this.teams[Math.round(Math.random())].name);\n  }\n\n  setCurrentTeam(teamName) {\n    this.currentTeam = teamName;\n  }\n\n  getCurrentTeam() {\n    return this.teams.find(team => team.getName() === this.currentTeam);\n  }\n\n  getRound() {\n    return this.round;\n  }\n\n  getTeams() {\n    return this.teams;\n  }\n\n  getRoundCount() {\n    return this.roundCount;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/model/game.js?");

/***/ }),

/***/ "./src/scripts/model/question.js":
/*!***************************************!*\
  !*** ./src/scripts/model/question.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\nclass Question {\n  constructor(name, answers) {\n    this.name = name;\n    this.answers = answers.filter(answer => answer);\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  getAnswers() {\n    return this.answers;\n  }\n\n  getAnswersWords() {\n    return this.answers.map(answer => answer.ans);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/model/question.js?");

/***/ }),

/***/ "./src/scripts/model/questionStore.js":
/*!********************************************!*\
  !*** ./src/scripts/model/questionStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuestionStore; });\n/* harmony import */ var _model_answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/answer */ \"./src/scripts/model/answer.js\");\n/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/question */ \"./src/scripts/model/question.js\");\n\n\nclass QuestionStore {\n  constructor(questions) {\n    this.questions = this.parseQuestions(questions);\n  }\n\n  parseQuestions(questions) {\n    const titles = Object.keys(questions);\n    const answers = Object.values(questions);\n    const parsedQuestions = [];\n\n    for (let i = 0; i < answers.length; i++) {\n      const parsedAnswers = answers[i].filter(answer => answer).map(answer => new _model_answer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](answer));\n      parsedQuestions.push(new _model_question__WEBPACK_IMPORTED_MODULE_1__[\"default\"](titles[i], parsedAnswers));\n    }\n\n    return parsedQuestions;\n  }\n\n  getRandomQuestion() {\n    return this.questions[this.getRandomQuestionId()];\n  }\n\n  getRandomQuestionId() {\n    return Math.floor(Math.random() * (this.questions.length - 1 + 1) + 1) - 1;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/model/questionStore.js?");

/***/ }),

/***/ "./src/scripts/model/round.js":
/*!************************************!*\
  !*** ./src/scripts/model/round.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Round; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer */ \"./src/scripts/model/answer.js\");\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team */ \"./src/scripts/model/team.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/scripts/model/game.js\");\n/* harmony import */ var _roundStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roundStatus */ \"./src/scripts/roundStatus.js\");\n\n\n\n\n\n/**\n * Manage current question and board\n */\n\nclass Round {\n  constructor(question) {\n    this.right = 0;\n    this.status = _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DEFAULT;\n    this.points = 0;\n    this.question = question;\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.setQuestion(this.question.getName());\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.manageAnswerFields(this.getQuestion().getAnswers().length);\n  }\n  /**\n   * @param {Answer} answer \n   * @param {Game} game\n   */\n\n\n  setBoardAnswer(answer, game) {\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.setAnswer(answer.lp, answer.ans, answer.points);\n    this.right++;\n    this.points += answer.points;\n    if (this.checkFinish() || this.status === _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].STOLEN) this.finishRound(game);\n  }\n  /**\n   * @param {Team} team \n   * @param {Game} game\n   */\n\n\n  setBoardError(team, game) {\n    team.addError();\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.setErrors(team.getName(), team.getErrors());\n\n    if (this.status === _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].STOLEN) {\n      game.switchCurrentTeam();\n      game.getCurrentTeam().addPoints(this.points);\n      this.startNewRound(game);\n    }\n\n    if (team.getErrors() === 3) {\n      game.switchCurrentTeam();\n      this.status = _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].STOLEN;\n    }\n  }\n\n  checkFinish() {\n    return this.question.getAnswers().length === this.right;\n  }\n  /**\n   * @param {Team} team \n   * @param {Game} game \n   */\n\n\n  finishRound(game) {\n    if (game.getRoundCount() === 4) this.points * 2;\n    if (game.getRoundCount() === 5) this.points * 3;\n    game.getCurrentTeam().addPoints(this.points);\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.setPoints(game.getCurrentTeam().getName(), this.points);\n\n    if (game.getCurrentTeam().getPoints() >= 400) {\n      this.finishGame(game.getCurrentTeam().getName());\n      return;\n    }\n\n    this.startNewRound(game);\n  }\n  /**\n   * @param {Game} game \n   */\n\n\n  startNewRound(game) {\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.clearBoard();\n    game.startNewRound();\n  }\n  /**\n   * @param {string} teamName \n   */\n\n\n  finishGame(teamName) {\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.finishGame(teamName);\n  }\n\n  getQuestion() {\n    return this.question;\n  }\n\n  getPoints() {\n    return this.points;\n  }\n\n  getStatus() {\n    return this.status;\n  }\n\n  getRight() {\n    return this.right;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/model/round.js?");

/***/ }),

/***/ "./src/scripts/model/team.js":
/*!***********************************!*\
  !*** ./src/scripts/model/team.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Team; });\nclass Team {\n  constructor(name) {\n    this.name = name;\n    this.points = 0;\n    this.errors = 0;\n  }\n\n  addPoints(points) {\n    this.points += points;\n  }\n\n  addError() {\n    this.errors += 1;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  getErrors() {\n    return this.errors;\n  }\n\n  getPoints() {\n    return this.points;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/model/team.js?");

/***/ }),

/***/ "./src/scripts/roundStatus.js":
/*!************************************!*\
  !*** ./src/scripts/roundStatus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @enum {GAME_STATUS}\n */\nconst GAME_STATUS = {\n  DEFAULT: 'default',\n  STOLEN: 'stolen'\n};\nObject.freeze(GAME_STATUS);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GAME_STATUS);\n\n//# sourceURL=webpack:///./src/scripts/roundStatus.js?");

/***/ }),

/***/ "./src/scripts/speech.js":
/*!*******************************!*\
  !*** ./src/scripts/speech.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\nlet SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;\nlet SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;\nlet recognition = new SpeechRecognition();\nlet speechRecognitionList = new SpeechGrammarList();\n\nfunction loadGrammar(words) {\n  let grammar = `#JSGF V1.0; grammar colors; public <color> = ${words.join(' | ')} ;`;\n  speechRecognitionList.addFromString(grammar, 1);\n  recognition.grammars = speechRecognitionList;\n  recognition.lang = 'pl-PL';\n  recognition.interimResults = false;\n  recognition.maxAlternatives = 10;\n}\n\nfunction start() {\n  return new Promise((resolve, reject) => {\n    recognition.onspeechend = () => {\n      recognition.stop();\n    };\n\n    recognition.onnomatch = () => {\n      reject('No match');\n    };\n\n    recognition.onerror = event => {\n      reject('Error occurred in recognition: ' + event.error);\n    };\n\n    recognition.onresult = event => {\n      resolve(event.results);\n    };\n\n    recognition.start();\n  });\n}\n\nmodule.exports = {\n  loadGrammar,\n  start\n};\n\n//# sourceURL=webpack:///./src/scripts/speech.js?");

/***/ }),

/***/ "./src/scripts/teams.js":
/*!******************************!*\
  !*** ./src/scripts/teams.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @enum {TEAMS}\n */\nconst TEAMS = {\n  BLUE: 'blue',\n  RED: 'red'\n};\nObject.freeze(TEAMS);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TEAMS);\n\n//# sourceURL=webpack:///./src/scripts/teams.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });