//A class to store a match
//A collection of matches is a round of a tournament
//A collection of rounds is a tournament

//place holder, technically match should never be called with no args
function match() {
    this.player1 = new Participant(); //this is just here for the prototype function, players should be passed into a new match as arguments
    this.player2 = new Participant();
    this.p1Wins = 0;
    this.p2Wins = 0;
    this.draws = 0;
}

//The real match function, which pairs two players
function match(playerA, playerB) {
    this.player1 = playerA; //should probably check that the incoming argument is of type Participant
    this.player2 = playerB;
    this.p1Wins = 0;
    this.p2Wins = 0;
    this.draws = 0;
}