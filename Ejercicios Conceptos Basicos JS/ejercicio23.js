const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const shortMovies = [];
  const mediumMovies = [];
  const longMovies = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].durationInMinutes < 100){  
        shortMovies.push(movies[i]);
    }
    else if(movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200){
        mediumMovies.push(movies[i]);
    } else {
        longMovies.push(movies[i]);
    }
  }

    console.log(shortMovies);
    console.log(mediumMovies);
    console.log(longMovies);