let generer = document.querySelector('.generer')
generer.addEventListener('click', genere_mot_passe)
function genere_mot_passe() {
    let long = parseInt(document.querySelector('.longueur').value);
    let check1 = document.querySelector('.check1')
    let check2 = document.querySelector('.check2')
    let check3 = document.querySelector('.check3')
    let check4 = document.querySelector('.check4')
    let caracteres = ""
    let mdp = ""
    let coche_case = 0
    if (isNaN(long)) {
        alert('Donnez un nombre');
    }
    if (check1.checked) {
        caracteres = caracteres + "AZERTYUIOPQSDFGHJKLMWXCVBN";
        coche_case++
    }
    if (check2.checked) {
        caracteres = caracteres + "azertyuiopqsdfghjklmwxcvbn";
        coche_case++
    }
    if (check3.checked) {
        caracteres = caracteres + "0123456789";
        coche_case++
    }
    if (check4.checked) {
        caracteres = caracteres + "&~#{[(||-`\_^@])}=";
        coche_case++
    }
    if (coche_case == 0) {
        alert('il faut cocher une case')
    }
    if (long < coche_case) {
        alert('augmenter la longueur')
    }
    if (long > 20) {
        alert('diminuer la longueur')
    }
    else {
        for (let i = 0; i < long; i++) {
            mdp = mdp + caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
    }
    let entete1 = document.querySelector('.entete1')
    entete1.innerText = mdp
    entete1.style.fontSize = '2em'
    entete1.style.color = 'white'
    entete1.style.textAlign = 'center'
    entete1.style.padding = '1em'
    document.querySelector('.entete1').append(entete1)
}
let entete1 = document.querySelector('.entete1')
entete1.addEventListener('mouseover', () => {
    let copie = document.querySelector('.fa-clone')
    copie.style.visibility = 'visible'

})/* 
entete1.addEventListener('mouseout', () => {
    let copie = document.querySelector('.fa-clone')
    copie.style.visibility = 'hidden'

}) */
let btn_copy = document.querySelector('.btn_copy')
btn_copy.addEventListener('click',copy)
function copy() {
    alert("copier")
    navigator.clipboard.writeText(entete1.innerText)
}
