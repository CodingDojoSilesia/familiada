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
        const answer = this.resolvePlayerAnswer(playerAnswer);
        const currentTeam = this.getCurrentTeam();
        
        switch(answer.status) { 
            case 'goodAnswer': { 
               this.round.setBoardAnswer(result, this);
               break; 
            } 
            case 'badAnswer': { 
               this.round.setBoardError(currentTeam, this);
               break; 
            }
            default: { 
               throw new Error('unresolved strategy!');
            } 
        }
    }

    resolvePlayerAnswer(playerAnswer) {

        const answer =  this.getRound().getQuestion().getAnswers().find(answer => {
            return answer.ans.toLowerCase() === board.removeDiacritics(playerAnswer);
        });

        return (answer !== undefined) ? { answer, status: true} : { answer: null, status: false};
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
