const cardBody1 = document.getElementsByClassName("card-body")[0];

class UI {
   
    static addFilmToUI(newFilm){
        //console.log(newFilm);
    
    //     <!-- <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    //   <!-- <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    
    const filmList = document.getElementById("films");
    
        filmList.innerHTML += `
            <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail height="200" width="300"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        
        `;
    
    }
    
    static loadAllFilmsToUI(){
        let films = storage.getFilmsFromStorage();
        films.forEach(function(film){
            ui.addFilmToUI(film);
        });
    }
    
    static clearInputs(element1, element2, element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    
    }
    
    static showAlert(type, message){
        /* 
        <div class="alert alert-primary" role="alert">
            This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        */
    
        const warningDiv = document.createElement("div");
        warningDiv.className = `alert alert-${type}`;
        warningDiv.textContent = message;
    
        cardBody1.appendChild(warningDiv);
    
        setTimeout(function(){
         warningDiv.remove();
        },1500)
    }
    static deleteFilmFromUI(element){
          element.parentElement.parentElement.remove();
    }
    
    static deleteAllFilmsFromUI(){
    
        const filmList = document.getElementById("films");
        filmList.innerHTML = "";
        
    }   
}


