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
        this.round = new Round(this.questionsStore.getRandomQuestion());
        this.setRandomTeam();
    }

    handlePlayerAnswer(playerAnswer) {
        const result = this.resolvePlayerAnswer(playerAnswer);
        
        const currentTeam = this.getCurrentTeam();
        
        if (result &&
            currentTeam.getErrors() < 3 &&
            this.round.getStatus() === 'default'
        ) {
            this.round.setBoardAnswer(result);
        } else {
            currentTeam.addError();
            this.round.setError(currentTeam);
        }

        if (this.round.checkFinish()) {
            // @TODO clear board, add points to team
            this.round = new Round(this.questionsStore.getRandomQuestion());
            return;
        }
        
        if (currentTeam.getErrors() === 3) {
            this.switchCurrentTeam();
        }

        return;
    }

    resolvePlayerAnswer(playerAnswer) {

        const result =  this.getRound().getQuestion().getAnswers().find(answer => {
            return answer.ans.toLowerCase() === board.removeDiacritics(playerAnswer);
        });

        return (result !== undefined) ? result : false;
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
}
