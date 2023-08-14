let tableau_element = ["Mon Premier", "Mon Deuxieme", "Mon Troisieme", "Mon Quatrieme"]
let box = document.querySelector('.conteneur')
let box_gauche = document.querySelector('.bloc_gauche')
let bnt_gauche = document.querySelector('.bouton_gauche')
let bnt_droite = document.querySelector('.bouton_droite')
let bloc_btn = document.querySelector('.bloc_bouton')
let box_droite = document.querySelector('.bloc_droite')
 
function generation_p() {
    for (let i = 0; i < tableau_element.length; i++) {
        let element_tableau = document.createElement('p')
        element_tableau.innerText = tableau_element[i]
        box_gauche.appendChild(element_tableau)


/*         element_tableau.addEventListener('mouseover', function () {
            element_tableau.classList.add('survol')
        })
        deplacer_droite(element_tableau)
        deplacer_gauche(element_tableau) */
    }
}
generation_p()
function deplacer_droite(element_tableau) {
    bnt_gauche.addEventListener('click', function () {
        if (element_tableau.classList.contains('survol')) {
            box_droite.appendChild(element_tableau)
        }
    })

}
function deplacer_gauche(element_tableau) {
    bnt_droite.addEventListener('click', function () {
        if (element_tableau.classList.contains('survol')) {
            box_gauche.appendChild(element_tableau)
        }
    })
}
/* let bloc_gauche = document.querySelector('.bloc_gauche')
let bloc_droite = document.querySelector('.bloc_droite')

let bouton_droite = document.querySelector('.bouton_droite')
let bouton_gauche= document.querySelector('.bouton_gauche')

let elementsbloc_gauche= document.querySelectorAll('.bloc_gauche p')

function disablebloc_bouton(partie,bloc_bouton)
{
    if (!partie.hasChildNodes()) {
        bloc_bouton.setAttribute('disabled,true')
    } else{
        bloc_bouton.removeAttribute('disabled')
    }
}
disablebloc_bouton(bloc_gauche,bouton_gauche)
disablebloc_bouton(bloc_droite,bouton_droite) */