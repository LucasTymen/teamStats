const team = {
	_players: [
    {firstName:'tommy', lastName: 'guerrero', age: 56, sport:'skateboard'},
    {firstName:'tony', lastName: 'hawk', age: 54, sport:'skateboard'},
    {firstName: 'Antoine', lastName: 'Dupont', age: 26, sport:'rugby'},
    {firstName:'Cyril', lastName: 'Baille', age: 29, sport:'rugby'},
    {firstName:'Nicolas', lastName:'Tournat', age: 27, sport:'handball'},
    {firstName:'Nick', lastName:'Suzuki', age: 23, sport:'ice hockey'}
    ],
  _games: [{game:'ice hockey',opponent:[], teamPoints:0, opponentPoints:0},{game:'rugby',opponent:[], teamPoints:0, opponentPoints:0},{game:'handball',opponent:[], teamPoints:0, opponentPoints:0},{game:'skateboard',opponent:[], teamPoints:0, opponentPoints:0}],
_games: ['ice hockey','rugby','handball','skateboard']
};

console.log(team._players)
