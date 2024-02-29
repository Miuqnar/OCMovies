
// async function getBestImdbMovieImage(){

//     const reponse = await fetch(bestMoviesUrl)
//     const data =  await reponse.json()
//     const bestFilm = data.results[0]
    
//     // recuperer le continue qui est dans le deuxieme dict "url"

//     const detailFilm = await fetch(bestFilm.url).then(response => response.json())
//     // const detailFilm = await results.json()
    
//     if(bestFilm){
//         const imageElment = document.querySelector("#image")
//         const titleElement = document.querySelector("#filmTitle")

        // imageElment.src = bestFilm.image_url
        // titleElement.textContent = bestFilm.title
        // setupModalListeners(detailFilm);
        
//     }else{
//         console.error('Filme non trouvé');
//     }
    
// }
// getBestImdbMovieImage();


