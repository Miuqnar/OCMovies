function createFilmDetailsObject() {
    return {
        "#detailFilm_image": "image_url",
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

    
    detailsButton.addEventListener('click', () => {
        Object.entries(createFilmDetailsObject()).forEach(([selector, property]) => {
            const select = document.querySelector(selector);
            select.src = modalDetail[property]
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
}
