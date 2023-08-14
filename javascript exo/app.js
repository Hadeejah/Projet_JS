const next = document.querySelector('.next');
const lastName = document.querySelector('#lastname');
const firstName = document.querySelector('#firstname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const profil = document.querySelector('img');
const td = document.querySelectorAll('td');
const inputMontant = document.querySelector('#mnt');
const transSelect = document.querySelector('#trans');
const btnSave = document.querySelector('button');
const btnDetail = document.querySelector('#btnDetail');
const form = document.querySelector('.form');
const tbody = document.querySelector('tbody');
const solde = document.querySelector('#solde')
const numberOfTransaction = document.querySelector('.title span code')
console.log(numberOfTransaction);
const key = document.querySelector('#key')
let selectValue = transSelect.value

const notification = document.querySelector('.notification')
const warning = document.querySelector('.warning')
const infoWarnig = document.querySelector('.info_warning')
const inputTel = document.querySelector('#tel')
const searchResult = document.querySelector('.search-results')

const saveClient = document.querySelector('.save')
const closeModal = document.querySelector('.cancel')
const openModal = document.querySelector('.open-modal')
const addClientModal = document.querySelector('.modal-add-client')

const  nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const mail = document.querySelector('#mail')
const newPhone = document.querySelector('#new-tel')

const searchClientContainer = document.querySelector('.search-client-result')

const searchClientInput = document.querySelector('#search-client-input')



const users = [
    {
        id: 1,
        nom: "Sidi",
        prenom: "niang",
        phone: "76 893 44 22",
        mail: "sidi@exemple.com ",
        solde: 5000,
        trans: [
            // {numero:1, date: "08/12/23", sens:1, montant:12000},            
        ],
        imgProfil: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 "
    },
    {
        id: 2,
        nom: "Oumar ",
        prenom: "Diop",
        phone: "77 398 34 63",
        mail: "oumar@exemple.com ",
        solde: 1000,
        trans: [
            // {numero:2, date: "08/12/23o", sens:1, montant:12000},           

        ],
        imgProfil: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80    "
    },
    {
        id: 3,
        nom: "fatou",
        prenom: "sall",
        phone: "70 876 34 22",
        mail: "fatou@exemple.com ",
        solde: 0,
        trans: [
            // {numero:3, date: "08/12/23 f", sens:-1, montant:12000},


        ],
        imgProfil: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    },
    {
        id: 4,
        nom: "kadiata",
        prenom: "Ba",
        phone: "77 893 09 22",
        mail: "sidi@exemple.com ",
        solde: 20000,
        trans: [
            // {numero:4, date: "08/12/23 k", sens:1, montant:12000},          
        ],
        imgProfil: "https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
]

const arrayLengthValue = users.length;
let currentPositionOfUser = randomPositionUser(arrayLengthValue);
// console.log(currentPositionOfUser);
const btnNext = document.querySelector('.next')

function printUser(user) {
    // const loader = document.querySelector('.loader');
    const photoEl = document.querySelector('.photo');
    const tbody = document.querySelector('tbody');
    let photo = new Image();
    photo.src = users[currentPositionOfUser].imgProfil;
    photoEl.innerHTML = photo.outerHTML;

    //    loader.style.backgroud="url(loader.gif)"

    photo.onload = () => {

        showProfile(currentPositionOfUser)
        numberOfTransaction.innerHTML = users[currentPositionOfUser].trans.length
        printTransaction(currentPositionOfUser)

    }
}

function printTransaction(pos) {
    tbody.innerHTML = "";
    users[pos]?.trans.forEach(trans => {
        tbody.innerHTML += ` <tr>
        <td>${trans.numero}</td>
        <td>${trans.date}</td>
        <td>${trans.sens == '1' ? 'depot' : 'retrait'}</td>
        <td>${trans.montant}</td>
    </tr>`

    });
}

function showProfile(pos) {
    let user = getDataBypos(users, pos)
    lastName.textContent = user?.nom;
    firstName.textContent = user?.prenom;
    phone.textContent = user?.phone;
    email.textContent = user?.mail
    solde.textContent = user?.solde
    // profil.src = user?.imgProfil 
}

function showClientProfile(user) {
    lastName.textContent = user.nom;
    firstName.textContent = user.prenom;
    phone.textContent = user.phone;
    email.textContent = user.mail
    solde.textContent = user.solde
    const photoEl = document.querySelector('.photo');
    let photo = new Image();
    photo.src = user.imgProfil;
    photoEl.innerHTML = photo.outerHTML;
}

function printClientTransaction(user) {
    tbody.innerHTML = "";
    user.trans.forEach(trans => {
        tbody.innerHTML += ` <tr>
        <td>${trans.numero}</td>
        <td>${trans.date}</td>
        <td>${trans.sens == '1' ? 'depot' : 'retrait'}</td>
        <td>${trans.montant}</td>
    </tr>`

    });
}

function randomPositionUser(max) {
    return Math.floor(Math.random() * max);
}

function getDataBypos(datas, pos) {
    let data = datas[pos]
    return data;
}
// =================================================================================================

printUser(users[currentPositionOfUser])

// ===================================================================================================

next.addEventListener("click", () => {
    // currentPositionOfUser = randomPositionUser(arrayLengthValue)
    currentPositionOfUser++
    if (currentPositionOfUser == users.length)
        currentPositionOfUser = 0

    printUser(users[currentPositionOfUser])
    
})

btnSave.addEventListener('click', () => {
    let montantVAl = inputMontant.value;

    let transObeject = {
        numero: 0,
        date: new Date().toLocaleDateString(),
        sens: "",
        montant: montantVAl
    }

    sensVal = -1;
    transObeject.sens = sensVal;
    let length = users[currentPositionOfUser].trans.length;

    

    // solde = users[currentPositionOfUser].solde
    if (transSelect.value == 'r') {

        if (montantVAl == "") {
            alert("dagua bax rekk")

        } else if (montantVAl < 500) {

            alert(" pauvre bi gua doone")

        } else if (montantVAl > users[currentPositionOfUser].solde) {

            alert("sth gua")
        } else {
            users[currentPositionOfUser].solde = users[currentPositionOfUser].solde - montantVAl;
            console.log(users[currentPositionOfUser].solde);
            printUser(currentPositionOfUser);
            users[currentPositionOfUser].trans.push(transObeject)
        }
        inputMontant.value = ""

    } else {
        sensVal = 1;
        console.log(inputTel.value);
        if (inputTel.value) {
            const tel = deleteSpace(inputTel.value)
            const destination = getPhoneUsers(tel)

            users[currentPositionOfUser].solde = users[currentPositionOfUser].solde - montantVAl

            if (length == 0) {
                transObeject.numero = 1
            } else {
                transObeject.numero = users[currentPositionOfUser].trans[length - 1].numero + 1;
            }
            transObeject.sens = 2

            users[currentPositionOfUser].trans.push(transObeject)

            const userTarget = {...transObeject}

            if (destination.trans.length == 0) {
                userTarget.numero = 1
            } else {
                userTarget.numero = destination.trans[destination.trans.length - 1].numero + 1
            }
            userTarget.sens = 1
            destination.solde += +montantVAl
            destination.trans.push(userTarget)
            printUser(currentPositionOfUser);
            return
        }

        // Dépot
        users[currentPositionOfUser].solde = users[currentPositionOfUser].solde + (+montantVAl);
        printUser(currentPositionOfUser);
        users[currentPositionOfUser].trans.push(transObeject)
        inputMontant.value = ""

    }
})

inputTel.addEventListener('input', () => {
    const searchPhone = inputTel.value

    searchResult.innerHTML = ''

    if (searchPhone != '') {
        showResultItem(deleteSpace(searchPhone))
    }
})

openModal.addEventListener('click', () => addClientModal.style.display = 'block')
closeModal.addEventListener('click', () => addClientModal.style.display = 'none')

saveClient.addEventListener('click', () => {
    const firstName = prenom.value
    const lastName = nom.value
    const telephone = num_tel.value
    const email = mail.value

    const newClient = {
        id: users[users.length - 1].id + 1,
        nom: lastName,
        prenom: firstName,
        phone: telephone,
        mail: email,
        solde: 0,
        trans: [],
        imgProfil: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }

    users.push(newClient)
})

searchClientInput.addEventListener('input', () => {
    const nom = searchClientInput.value

    searchClientContainer.innerHTML = ''

    if (nom != '') {
        showResultClientItem(nom)
    }
})

function showResultClientItem(nom) {
    for (const user of users) {
        if (user.nom.toLocaleLowerCase().includes(nom.toLocaleLowerCase())) {
            const li = createClientItem(user.prenom, user.nom, user.imgProfil)
            searchClientContainer.appendChild(li)
            li.addEventListener('click', () => {
                showClientProfile(user)
                printClientTransaction(user)
                searchClientContainer.innerHTML = ''
            })
        }
    }
}

function createClientItem(prenom, nom, img) {
    const li = createElement('li', {class: 'search-client-item'})
    const fullName = createElement('span', {class: 'nom'}, `${prenom} ${nom}`)
    const image = createElement('img', {class: 'img'})
    image.style.backgroundImage = `url(${img})`
    li.append(fullName, image)
    return li
}

function createSearchItem(phone) {
    return ( createElement('li', {class: 'result-item'}, phone)); 
}


function createElement(tagName, attributes = {}, content = '') {
    const element = document.createElement(tagName)
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    element.innerText = content
    return element
}

function showResultItem(phone) {
    for (const user of users) {
        if (deleteSpace(user.phone).startsWith(deleteSpace(phone))) {
            const li = createSearchItem(deleteSpace(user.phone))
            searchResult.appendChild(li)

            li.addEventListener('click', () => {
                inputTel.value = user.phone
                searchResult.innerHTML = ''
            })
        }
    }
}

function getPhoneUsers(telval) {
    let user = users.find(u => deleteSpace(u.phone) == telval)
    return user
}
function deleteSpace(tel) {
    let numero = "";    
    for (const char of tel) {
        if (char != " ") {
            numero += char
        }
    }
    return numero
}

