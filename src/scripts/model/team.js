export default class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.errors = 0;
    }

    addPoints(points) {
        this.points += points;
    }

    addError() {
        this.errors += 1;
    }
}