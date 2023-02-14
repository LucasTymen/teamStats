const team = {
	_players: [
    {firstName:'tommy', lastName:'guerrero', age: 56, sport:'skateboard'},
    {firstName:'Nicolas', lastName:'Tournat', age: 27, sport:'handball'},
    {firstName:'Nick', lastName:'Suzuki', age: 23, sport:'ice hockey'},
    {firstName:'tony', lastName:'hawk', age: 54, sport:'skateboard'},
    {firstName:'Antoine', lastName:'Dupont', age: 26, sport:'rugby'},
    {firstName:'Cyril', lastName:'Baille', age: 29, sport:'rugby'},
    ],
  _games: [
    {game:'ice hockey',opponent:'canadiens of Monreal', teamPoints:37, opponentPoints:230},
    {game:'rugby',opponent:'stade Toulousain', teamPoints:64, opponentPoints:86},
    {game:'handball',opponent:'les nouveaux mutants', teamPoints:52, opponentPoints:12},
    {game:'skateboard',opponent:'Monster team', teamPoints:14, opponentPoints:9}
    ],

    get players() {
      return this._players;
     },
    get games() {
      return this._games
     },
    addPlayer (newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
      this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players );
team.addGame('Titans', 100, 98);
console.log(team.games);
