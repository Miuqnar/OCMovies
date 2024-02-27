
// /?sort_by=-imdb_score&page_size=7
// "http://127.0.0.1:8000/api/v1/titles/8571428",
// ?sort_by=-imdb_score&page_size=7&genre=comedy


async function getBestImdbMovieImage(){

    const reponse = await fetch(bestMoviesUrl)
    const data =  await reponse.json()
    const bestFilm = data.results[0]
    
    // recuperer le continue qui est dans le deuxieme dict "url"

    const detailFilm = await fetch(bestFilm.url).then(response => response.json())
    // const detailFilm = await results.json()
    
    if(bestFilm){
        const imageElment = document.querySelector("#image")
        const titleElement = document.querySelector("#filmTitle")

        imageElment.src = bestFilm.image_url
        titleElement.textContent = bestFilm.title
        setupModalListeners(detailFilm);
        
    }else{
        console.error('Filme non trouvé');
    }
    
}
getBestImdbMovieImage();


