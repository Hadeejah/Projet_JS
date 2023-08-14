let enseignants = ["wane", "aly", "testx"];
let modules = ["maths", "science", "textmat"];
let classes = ["l1", "l3", "l4", "l5", "l6"]
let salles = ["101", "102", "102", "100", "77"]

var select = document.querySelector('#select');
const container = document.querySelector('.container');

// function charger(param) {
//     if (param === 'enseignant') {
//         createOption(enseignants)
//     } else if (param === 'modules') {
//         createOption(modules)

//     }


// }


function createOption(tab) {
    select.innerHTML = ''
    tab.forEach(element => {
        option = document.createElement('option')
        option.innerText += element
        select.appendChild(option)
    });
}

let data = [{
        'libelle': "Enseignants",
        "elements": [{
            "name": "Wane",
            "plannings": []
        }],
        "icon": "fa fa-envelope",

    },
    {
        'libelle': "Modules",
        "elements": ["maths", "science", "textmat"],
        "icon": "fa fa"
    },
    {
        'libelle': "Salles",
        "elements": ["maths", "science", ],
        "icon": "fa fa"
    }
];

(function loadData() {
    data.forEach(element => {
        let btn = document.createElement('button')
        btn.innerText = element.libelle + " " + element.elements.length
        container.appendChild(btn)
    });

})()










