const quizData = [
    {
        question: "Quel bac permet d'intégrer le BUT",
        a: "Bac S / Bac STI2D",
        b: "Bac à glaçon",
        c: "Bac ES / Bac STMG",
        d: "Bac L / Bac STL",
        correct: "a",
    },
    {
        question: "Comment postuler à un BUT",
        a: "2 ans",
        b: "3 ans",
        c: "5 ans",
        d: "9 ans",
        correct: "b",
    },
    {
        question: "Après l'obtention d'un BUT, quels sont les poursuites d'étude possible ?",
        a: "DUT",
        b: "BTS",
        c: "Bac Pro",
        d: "Master",
        correct: "d",
    },
    {
        question: "Dans quel établissement se déroule un BUT ?",
        a: "Lycée",
        b: "IUT",
        c: "École d'ingénieur",
        d: "Stade de foot",
        correct: "b",
    },
    {
        question: "Le BUT est-il uniquement composé de cours en IUT ?",
        a: "Oui, tout se déroule dans l'établissement",
        b: "Non, il y a des stages",
        c: "Non, il y a de l'alternance",
        d: "Non, il y a des stages et/ou de l'alternance",
        correct: "d",
    },
    {
        question: "Quel est la valeur de ce diplôme (en crédit ECTS) ?",
        a: "60 crédits",
        b: "120 crédits",
        c: "180 crédits",
        d: "210 crédits",
        correct: "c",
    },
    {
        question: "Comment postuler à une formation BUT ?",
        a: "Parcoursup",
        b: "Candidature libre",
        c: "Email",
        d: "Pigeon voyageur",
        correct: "a",
    },
    {
        question: "Combien existe-t-il de parcours différent au sein de la formation ?",
        a: "2 parcours",
        b: "3 parcours",
        c: "4 parcours",
        d: "5 parcours",
        correct: "c",
    },
    {
        question: "Quel diplôme peut-on obtenir si l'on arrête la formation après avoir validé la 2ème année ?",
        a: "BTS",
        b: "DUT",
        c: "License",
        d: "Master",
        correct: "b",
    },
    {
        question: "Ce quizz touche à sa fin !  Maintenant que tu en sais d'avantage, envisagerait-tu de faire un BUT ?",
        a: "Oui, un BUT en informatique",
        b: "Oui, mais pas un BUT en informatique",
        c: "Non, pas de BUT",
        d: "Aucune idée",
        correct: "a",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions </h2>

                <button onclick="location.reload()">Recommencer</button>
            `
        }
    }
})
