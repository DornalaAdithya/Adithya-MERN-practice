/*
Movie Streaming Platform
You are working on a movie recommendation system.
Tasks:
    
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
let scifi=movies.filter((movie) => movie.genre==="Sci-Fi");
console.log(scifi);

//2. map() to return:"Inception (8.8)"
let movie1=movies.map((movie) => {
    return `${movie.title}  (${movie.rating})`;
})
console.log(movie1);

//3. reduce() to find average movie rating
let avgMovieRating=movies.reduce((acc,movie) => acc+=movie.rating,0);
console.log(avgMovieRating/movies.length);

//4. find() movie "Joker"
let movie2=movies.find((movie) => movie.title==="Joker");
console.log(movie2);

//5. findIndex() of "Avengers"
let movie3=movies.findIndex((movie) => movie.title==="Avengers");
console.log(movie3);