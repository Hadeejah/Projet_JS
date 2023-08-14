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
const nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const newMail = document.querySelector('#mail')
const newPhone = document.querySelector('#new-tel')
const image=document.querySelector('#new-photo')
const iconeEye=document.querySelector('.eye')
const notif = document.querySelector('.notif')



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

let idPosition = Math.floor(Math.random() * users.length)
function createUsers(i) {
    lastName.innerHTML = users[i].nom
    firstName.innerHTML = users[i].prenom
    phone.innerHTML = users[i].num_tel
    mail.innerHTML = users[i].email
    photo.src = users[i].image
    solde.innerHTML = users[i].solde
}
createUsers(idPosition)
createTransaction(users[idPosition].transaction)

suivant.addEventListener('click', () => {
    idPosition = Math.floor(Math.random() * users.length);
    createUsers(idPosition)
    createTransaction(users[idPosition].transaction)
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

    if (mnt.value === "") {
        notif.innerHTML = 'Veuillez saisir un montant'

    }
    else {
        if (mnt.value < 500) {
            notif.innerHTML = 'Veuillez augmenter le montant'

        }
        else {
            if (inputNum.value == "") {

                if (trans.value == 'd') {
                  
                    s='dépot'
                    users[idPosition].solde = +solde.textContent + (+mnt.value);
                }
                else if (trans.value == 'r') {

                    s='retrait'
                    users[idPosition].solde = +solde.textContent - (+mnt.value);
                    if (+mnt.value > +solde.textContent) {
                        notif.innerHTML = 'IMPOSSIBLE SOLDE INSUFFISANT'
                        return
                    }

                }
                users[idPosition].transaction.push({ sens: s, montant: mnt.value, numero: 1, DaTe: date })
                createUsers(idPosition)
                createTransaction(users[idPosition].transaction)
            }
            else if (mnt.value > users[idPosition].solde) {
                notif.innerHTML = 'VOTRE SOLDE EST DE :0fcfa'
            }
            else {

                for (let l = 0; l < users.length; l++) {
                    let inputNum = document.querySelector('#num')
                    if (inputNum.value == users[l].num_tel) {
                        transfert(users, users, mnt.value, l, idPosition)
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
                createTransaction(users[idPosition].transaction)
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
if (firstName === '' || lastName === '' || telephone === '' || mail === '' || newPhoto === '') {
    alert('dfghjn,')
}
    boiteModal.style.display = 'none'
    const firstName = prenom.value
    const lastName = nom.value
    const telephone = newPhone.value
    const mail = newMail.value
    const newPhoto=image.value
    const newUser = {
        id: users[users.length - 1].id + 1,
        nom: lastName,
        prenom: firstName,
        num_tel: telephone,
        email: mail,
        image:newPhoto,
        solde: 0,
        trans: [],
    }
    
    users.push(newUser)
    photo.src=newPhoto;
    
})


/* iconeEye.addEventListener('click',()=>{
    
}) */







/*  imgProfil: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
*/



/* saveUser.addEventListener('click', () => {
    boiteModal.style.display = 'none';
    const firstName = prenom.value.trim();
    const lastName = nom.value.trim();
    const telephone = newPhone.value.trim();
    const email = mail.value.trim();
    const imageUrl = image.value.trim();

    if (firstName === '' || lastName === '' || telephone === '' || email === '' || imageUrl === '') {
        notification('Veuillez remplir tous les champs.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        notification('Veuillez entrer une adresse e-mail valide.');
    } else if (!/^[\d()+\-\s]*$/.test(telephone)) {
        notification('Veuillez entrer un numéro de téléphone valide.');
    } else if (telephone.length < 9 || telephone.length > 12) {
        notification('Le numéro de téléphone doit contenir entre 9 et 12 chiffres.');
    } else if (!/(https?:\/\/.*\.)/i.test(imageUrl)) {
        notification('Veuillez entrer une URL d\'image valide (png, jpg ou jpeg).');
    } else {
        const newUser = {
            id: users[users.length - 1].id + 1,
            nom: lastName,
            prenom: firstName,
            number: telephone,
            mail: email,
            image: imageUrl,
            transactions: {
                sens: [],
                montants: []
            }
        };
       users.push(newUser);
        photo.src = imageUrl;
    }
}); */

























/* inputSearchUser.addEventListener('input',()=>{
    users.forEach(user => {
    if (user.prenom.startsWith(searchUserInput.value)) {
        let listeUser = document.createElement('li')
            listeUser.innerHTML = user.prenom
            listeUser.classList.add('search-User-item')
            searchUserResult.appendChild(listeUser)
        }
    });
})
listeUser.addEventListener('click', () => {
     inputUser.value = listeUser.innerHTML
    searchUserResult.innerHTML = ""
}) */