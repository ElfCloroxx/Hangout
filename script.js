// script.js

// Data for movie, recipe, music, and activity suggestions
const movieSuggestions = [
  "The Notebook (Romance)",
  "Inception (Sci-Fi Thriller)",
  "La La Land (Musical)",
  "500 Days of Summer (Romantic Comedy)",
  "The Grand Budapest Hotel (Comedy)",
];

const recipeSuggestions = [
  "Homemade Pizza",
  "Spaghetti Carbonara",
  "Sushi Rolls",
  "Baked Ziti",
  "Vegan Tacos",
];

const musicPlaylists = [
  "Chill Vibes - Lo-Fi Beats",
  "Romantic Evening Playlist",
  "Upbeat Indie Hits",
  "Jazz & Wine Night",
  "Love Songs - Acoustic Edition",
];

const activitySuggestions = [
  "Virtual Stargazing",
  "Online Pictionary",
  "Watch a Movie Together (via Netflix Party)",
  "Have a Virtual Dance Party",
  "Play 'Never Have I Ever' Online",
];

// Functions to show suggestions
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function showMovie() {
  const movie = getRandomItem(movieSuggestions);
  document.getElementById("movie-suggestion").innerText = `How about watching: ${movie}`;
}

function showRecipe() {
  const recipe = getRandomItem(recipeSuggestions);
  document.getElementById("recipe-suggestion").innerText = `Try cooking: ${recipe}`;
}

function showMusic() {
  const playlist = getRandomItem(musicPlaylists);
  document.getElementById("music-suggestion").innerText = `Listen to: ${playlist}`;
}

function showActivity() {
  const activity = getRandomItem(activitySuggestions);
  document.getElementById("activity-suggestion").innerText = `How about: ${activity}`;
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
