class Storage{

    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }
    
    static getFilmsFromStorage(){
        let films;
    
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    
    static deleteFilmFromStorage(element){
        //storage icerisindeki filmleri aldik
        let films = this.getFilmsFromStorage();
        films.forEach(function(film,index){
            if(film.title === element){
                films.splice(index,1);
                //arreydan deger silmemizi saglar
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
           
    }
    
    static clearAllFilmFromStorage(){
        let films = this.getFilmsFromStorage();
        localStorage.clear(films);
    }


}

