function tournamentWinner(competitions, results) {
	//competitions[i] = [homeTeam, awayTeam]
	  //results[i] = ([1] === homeTeam wins ) || ([0] === awayteam wins)

	//catalog results of tourney by 'team name'
	//calculate how many wins each team has
	let catalog = {};
	let currentWinner = '';
	for(let i = 0; i < competitions.length; i++){

		let homeTeam = competitions[i][0];
		let awayTeam = competitions[i][1];
		let winner = '';
		winner = results[i] === 1 ? homeTeam : awayTeam;
		competitions[winner] = competitions[winner] + 3 || 3;

		currentWinner = (competitions[winner] > competitions[currentWinner] ? winner : currentWinner) || winner;
	}

	//return the team with the most wins
	return currentWinner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;