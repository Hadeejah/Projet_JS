function createElement(tagName,attributs={},content=''){
    const element=document.createElement(tagName)
    for (const key in attributs) {
        element.setAttribute(key,attributs[key])
    }
    element.textContent=content
    return element
}
function createMovies(title,image,vote,descriptionFilm,descripTitre)
{

    const movies=document.querySelector('.movies')
    
    const movie1= createElement('div',{class:'movie'}) 
    
    const tof=createElement('div',{class:'tof'})
    tof.style.backgroundImage= `url(${image})`
    movie1.append(tof)
    const titre_vote= createElement('div',{class:'yinek_sisouf'})
    const titre = createElement('div',{class:'titre'},title)
    const vote1= createElement('div', {class:'vote'},vote)
    
    titre_vote.append(titre,vote1)
    
    const descripBoumak = createElement('div',{class:'description'})
    const descripFilm = createElement('p',{},descriptionFilm)
    const descrip_titre = createElement('h3',{class:'descrip_titre'},descripTitre)
    
    descripBoumak.append(descrip_titre,descripFilm)

    movie1.append(tof,titre_vote,descripBoumak)

    movies.append(movie1)

     return movies

}

let page=2 
const APIURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 

async function fetchMovies(url) {
    const responses= await fetch(url)
    const data= await responses.json()
    return data.results
}
const movies= document.querySelector('.movies')

 const films=fetchMovies(APIURL+page )
films.then(data=>{
    for (const film of data) {
        const titre =film.original_title
        const overview= film.overview
        const vote =film.vote_average
        const image=IMGPATH+film.poster_path
        const movies= createMovies(titre,image,vote,overview,'Overview')

    }
})
 







