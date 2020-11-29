

function isOverBudget(counter, leagues, budget) {
    return counter + parseInt(leagues.price) > budget ? true: false;
}


// takes a number represented by budget and returns only what the user can afford
function leaguesInBudget(leagues, budget){
    let counter = 0;
    let newLeagues = [];
  
  for(let i = 0; counter <= budget || i === leagues.length; i++) {
      if(isOverBudget(counter, leagues[i], budget)) break;

      counter+= parseInt(leagues[i].price);
      newLeagues.push(leagues[i]);
  }

    return newLeagues;
}

module.exports = leaguesInBudget;