import Round from "./round";
import TEAMS from '../teams';
import board from '../board';

export default class Game {

    /*
    * @param teams = []
    * @param questions QuestionStore
    */
    constructor(teams, questionsStore) {
        this.teams = teams;
        this.questionsStore = questionsStore;
        this.roundCount = 1;
        this.round = new Round(this.questionsStore.getRandomQuestion());
        this.setRandomTeam();
    }

    startNewRound() {
        this.switchCurrentTeam();
        this.roundCount++;
        this.round = new Round(this.questionsStore.getRandomQuestion());
    }
    /**
     * @param {string} playerAnswer 
     */
    handlePlayerAnswer(playerAnswer) {
        const result = this.resolvePlayerAnswer(playerAnswer);
        const currentTeam = this.getCurrentTeam();

        switch(result.status) { 
            case true: { 
               this.round.setBoardAnswer(result.answer, this);
               break; 
            } 
            case false: { 
               this.round.setBoardError(currentTeam, this);
               break; 
            }
            default: { 
               throw new Error('Result have only true of false status');
            } 
        }
    }

    resolvePlayerAnswer(playerAnswer) {

        const answer = this.round.getQuestion().getAnswers().find(answer => {
            return answer.ans.toLowerCase() === board.removeDiacritics(playerAnswer);
        });

        return (answer !== undefined) ? { answer, status: true} : { answer: null, status: false};
    }

    getQuestionsStore() {
        return this.questionsStore;
    }

    switchCurrentTeam() {
        this.setCurrentTeam(this.teams.find(team => team.getName() !== this.currentTeam).name)
    }

    setRandomTeam() {
        this.setCurrentTeam(this.teams[Math.round(Math.random())].name);
    }

    setCurrentTeam(teamName) {
        this.currentTeam = teamName;
    }

    getCurrentTeam() {
        return this.teams.find(team => team.getName() === this.currentTeam);
    }

    getRound() {
        return this.round;
    }

    getTeams() {
        return this.teams;
    }

    getRoundCount() {
        return this.roundCount;
    }
}
