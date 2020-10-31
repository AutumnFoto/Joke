import '../styles/main.scss';
import axios from 'axios';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    const thisJoke = response.data;
    resolve(thisJoke);
  }).catch((error) => reject(error));
});

$('body').on('click', '#joke-btn', (e) => {
  e.stopImmediatePropagation();
  getJoke().then((response) => {
    const data = response;
    $('#joke-display').html(data.setup);
    $('#punchline-display').hide();
    $('#punchline-display').html(data.punchline);
  });
});

$('body').on('click', '#punchline-btn', (e) => {
  e.stopImmediatePropagation();
  $('#punchline-display').show();
});

const init = () => {
  $('#app').html("<div id = 'joke-div'><a href='#' id='joke-btn' class='btn btn-primary'>Get Joke</a></div><div id= 'punchline-div'></div> <a href='#' id='punchline-btn' class='btn btn-primary'>Punchline</a><div id = 'joke-display'></div><div id= 'punchline-display'></div>");
  console.log('YOU ARE UP AND RUNNING!');
};

init();
