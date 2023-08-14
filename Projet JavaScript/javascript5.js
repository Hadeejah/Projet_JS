let question = document.querySelector('.question')
let btn = document.querySelector('.btn')
let rep = document.querySelectorAll('.rep')
let rep_1 = document.querySelector('.rep_1')
let rep_2 = document.querySelector('.rep_2')
let rep_3 = document.querySelector('.rep_3')
let rep_4 = document.querySelector('.rep_4')
const questions = [
    {
        question: "C'est qui l'apprenant(e) le (la) plus court(e)de la classe? ",
        a: "Khaoussou",
        b: "Mame Sokhna",
        c: "Kadiata",
        d: "Doucouré",
        correct: "d"
    },
    {
        question: "Quelle est la princesse qui était avec les 7nains?",
        a: "Aurore",
        b: "Cendrillon",
        c: "Blanche-Neige",
        d: "Ariel",
        correct: "c"
    },
    {
        question: "Qui est l'actuel President de la Cote-D'ivoire?",
        a: "Paul Kagame",
        b: "Nicolas Sarcozy",
        c: "Paul Biya",
        d: "Alassane Ouattara",
        correct: "d"
    },
    {
        question: "Qui est l'actuel President des Etats-Unies?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Barack Obama",
        d: "Vladimir Poutine",
        
        correct: "b"
    },
    {
        question: "Quelle est la princesse qui a de longues cheveux?",
        a: "Ariel",
        b: "Jasmine",
        c: "Blanche-Neige",
        d: "Raiponce",
        correct: "d"
    }
]
let i = 0
function afficherQuestions() {
    question.textContent = questions[i].question
    rep_1.textContent = questions[i].a
    rep_2.textContent = questions[i].b
    rep_3.textContent = questions[i].c
    rep_4.textContent = questions[i].d
}
let score=0
let answer=document.querySelector('.answer')
afficherQuestions();
btn.addEventListener('click',() => {
    let caseCoche=Array.from(rep).filter(caseCoche=>caseCoche.checked)[0]
    console.log(caseCoche)
    if (caseCoche.id==questions[i].correct) {
        score++
    }
    i++

    if (i<questions.length) {
        afficherQuestions()
    }
    if (i==questions.length) {
        question.textContent=`Vous avez trouve ${score}/${questions.length} questions`
        btn.textContent="Rejouer"
        i=0
        score=0
        style.display="none"
     
    }
   
})
