import Round from "./round";
import TEAMS from '../teams';

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

    setRandomTeam() {
        this.setCurrentTeam(this.teams[Math.round(Math.random())].name);
    }

    setCurrentTeam(teamName) {
        this.currentTeam = teamName;
    }

    getCurrentTeam() {
        return this.currentTeam;
    }

    getRound() {
        return this.round;
    }

    getTeams() {
        return this.teams;
    }
}
