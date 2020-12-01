

function isOverBudget(counter, leagues, budget) {
    return counter + parseInt(leagues.price) > budget ? true: false;
}


// takes a number represented by budget and returns only what the user can afford
function getLeaguesInBudget(leagues, budget){
    let counter = 0;
    let newLeagues = [];
  
  for(let i = 0; counter <= budget; i++) {
      if(i === leagues.length || isOverBudget(counter, leagues[i], budget)) break;

      counter+= parseInt(leagues[i].price);
      newLeagues.push(leagues[i]);
  }

    return newLeagues;
}

module.exports = getLeaguesInBudget;