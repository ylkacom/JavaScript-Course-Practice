"use strict";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
// console.log(numberOfFilms);
// let lastFilm = prompt("Один из последних просмотренных фильмов?");
// let raiting = prompt("'На сколько оцените его?");
// let lastFilmTwo = prompt("Один из последних просмотренных фильмов?");
// let raitingTwo = prompt("'На сколько оцените его?");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// personalMovieDB[`movies`][0] = `${lastFilm}: ${raiting}`;
// personalMovieDB[`movies`][1] = `${lastFilmTwo}: ${raitingTwo}`;

//  console.log(personalMovieDB);

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?"),
    raiting = prompt("'На сколько оцените его?"),
    lastFilmTwo = prompt("Один из последних просмотренных фильмов?"),
    raitingTwo = prompt("'На сколько оцените его?");

personalMovieDB.movies[lastFilm] = raiting;
personalMovieDB.movies[lastFilmTwo] = raitingTwo;

console.log(personalMovieDB);