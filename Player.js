//A player is a person who has signed up for a tournament
//When they go through registration, create a new player object in order to initialize them for the tournament instance at hand
//This way, you can change variables for the day like score, points, standings without editing their personal details

function Player() {
    Person.apply(this);
    //performance info
    this.points = 0;
    this.wins = 0;
    this.losses = 0;

    //pairing info
    this.matchWinPct = 0; //this player's match win percentage = wins / rounds played
    this.oppWinPct = 0; //opponent win percentage, calculated as opponent round wins divided by rounds the opponent has played
    this.gameWinPct = 0; //this player's game win percentage = games won / games played (there are multiple games in a match)
    this.dropped = 0; //if the player drops from the tournament, mark this as 1 to ignore this player in pair matching

    //infraction info
    this.playerWarnings = 0; //there are different kinds of infractions, so we might have to make them into objects and characterize them as an array
    //each time a new one is added, we want to check against rules for automatic game losses, DQs, etc.

}