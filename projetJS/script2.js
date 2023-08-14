const profs = [
    {id : 1, nom : 'MBAYE',semaine:'',modules:[1,2,3], plannings : [[],[],[],[]]},
    {id : 2, nom : 'MOUSSA',semaine:'',modules:[6,2,3], plannings : [[],[],[],[]]},
    {id : 3, nom : 'MAR',semaine:'',modules:[4,3,5], plannings : [[],[],[],[]]},
    {id : 4, nom : 'THIORO',semaine:'',modules:[1,4,3], plannings : [[],[],[],[]]},
    {id : 5, nom : 'ADJA',semaine:'',modules:[1,3], plannings : [[],[],[],[]]},
];

const modules = [
    {id : 1, nom : 'Javascript',semaine:'', plannings : [[],[],[],[]]},
    {id : 2, nom : 'Python',semaine:'', plannings : [[],[],[],[]]},
    {id : 3, nom : 'Java',semaine:'', plannings : [[],[],[],[]]},
    {id : 4, nom : 'PHP',semaine:'', plannings : [[],[],[],[]]},
    {id : 5, nom : 'Merise',semaine:'', plannings : [[],[],[],[]]},
    {id : 6, nom : 'Arabe',semaine:'', plannings : [[],[],[],[]]},
];


const classes = [
    {id : 1, nom : 'DevWeb',semaine:'', plannings : [[],[],[],[]],effectif:30},
    {id : 2, nom : 'Gl',semaine:'', plannings : [[],[],[],[]],effectif:29},
    {id : 3, nom : 'Marketing',semaine:'', plannings : [[],[],[],[]],effectif:50},
    {id : 4, nom : 'Hackeuse',semaine:'', plannings : [[],[],[],[]],effectif:10},
    ];

    const salles = [
        {id : 1, nom : '101',semaine:'', plannings : [[],[],[],[]],effectif:30},
        {id : 2, nom : '102',semaine:'', plannings : [[],[],[],[]],effectif:29},
        {id : 3, nom : '103',semaine:'', plannings : [[],[],[],[]],effectif:50},
        {id : 4, nom : '104',semaine:'', plannings : [[],[],[],[]],effectif:10},
        ];

    const currentClass = {
        nom : 'DevWeb',
        semaine : '13/03/2023 - 18/03/2023',
        effectif: 29,
        plannings : [
            [
                {module : 2, prof:2, salle: 4, debut: 8, duree :4}
            ] , 
            [] , [] , [] , [
                {module : 6, prof:2, salle: 4, debut: 10, duree :2},
                {module : 6, prof:2, salle: 4, debut: 12, duree :2}
            ] , [] ]
    };

    const boxes = document.querySelectorAll('.box');
    const selection = document.querySelector('.selection');


    const prof= getDataById(2,classes);
    console.log(prof== undefined ? 'doesn\'t exist':prof.nom)
    // console.log(prof);


    function getDataById (id,data)
    {
        // let p = undefined;
        // profs.forEach(prof => {
        //     if(prof.id == id)
        //     {
        //         p = prof;
        //         return ;
        //     }
        // });
        // return p;


        // return profs.find((p)=>p.id == id) 
        return data.find((p)=>p.id == id)
    }

    // chargement des données
function chargerSelect (data, select,label='Selectionner')
{
    select.innerHTML = '';
    const option = creatingElement('option');
    option.innerHTML = label;
    select.appendChild(option);
    data.forEach(d => {
        const option = creatingElement('option');
        option.innerHTML = d.nom;
        select.appendChild(option);
    });
}

function creatingElement(elName)
{
    return document.createElement(elName);
}

boxes.forEach(box => {
    box.addEventListener('click',(e)=>{
        // console.log(e.target)
        // const boxTitle = box.classList[0]; au cas ou ......
        const boxTitle = box.classList; 

        if(boxTitle.contains('classroom'))
        {
            chargerSelect(salles,selection,'selectionner une salle');
        }

        if(boxTitle.contains('course'))
        {
            chargerSelect(modules,selection,'selectionner  un cours');
        }

        if(boxTitle.contains('teacher'))
        {
            chargerSelect(profs,selection,'selectionner  un prof');
        }

        if(boxTitle.contains('module'))
        {
            chargerSelect(classes,selection,'selectionner  une classe');
        }
    })
});


function printPlanning(debut,duree,)
{
    const column = debut-8; //veuillez constantiser le 8
    const div = creatingElement('div');
    div.style.backgroundColor = 'red';
    div.style.width = `${duree*10}%`;
    div.style.position = 'absolute';
    div.style.height = '100%';
    div.style.marginLeft = `${column*10}%`
    const lundi = document.querySelector('#day_1')
    lundi.appendChild(div);
}

printPlanning(9,3);
printPlanning(13,2);
