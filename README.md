Coding Dojo Silesia: Familiada Kata
===================================

**TODO BEFORE PUBLISHING:**
* change the repo name in package.json

Welcome to A'th edition of Coding Dojo Silesia. Your task is to implement a simulation
of a [polish version of Family Feud TV game show](https://en.wikipedia.org/wiki/Familiada).
We provided a simple boilerplate in ES with a HTML version of the interface, but you
can implement your own GUI if you choose too. Just remember, this is a kata, we care about
quality of your code and value simplicity over complexity.

Please read the whole description before you start working.

### The rules
1. There are two teams, red and blue.
1. First team to score 300 points wins, we do not implement the finale part.
1. First team to play the round is chosen at random.
1. The points in round 4 are doubled. Starting round 5 the points are tripled.
1. Each round consists of one question, which has several answers.
1. The answers points vary on their previously surveyed popularity.
1. You can find the questions and answers in the [data.json](src/data.json) in the src 
   directory.

##### The round scenario
1. The selected team members give their answers to the question.
1. Each correct answer is uncovered on the board and the points sum is displayed on the
   board as well.
1. Each incorrect answer is counted as a mistake and is visible on the page as an X.
1. If the team guesses all the answer, the whole sum of points is awarded and the round
   ends.
1. If the team makes 3 mistakes, the opposite team can give 1 answer.
   * If the answer is correct, the team steal all the awarded points from the board.
   * Otherwise, the team that was originally playing the round gets these points.
   * In both cases the round ends as well.

### The twist
TODO: Describe the Web Speech API

### The manual
##### Installation
1. Be sure you have your node.js updated. The use of [n](https://github.com/tj/n) 
   is advised. Just be sure to restart your terminal, should you change the node version.
1. `npm install`
1. `npm start`

