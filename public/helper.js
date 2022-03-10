const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  const answer = JSON.parse(JSON.stringify(res));
  const name = answer.profile.personaname;
  const id = answer.profile.account_id;
  const steamId = answer.profile.steamid;
  const soloMMR = answer.solo_competitive_rank;
  const rank = answer.leaderboard_rank;
  const avatar = answer.profile.avatar;
  
  /*
  let list = [name, steamId, soloMMR, rank];
  list = list.join(" ");
  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>The player data is:</p><ol>${list}</ol>`;
  */
  
  responseField.innerHTML = `<p align="justify">
  							 <img src="${avatar}" id="pic">
  							 ID: 	${id}
  							 <br>
  							 Name:		${name}
  							 <br>
  							 Steam ID: 	${steamId}
  							 <br>
  							 Solo MMR: 	${soloMMR}
  							 <br>
  							 Rank: 		${rank}							 
  							 </p>`;
  
  return;
}
// ##################### BELLOW IS NOT USED:

// Renders response before it is modified
const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res;
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // Creating an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for(let key in response){
    rawJson[key] = response[key];
  }
  // Converting JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
}