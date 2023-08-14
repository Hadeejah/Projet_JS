const frames = document.querySelectorAll('.cadre')
let aj=document.querySelector('.aj')
let an=document.querySelector('.an')
let boite_modal=document.querySelector('.boite-modal')
let content_modal=document.querySelector('.content_modal')
let plus=document.querySelectorAll('.plus')
let sel1=document.querySelector('.sel1')
let sel2=document.querySelector('.sel2')
let sel3=document.querySelector('.sel3')
let sel4=document.querySelector('.sel4')
let sel5=document.querySelector('.sel5')
let selectGroup=document.querySelectorAll('.input-group')
let select=document.querySelector('.select')
let rondNoir=document.querySelector('.rond-noir')
let entete=document.querySelector('.entete')

let fane_actuel ;
const objet={
    mdule:-1,
    oustaz:-1,
    fasle:-1,
    hde:-1,
    hfi:-1,
    jr:-1,   
}

const profs = [
    { id: 1, nom: 'MBAYE', semaine: '', modules: [1, 2, 3], plannings: [[], [], [], [],[],[]]},
    { id: 2, nom: 'MOUSSA', semaine: '', modules: [6, 2, 3], plannings: [[], [], [], [],[],[]] },
    { id: 3, nom: 'MAR', semaine: '', modules: [4, 3, 5], plannings: [[], [], [], [],[],[]] },
    { id: 4, nom: 'THIORO', semaine: '', modules: [1, 4, 3], plannings: [[], [], [], [],[],[]] },
    { id: 5, nom: 'ADJA', semaine: '', modules: [1, 3], plannings: [[], [], [], [],[],[]] },
];

const modules = [
    { id: 1, nom: 'Javascript', semaine: '', plannings: [[], [], [], []] },
    { id: 2, nom: 'Python', semaine: '', plannings: [[], [], [], []] },
    { id: 3, nom: 'Java', semaine: '', plannings: [[], [], [], []] },
    { id: 4, nom: 'PHP', semaine: '', plannings: [[], [], [], []] },
    { id: 5, nom: 'Merise', semaine: '', plannings: [[], [], [], []] },
    { id: 6, nom: 'Arabe', semaine: '', plannings: [[], [], [], []] },
];


const classes = [
    { id: 1, nom: 'DevWeb', semaine: '', plannings: [[], [], [], []], effectif: 30 },
    { id: 2, nom: 'Gl', semaine: '', plannings: [[], [], [], []], effectif: 29 },
    { id: 3, nom: 'Marketing', semaine: '', plannings: [[], [], [], []], effectif: 50 },
    { id: 4, nom: 'Hackeuse', semaine: '', plannings: [[], [], [], []], effectif: 10 },
];

const salles = [
    { id: 1, nom: '101', semaine: '', plannings: [[], [], [], []], effectif: 30 },
    { id: 2, nom: '102', semaine: '', plannings: [[], [], [], []], effectif: 29 },
    { id: 3, nom: '103', semaine: '', plannings: [[], [], [], []], effectif: 50 },
    { id: 4, nom: '104', semaine: '', plannings: [[], [], [], []], effectif: 10 },
];

const heure_debut=[
    {id:1,nom:8},
    {id:2,nom:9},
    {id:3,nom:10},
    {id:4,nom:11},
    {id:5,nom:12},
    {id:6,nom:13},
    {id:7,nom:14},
    {id:8,nom:15},
    {id:9,nom:16},
    {id:10,nom:17},
];

const heure_fin=[
    
    {id:2,nom:9},
    {id:3,nom:10},
    {id:4,nom:11},
    {id:5,nom:12},
    {id:6,nom:13},
    {id:7,nom:14},
    {id:8,nom:15},
    {id:9,nom:16},
    {id:10,nom:17},
];
let objetsGlobal={profs,modules,classes,salles,heure_debut,heure_fin}

for (const frame of frames) {
    frame.addEventListener('click', () => {
        for (let i = 0; i < frames.length; i++) {
            frames[i].classList.remove('active')
        }
        frame.classList.add('active')
    }) 

}



