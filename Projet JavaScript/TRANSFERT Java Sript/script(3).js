let lastName = document.querySelector('#lastname')
let firstName = document.querySelector('#firstname')
let phone = document.querySelector('#phone')
let mail = document.querySelector('#email')
let photo = document.querySelector('img')
let tbody = document.querySelector('tbody')
let codeTransac = document.querySelector('code')
let plus = document.querySelector('#btnDetail')
let form = document.querySelector('.form')
let suivant = document.querySelector('.next')
let save = form.children[2]
let mnt = document.querySelector('#mnt')
let solde = document.querySelector('#solde')
let trans = document.querySelector('#trans')
let boiteModal = document.querySelector('.boite_modal')
let openModal = document.querySelector('.open-modal')
let closeModal = document.querySelector('.cancel')
let addInfos = document.querySelector('.add')
let code = document.querySelector('code')
let inputNum = document.querySelector('#num')
let searchTels = document.querySelector('.search_tels')
let inputSearchUser = document.querySelector('#search-user-input')
let searchUserResult = document.querySelector('.search-user-result')
let searchUserItem = document.querySelector('.search-user-item')
let saveNewUser = document.querySelector('.add')
let num = document.querySelector('#num')
const nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const newMail = document.querySelector('#mail')
const newPhone = document.querySelector('#new-tel')
const image = document.querySelector('#new-photo')
const iconeEye = document.querySelector('.eye')
const notif = document.querySelector('.notif')
let icoAnnuler = document.querySelector('.ico')
let numTrans=0

const users = [
    {
        id: 1,
        nom: 'NDIAYE',
        prenom: 'FATIMA',
        num_tel: '775674534',
        email: 'fatima@gmail.com',
        image: "https://images.unsplash.com/photo-1657781069918-7aba90d68b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHx3b21hbiUyMGZhY2UlMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transaction: [],
        solde: 0
    },
    {
        id: 2,
        nom: 'DIAWARA',
        prenom: 'AMINATA',
        num_tel: '774332343',
        email: 'aminata@gmail.com',
        image: "https://images.unsplash.com/photo-1596664427727-382396718e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhpamFiJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transaction: [],
        solde: 50000
    },
    {
        id: 3,
        nom: 'NDIAYE',
        prenom: 'AIDA',
        num_tel: '777864578',
        email: 'aida@gmail.com',
        image: "https://images.unsplash.com/photo-1641427862119-d5c76c51ef4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx3b21hbiUyMGZhY2UlMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transaction: [],
        solde: 0
    },
    {
        id: 4,
        nom: 'NDIAYE',
        prenom: 'MOUHAMED',
        num_tel: '762343408',
        email: 'ibrahima@gmail.com',
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc1fHx3b21hbiUyMGZhY2UlMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transaction: [],
        solde: 0
    },
]
const date = new Date().toLocaleDateString()
let tailleTab = users.length
let idPos = Math.floor(Math.random() * tailleTab)
function createUsers(i) {
    lastName.innerHTML = users[i].nom
    firstName.innerHTML = users[i].prenom
    phone.innerHTML = users[i].num_tel
    mail.innerHTML = users[i].email
    photo.src = users[i].image
    solde.innerHTML = users[i].solde
}
createUsers(idPos)
createTransaction(users[idPos].transaction)

suivant.addEventListener('click', () => {
    idPos = Math.floor(Math.random() * tailleTab);
    createUsers(idPos)
    createTransaction(users[idPos].transaction)
    console.log(idPos);
})

function createTransaction(transaction) {
    tbody.innerHTML = ''
    transaction.forEach(trans => {
        tbody.innerHTML += `<tr>
        <td>${trans.numero}</td>
       <td>${trans.DaTe}</td>
       <td>${trans.sens}</td>
       <td>${trans.montant}</td>
   </tr>`
    });
    code.innerHTML = transaction.length

}
plus.addEventListener('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
})

