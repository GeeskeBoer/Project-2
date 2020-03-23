console.log("Werkt dit?");
const movieTitle = movies.map(movie => movie.Title);

//for (let x = 0; x < movies.length; x++) {
//Movie NAME
//    const movieName = document.createElement("li");
//    movieName.innerHTML = movies[x].Title;
//    const listName = document.getElementById("filmPlaatjes");
//    listName.appendChild(movieName);

//function addMoviesToDom() {
//  for (let x = 0; x < movies.length; x++) {
//    //Movie NAME
//    const movieName = document.createElement("img");
//    img.scr = movies[x].Poster;
//    const listName = document.getElementById("filmPlaatjes");
//    listName.appendChild(movieName);
//  }
//}
//
//
//
//
//

function addMoviesToDom() {
  movies.forEach(function(movie) {
    let img = document.createElement("img");
    img.src = movie.Poster;
    const listName = document.getElementById("filmplaatjes");
    listName.appendChild(img);
  });
}
addMoviesToDom();

// Per buttonsoort filter gemaakt
//5x hetzelfde dus indien tijd over is stukkie korter schrijven
const recent = document.getElementById("recent");
const avenger = document.getElementById("avenger");
const xmen = document.getElementById("xmen");
const princess = document.getElementById("princess");
const batman = document.getElementById("batman");

//Als ik klik op button
//Dom legen
//Dom vullen met img van de gekozen categorie
recent.addEventListener("click", function() {
  document.getElementById("filmplaatjes").innerHTML = "";
});
xmen.addEventListener("click", function() {
  document.getElementById("filmplaatjes").innerHTML = "";
});
princess.addEventListener("click", function() {
  document.getElementById("filmplaatjes").innerHTML = "";
});
batman.addEventListener("click", function() {
  document.getElementById("filmplaatjes").innerHTML = "";
});
avenger.addEventListener("click", function() {
  document.getElementById("filmplaatjes").innerHTML = "";
});

const addmovieRecentToDom = function addmovieRecentToDom() {
  const movieRecent = movies.filter(name => parseInt(name.Year) > 2013);
  recent.forEach(function(movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
};
const addmovieFilterAvengersToDom = function addmovieFiltersAvengersToDom() {
  const movieFilterAvengers = movies.filter(name =>
    name.Title.includes("Avengers")
  );
  movieFilterAvengers.forEach(function(movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
};
const addmovieFilterXmenToDom = function addmovieFiltersXmenToDom() {
  const movieFilterXmen = movies.filter(name => name.Title.includes("X-men"));
  movieFilterXmen.forEach(function(movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
};
const addmovieFilterPrincessToDom = function addmovieFiltersPrincessToDom() {
  const movieFilterPrincess = movies.filter(name =>
    name.Title.includes("Princess")
  );
  movieFilterPrincess.forEach(function(movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
};
const addmovieFilterBatmanToDom = function addmovieFiltersBatmanToDom() {
  const movieFilterBatman = movies.filter(name =>
    name.Title.includes("Batman")
  );
  movieFilterBatman.forEach(function(movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
};
