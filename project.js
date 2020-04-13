    const form = document.querySelector("#film-form");
    const titleElement = document.querySelector("#title");
    const directorElement = document.querySelector("#director");
    const urlElement = document.querySelector("#url");
    const secondCardBody = document.getElementsByClassName("card-body")[1];
    const deleteAllButton = document.querySelector("#clear-films");


    // TUM EVENTLERI YAZMAK ICIN FUNCTION
    eventListeners();
    function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilmsToUI();          
    });
    secondCardBody.addEventListener("click", deleteFilm);
    deleteAllButton.addEventListener("click", deleteAllFilms);

    }

    function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "" ){
        UI.showAlert("danger", "Alanlarin hepsini doldurunuz!");
    }
    else{
        const newFilm = new Film(title, director,url);
        UI.addFilmToUI(newFilm); // arayuze film ekleme
        Storage.addFilmToStorage(newFilm);
        UI.showAlert("success", "Film basarili bir sekilde eklendi");
        UI.clearInputs(titleElement,directorElement,urlElement);

    }

    e.preventDefault(); 
    }

    function deleteFilm(e){
            if(e.target.className === "btn btn-danger"){
                //e.targer.id === "delete-film"
               // e.target.parentElement.parentElement.remove();
               UI.deleteFilmFromUI(e.target);
               Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
               UI.showAlert("success", "Silme islemi basariyla tamamlandi...");
            }
                                        
    }
    
    function deleteAllFilms(){
        if(confirm( "Butun filmleri silmek istediginize emin misiniz ? ")){
            UI.deleteAllFilmsFromUI();
            Storage.clearAllFilmFromStorage();
        }
        
    
    }