save.addEventListener('click', () => {
    let s;
    let tra = {
        numero: "",
        sens: "",
        montant: "",
        DaTe: ""

    }
    if (mnt.value === "") {
        notif.innerHTML = 'Veuillez saisir un montant'
    }
    
    else {
        if (mnt.value < 500) {
            notif.innerHTML = 'Veuillez augmenter le montant'
            
        }
        else {
            const idPos = users.findIndex(us => us.num_tel == phone.textContent);
            /*    console.log(idPosition, idPos); */
            if (inputNum.value == "") {
                
                if (trans.value == 'd') {
                    
                    s = 'dépot'
                    users[idPos].solde = +solde.textContent + (+mnt.value);

                }
                else if (trans.value == 'r') {
                    
                    s = 'retrait'
                    users[idPos].solde = +solde.textContent - (+mnt.value);

                    if (+mnt.value > +solde.textContent) {
                        notif.innerHTML = 'IMPOSSIBLE SOLDE INSUFFISANT'
                        return
                    }
                }
                tra.numero = numTrans
                tra.sens = s
                tra.montant = mnt.value
                tra.DaTe = date
                
                numTrans++
                users[idPos].transaction.push(tra)
                createUsers(idPos)
                createTransaction(users[idPos].transaction)
                console.log(users[idPos].transaction);
            }
            else if (mnt.value > users[idPos].solde) {
                notif.innerHTML = 'VOTRE SOLDE EST DE :0fcfa'
            }
            else {
                for (let l = 0; l < users.length; l++) {
                    let inputNum = document.querySelector('#num')
                    if (inputNum.value == users[l].num_tel) {
                        transfert(users, users, mnt.value, l, idPos)
                    }
                }
            }
        }
    }
    mnt.value = ""
    inputNum.value = ""
})
function transfert(user1, user2, rising, i, j) {
    user1[i].transaction.push({ numero: 1, DaTe: date, sens: 1, montant: +mnt.value, })
    console.log(user1[i].transaction);
    user1[i].solde += +rising
    user2[j].transaction.push({ numero: 1, DaTe: date, sens: -1, montant: +mnt.value, })
    user2[j].solde -= +rising
    solde.innerHTML = user2[j].solde

    createTransaction(user1[i].transaction)
    createTransaction(user2[j].transaction)

}
inputNum.addEventListener('input', () => {
    searchTels.innerHTML = ""
    users.forEach(user => {
        if (/* inputNum.value.length >= 3 && */ user.num_tel.startsWith(inputNum.value)) {
            let liste = document.createElement('li')
            liste.innerHTML = user.num_tel
            liste.classList.add('search_tel')
            searchTels.appendChild(liste)

            liste.addEventListener('click', () => {
                inputNum.value = liste.innerHTML
                searchTels.innerHTML = ""
            })
        }


    });
})


function barreUser(prenom, nom, img) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const image = document.createElement('img');

    li.classList.add('infoClientRec');
    span.classList.add('nom');
    span.textContent = `${prenom} ${nom}`;
    image.classList.add('img');
    image.src = img;
    li.appendChild(span);
    li.appendChild(image);
    return li;
}


function searchUser(motCherche) {
    for (let user of users) {
        if (user.nom.toLowerCase().includes(motCherche.toLowerCase()) || user.prenom.toLowerCase().includes(motCherche.toLowerCase()) || user.num_tel.includes(motCherche)) {
            const li = barreUser(user.prenom, user.nom, user.image)
            searchUserResult.appendChild(li)
            li.addEventListener('click', () => {
                /* createTransaction(user.transaction.montant, user.transaction.sens, date); */

                createTransaction(users[idPos].transaction)
                solde.innerText = user.solde;
                lastName.innerHTML = user.nom
                firstName.innerHTML = user.prenom
                phone.innerHTML = user.num_tel
                mail.innerHTML = user.email
                photo.src = user.image
                searchUserResult.innerHTML = ''
            })
        }
    }
}
inputSearchUser.addEventListener('input', () => {
    const motCherche = inputSearchUser.value

    searchUserResult.innerHTML = ''

    if (motCherche != '') {
        searchUser(motCherche)

    }
})


openModal.addEventListener('click', () => (boiteModal.style.display = "block"))
closeModal.addEventListener('click', () => (boiteModal.style.display = "none"))



saveNewUser.addEventListener('click', () => {
    if (prenom.value === '' || nom.value === '' || telephone.value === '' || mail.value === '' || newPhoto.value === '') {
        alert('Remplir tout les champs')

    }
    boiteModal.style.display = 'none'
    const firstName = prenom.value
    const lastName = nom.value
    const telephone = newPhone.value
    const mail = newMail.value
    const newPhoto = image.value
    const newUser = {
        id: users[users.length - 1].id + 1,
        nom: lastName,
        prenom: firstName,
        num_tel: telephone,
        email: mail,
        image: newPhoto,
        solde: 0,
        trans: [],
    }
    users.push(newUser)
    users[idPos]
    photo.src = newPhoto;
    console.log(users);
    tailleTab++
})

icoAnnuler.addEventListener('click',()=>{

})



