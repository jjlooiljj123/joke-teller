

const button = document.getElementById("button");
const audioElement = document.getElementById("audio");



//disable/enable button
function toggleButton(){
  button.disabled = !button.disabled;
}

// passing joke to voiceRss api
function tellMe(joke) {
  tellJoke(joke);
}

// get jokes from joke api
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
    toggleButton();
  } catch (error) {
    console.log("error: " + console.error());
  }
}

// event listerner
button.addEventListener("click", getJokes);
audioElement.addEventListener('ended', toggleButton)