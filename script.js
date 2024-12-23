// script.js

// Data for movie, recipe, music, and activity suggestions
const movieSuggestions = [
  "DANDADAN",
  "Suzume",
  "Evangelion",
  "Gurren Laggan",
  "I Want to eat your pancreas",
];

const recipeSuggestions = [
  "Shakshuka",
  "CHICKI RAMEN",
  "Summer rolls",
  "TACOS",
  "CHILLI GARLIC BEEF ",
];

const musicPlaylists = [
  "Chill Vibes",
  " Ash Playlist",
  " H Playlist ",
  "J A Z Z ",
  "D E F T O N E S",
];

const activitySuggestions = [
  "TFT",
  "RIVALS",
  "Watch a Movie Together",
  "Watch ANIME",
  "Play a NEW game",
];

// Functions to show suggestions
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function showMovie() {
  const movie = getRandomItem(movieSuggestions);
  document.getElementById("movie-suggestion").innerText = `Let's watch: ${movie}`;
}

function showRecipe() {
  const recipe = getRandomItem(recipeSuggestions);
  document.getElementById("recipe-suggestion").innerText = `WE COCK? WE COOK: ${recipe}`;
}

function showMusic() {
  const playlist = getRandomItem(musicPlaylists);
  document.getElementById("music-suggestion").innerText = `PLAY: ${playlist}`;
}

function showActivity() {
  const activity = getRandomItem(activitySuggestions);
  document.getElementById("activity-suggestion").innerText = `We should : ${activity}`;
}

  }
}

// Event Listeners
document.getElementById("movie-btn").addEventListener("click", showMovie);
document.getElementById("recipe-btn").addEventListener("click", showRecipe);
document.getElementById("music-btn").addEventListener("click", showMusic);
document.getElementById("activity-btn").addEventListener("click", showActivity);

