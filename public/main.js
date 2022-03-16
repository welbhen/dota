// information to reach API
const url = 'https://api.opendota.com/api/';
const queryParams = 'players/';

// selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  try{
    const playerQuery = inputField.value;
    const endPoint = url + queryParams + playerQuery;
    //console.log(endPoint);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
      //console.log("XHR.response: " + xhr.response);
        renderResponse(xhr.response);
      }
    };
    xhr.open('GET', endPoint);
    xhr.send();
  }catch(err){
    console.log("Error: " + err);
  }
}

// clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);