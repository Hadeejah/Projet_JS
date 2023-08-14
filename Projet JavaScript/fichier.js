const clients = [
    {
        id: 1,
        nom: "Mane",
        prenom: "Adama",
        number: "771233445",
        mail: "cou@gmail.com",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transactions: {
            sens: [1,-1,-1,1,-1],
            montants: [14000, 3000,20000,35000,4000]
        }
    },
    {
        id: 2,
        nom: "Mane",
        prenom: "Bineta",
        number: "771236789",
        mail: "bsr@gmail.com",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transactions: {
            sens: [1,-1,1,1],
            montants: [10000, 15000, 12500,4000]
        }
    },
    {
        id: 3,
        nom: "Ndiaye",
        prenom: "Maimouna",
        number: "77 123 34 56",
        mail: "bjr@gmail.com",
        image: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        transactions: {
            sens: [1,-1,-1,1,1],
            montants: [3000,2500,500,4000]
        }
    }
];
console.log(clients[0].transactions.sens[0]);
console.log(clients[0].transactions.montants[0]);


const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const photo = document.querySelector('img');
const body = document.querySelector('tbody');
const transactions = document.querySelector(".transactions tbody");
const count = document.querySelector("code");
const btnDetail = document.getElementById("btnDetail");
const next = document.querySelector(".navigation .next");

let i = Math.floor(Math.random()*clients.length);
function creerClients(i) {
    lastname.innerHTML = clients[i].nom
    firstname.innerHTML = clients[i].prenom
    phone.innerHTML = clients[i].number
    email.innerHTML = clients[i].mail
    photo.src = clients[i].image
}
creerClients(i);
createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, '31/03/2021')

next.addEventListener('click', () => {
    i = Math.floor(Math.random()*clients.length);
    if (clients.length > i) {
        creerClients(i)
        createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, '31/03/2021')
    }
    else {
        location.reload();
    }

})

function createTransaction(montants, sens, date) {
    body.innerHTML=''
    count.innerHTML=montants.length
    for (let i = 0; i < montants.length; i++) {

        // let code= document.createElement("code")
        let trans = document.createElement("tr");
        let td1 = document.createElement("td");

        td1.innerText = i

        let td2 = document.createElement("td");

        td2.innerText = date

        let td3 = document.createElement("td");

        td3.innerText = sens[i]

        let td4 = document.createElement("td");

        td4.innerText = montants[i]

        trans.append(td1, td2, td3, td4)
        body.appendChild(trans)
    }


}
// createTransaction(clients[1].transactions.montants, clients[1].transactions.sens, '11/01/2022');
// createTransaction(clients[1].transactions.montants[1], clients[1].transactions.sens[1], '02', '29/03/2022');
