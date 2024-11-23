function solve(dataArr) {
    let movies = [];
    const keys = ['name', 'director', 'date']

    for (let data of dataArr) {
        if (data.includes('addMovie')) {
            let startIndex = data.indexOf(' ');
            let movieName = data.substring(startIndex+1, data.length);
            movies.push({
                name: movieName
            });
        } else if (data.includes('directedBy')) {
            const [movieName, director] = data.split(' directedBy ');
            for (currentMovie of movies) {
                if (currentMovie.name === movieName) {
                currentMovie['director'] = director;
                break;
                }
            }
        } else if (data.includes('onDate')) {
            const [movieName, date] = data.split(' onDate ');
            for (currentMovie of movies) {
                if (currentMovie.name === movieName) {
                    currentMovie['date'] = date;
                    break;
                }
            }
        }
    }

    for (let movie of movies) {
        if (keys.every(key => movie.hasOwnProperty(key))) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);