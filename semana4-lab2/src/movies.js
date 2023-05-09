// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
    let todoslosdirectores = movies.map((movie) => movie.director )

    let directoresFilktrados = todoslosdirectores.filter((filtrado, index) => {
    return todoslosdirectores.indexOf(filtrado) === index;
    
})
console.log(directoresFilktrados);
    return directoresFilktrados
}

getAllDirectors(movies)
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) =>{
    let peliculaSteven = movies.filter((pelicula) => {
        return pelicula.director === "Steven Spielberg" && pelicula.genre.includes("Drama")
    })
    console.table(peliculaSteven)
    return peliculaSteven;
}
howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) => {
    let AvargeFinal = movies.reduce((acumulador,ScoreTotal)=>{
        if(ScoreTotal.score){
            return acumulador + ScoreTotal.score
        }
        else{ return acumulador}
        
    },0 )
    let average = (AvargeFinal/movies.length).toFixed(2)
    console.log(average);
    return average
}
scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) =>{
    let scoreDrama = movies.filter((puntaje)=> {
        return puntaje.genre.includes("Drama")
    })
    console.log(scoresAverage(scoreDrama))
    return scoresAverage(scoreDrama)
}
dramaMoviesScore(movies)
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear=(movies)=> {
    let TitulosAños = movies.map((peliculas)=> peliculas )
    TitulosAños.sort((peliA, PeliB) => {
        if(peliA.year > PeliB.year) return peliA.year - PeliB.year
        if(peliA.year < PeliB.year) return peliA.year - PeliB.year
        else{return peliA.title.localeCompare(PeliB.title)}
    })

    console.log(TitulosAños);
    return TitulosAños
}
orderByYear(movies)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies)=> {
   
    return movies.map((titulo)=> titulo.title).sort().slice(0 , 20);
    
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
