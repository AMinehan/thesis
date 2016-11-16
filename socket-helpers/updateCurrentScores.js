// helper function for dropFlagHandler and openSpaceHandler
// update the score of a specific user in the currrentScores when there is change;
module.exports = function(currentScores, scoreChange) {
  for(var i = 0; i < currentScores.length; i++) {
  	if (currentScores[i].id === scoreChange.id) {
  	  currentScores[i].scoreChange += scoreChange.scoreChange;
  	  break;
  	}
  }
}