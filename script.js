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
  document.getElementById("activity-suggestion").innerText = `We should play: ${activity}`;
}

// Trivia Game - Romantic Date Guessing
function checkTrivia() {
  const userDate = document.getElementById("anniversary").value;
  const correctDate = "2021-08-15"; // Replace with your actual date
  const result = document.getElementById("trivia-result");

  if (userDate === correctDate) {
    result.classList.remove("error");
    result.innerText = "You got it right! 🎉 That was our special day!";
  } else {
    result.classList.add("error");
    result.innerText = "Oops! Try again. 💖";
  }
}

// Event Listeners
document.getElementById("movie-btn").addEventListener("click", showMovie);
document.getElementById("recipe-btn").addEventListener("click", showRecipe);
document.getElementById("music-btn").addEventListener("click", showMusic);
document.getElementById("activity-btn").addEventListener("click", showActivity);
document.getElementById("submit-trivia").addEventListener("click", checkTrivia);
