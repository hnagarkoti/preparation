class Tennis {
    constructor(player1, player2){
        this.players = [player1, player2];
        this.possibleScores = ["Love", "10", "15", "30", "40"]
        this.scores = [[this.possibleScores[0], this.possibleScores[0]]]
    }

    addPoint(player){

        const playerIndex = this.players.indexOf(player);
        const ongoingGame = this.scores.length - 1;
        if(ongoingGame <= 3) {
            const prevScore = this.scores[ongoingGame];
            prevScore[ongoingGame] = prevScore[playerIndex] + 1;
            this.scores[ongoingGame] = [...prevScore]
        }
    }
    getCurrentStats(){
        const player1 = this.players[0];
        const player2 = this.players[1];
        const ongoingGame = this.scores.length - 1;
        if(ongoingGame <= 3){
            return `${player1} having score: ${this.scores[ongoingGame][0]} and ${player2} is at score of : ${this.scores[ongoingGame][1]}`;
        } else {
            return `Game is Over`;
        }
    }
}

// 10-0
// 10-10
// 15-10
// 30-10
// 30-20
// 30-30

const a = new Tennis("Rohan", "Mohan");
a.addPoint("Rohan");
a.addPoint("Mohan");
a.getCurrentStats();