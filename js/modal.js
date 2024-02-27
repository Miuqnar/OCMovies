// var obj = { toto: "truc", machin: 42 };
// console.log(Object.entries(obj))
function createFilmDetailsObject() {
    return {
        "#detailFilm_title": "title",
        "#detailFilm_genre": "genres",
        "#detailFilm_date": "date_published",
        "#detailFilm_score": "rated",
        "#detailFilm_director": "directors",
        "#detailFilm_time": "duration",
        "#detailFilm_origin": "countries",
        "#detailFilm_result": "reviews_from_users",
        "#detailFilm_summary": "description",
        "#detailFilm_actor": "actors"
    };
}


function showModal(){
    const openModal = document.querySelector("#openModal")
    openModal.style.display = 'block';
}

function hideModal(){
    const modalElement = document.querySelector("#openModal")
    modalElement.style.display = 'none';
}


function setupModalListeners(modalDetail){

    const detailsButton = document.querySelector("#detailsButton")
    const closeModal = document.querySelector("#closeModal")
    const openModal = document.querySelector("#openModal")


    // let detailFilm_title = document.querySelector("#detailFilm_title");
    // let detailFilm_genre = document.querySelector("#detailFilm_genre");
    // let detailFilm_date = document.querySelector("#detailFilm_date");
    // let detailFilm_score = document.querySelector("#detailFilm_score");
    // let detailFilm_director = document.querySelector("#detailFilm_director");
    // let detailFilm_time = document.querySelector("#detailFilm_time");
    // let detailFilm_origin = document.querySelector("#detailFilm_origin");
    // let detailFilm_result = document.querySelector("#detailFilm_result");
    // let detailFilm_summary = document.querySelector("#detailFilm_summary");
    // let detailFilm_actors = document.querySelector("#detailFilm_actor");

    // detailsButton.addEventListener("click", () => {
    //     detailFilm_title.textContent = modalDetail.title;
    //     detailFilm_genre.textContent = modalDetail.genres
    //     detailFilm_date.textContent = modalDetail.date_published
    //     detailFilm_score.textContent = modalDetail.rated
    //     detailFilm_director.textContent = modalDetail.directors
    //     detailFilm_time.textContent = modalDetail.duration
    //     detailFilm_origin.textContent = modalDetail.countries
    //     detailFilm_result.textContent = modalDetail.reviews_from_users
    //     detailFilm_summary.textContent = modalDetail.description
    //     detailFilm_actors.textContent = modalDetail.actors

    //     showModal()
    // })
    

    // const filmDetails = {
    //     "#detailFilm_title": "title",
    //     "#detailFilm_genre": "genres",
    //     "#detailFilm_date": "date_published",
    //     "#detailFilm_score": "rated",
    //     "#detailFilm_director": "directors",
    //     "#detailFilm_time": "duration",
    //     "#detailFilm_origin": "countries",
    //     "#detailFilm_result": "reviews_from_users",
    //     "#detailFilm_summary": "description",
    //     "#detailFilm_actor": "actors"
    // }
    
    detailsButton.addEventListener('click', () => {
       Object.entries(createFilmDetailsObject()).forEach(([selector, property]) => {
            const select = document.querySelector(selector);
            // console.log(select)
            select.textContent = modalDetail[property];
       });
       showModal();
    });
    
    closeModal.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if(event.target === openModal){
            hideModal()
        }
    })

    // const setupInfo = {
    //     // detailsButton: detailsButton,
    //     // closeModal: closeModal,
    //     // openModal: openModal,
    //     filmDetails: filmDetails,
    // };

    // return setupInfo;
}