an.addEventListener('click',()=>{
    boite_modal.style.display='none'
})
let tab = []
aj.addEventListener('click',()=>{
    console.log(fane_actuel);  
    let mod=sel1.options[sel1.selectedIndex].innerText
    let teach=sel2.options[sel2.selectedIndex].innerText
    let idProf=sel2.value
    let sa=sel3.options[sel3.selectedIndex].innerText
    let h_deb=sel4.options[sel4.selectedIndex].innerText
    let h_fin=sel5.options[sel5.selectedIndex].innerText 
    tab.push(sel1.options[sel1.selectedIndex].innerText,sel2.options[sel2.selectedIndex].innerText,sel3.options[sel3.selectedIndex].innerText,sel4.options[sel4.selectedIndex].innerText,sel5.options[sel5.selectedIndex].innerText )
    boite_modal.style.display='none'
    /*   console.log(tab); */
    selectGroup.forEach(sgroupe => {
        let recupval=sgroupe.className.replace("input-group",'')
        objet[recupval]=sgroupe.value
    });
    profs[idProf].plannings[fane_actuel].push(affichePlanning(h_deb,h_fin,createPLanning(teach,mod,sa)))
    console.log(profs[idProf-1].plannings[fane_actuel-1])
     if (isProfDispo(h_deb,h_fin)==0) {
        alert('IMPOSSIBLE')
    }
    else{
        affichePlanning(h_deb,h_fin,createPLanning(teach,mod,sa)); 
    } 
}) 
for (const plu of plus){
    plu.addEventListener('click',(e)=>{
        document.querySelector("#key").textContent=e.target.id[2];    
        boite_modal.style.display='block';
        content_modal.style.display='block';
        fane_actuel=plu.getAttribute("fane");
        /* alert(fane_actuel) */
        

    })
}
function chargerSelect (data, select,label='Selectionner')
{
    select.innerHTML = '';
    const option = creatingElement('option');
    option.value='0';
    option.innerHTML = label;
    select.appendChild(option);
    data.forEach(d => {
        const option = creatingElement('option');
        option.innerHTML = d.nom; 
        option.value=d.id;
        select.appendChild(option);
    });
}
sel1.addEventListener('change',()=>{
    const idModule=sel1.value;
    let professeurs= getProfsByIdModule(+idModule);
    chargerSelect(professeurs,sel2,"choisir un prof");
})

function getProfsByIdModule(idModule)
{
    const professeurs=[];
    profs.forEach(prof => {
        if (prof.modules.includes(idModule)) {
            professeurs.push(prof);
        }
    });  
    return professeurs;
}
function creatingElement(elName)
{
    return document.createElement(elName);
}
function modalChargement() {
    chargerSelect(modules,sel1,'Selectionner un module');
    chargerSelect(salles,sel3,'Selectionner une salle');
    chargerSelect(heure_debut,sel4,'Selectionner heure de debut');
    chargerSelect(heure_fin,sel5,'Selectionner heure de fin ');
}
modalChargement()

function createPLanning(professor,module,salle) {
    
    const div1=document.createElement('div');
    div1.classList.add('plann');
    const professo=document.createElement('div');
    professo.innerText=professor
    const modul=document.createElement('h2');
    modul.innerText=module
    const sal= document.createElement('div');
    sal.innerText=salle
    const icone=document.createElement('i')
    icone.classList.add("fa-solidfa-xmarkico")
    div1.append(professo,modul,sal)
    return div1
}
/*  createPLanning('Khadija','Arabe','101');*/
function affichePlanning(heuredeb,heurefin,element) {
    const column = heuredeb-8; 
    element.style.backgroundColor = 'pink';
    element.style.width = `${(heurefin-heuredeb)*10.5}%`;
    element.style.position = 'absolute';
    element.style.marginLeft = `${column*10.5}%`
    const newId = document.querySelector("#key").textContent
    const parent_pl =document.querySelector(`#pl_${newId}`)
    parent_pl.append(element)
    
}

function isProfDispo(hd,hf)
{
    let resultat=1
    
    profs.forEach(c => {
    if(c.hd==hd && (c.hf=hf )|| c.hd<hd && hd<c.hf||c.hd<hf&& hf <c.hf) {
        resultat=0
    }
   });
   return resultat;
}
 isProfDispo(hd,hf) 



