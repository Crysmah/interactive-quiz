// Stores all questions and answers in quizQA (Questions & Answers).
const quizQA = [
    {
        question: "You have an eye for spotting errors in a project that others have missed.",
        answer: "QA",
    },
    {
        question: "People often come to you to confirm details about what the project should be.",
        answer: "ProductOwner",
        
    },
    {
        question: "You are not afraid to voice your opnion and concerns.",
        answer: "QA",
    },
    {
        question: "You offer creative new perspectives on a project.",
        answer: "QA",
    },
    {
        question:  "You are detailed oriented.",
        answer: "QA",
    },
    {
        question: "People often come to you to confirm that they are working on the correct part of the project.",
        answer: "ProductOwner",
    },
    {
        question: "Your friends and family would consider you an extrovert.",
        answer: "ProductOwner",
    },
    {
        question: "You often reach out to absent members in a group to let them know that their absence is noticed.",
        answer: "ScrumMaster",
    },
    {
        question: "People often rely on you to ensure that the progress of the group is going smoothly.",
        answer: "ScrumMaster",
    },
    {
        question: "You like to look at the big picture.",
        answer: "ScrumMaster",
    },
    {
        question: "You are well organized.",
        answer: "ScrumMaster",
    },
    {
        question: "You often mentor and teach others new skills.",
        answer: "TechLead",
    },
    {
        question: "People often come to you if they are having difficulty with their part of the project.",
        answer: "TechLead",
    },
    {
        question: "You divide up tasks amoung your team.",
        answer: "TechLead",
    },
    {
        question: "People often confide in you when they need help.",
        answer: "TechLead",
    },
    {
        question: "You are often the most hands-on person in a project.",
        answer: "TechChaser",
    },
    {
        question: "You enjoy being creative and taking on challenges.",
        answer: "TechChaser",
    },
    {
        question: "You are often the first to find a solution while working on a project.",
        answer: "TechChaser",
    },
];

// Stores the choices separate. Helps to reduce redundant code
const quizChoices =
{
    a:  "Strongly Agree",
    b:  "Agree",
    c:  "Neutral",
    d:  "Disagree",
    e:  "Strongly Disagree",
};
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questions = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuizQuestion = 0
var points = Array(0, 0, 0, 0, 0);
let highestIndex = 0;

loadQuiz() // Driver, Loads the first question
function loadQuiz(){
    deselectAnwsers() // Deselects answer for next question. Prevents accidently clicking the submit button twice.
    const currentQuestion = quizQA[currentQuizQuestion]
    const currentQuizData = quizChoices
    questions.innerText = currentQuestion.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}
function deselectAnwsers(){
  answers.forEach(item => item.checked = false)
  }

function getSelected(){ // Searches and returns selected answer. 
    let answer;
    answers.forEach(items => {
        if(items.checked)
            answer = items.value
    })
    return answer
}

submitBtn.addEventListener('click', () =>{ // Looks for user submitting answer. 
    
    var roles = new Array("Product Owner", "Scrum Master", "QA", "Tech Lead", "Tech Chaser")
    const answer = getSelected()
    if(answer){
        if(quizQA[currentQuizQuestion].answer === "ProductOwner")
            points[0] += parseInt(answer)
        else if (quizQA[currentQuizQuestion].answer === "ScrumMaster")
            points[1] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "QA")
            points[2] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "TechLead")
            points[3] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "TechChaser")
            points[4] += parseInt(answer)
       currentQuizQuestion++
    
    if(currentQuizQuestion < quizQA.length){
        loadQuiz()
    } 
    else{
        for(i = 1; i < 5; i++) {// Single Highest Role
            if(points[i] > points[highestIndex]){ // Compares roles to see which is the highest. 
                highestIndex = i;
             }
        }
        quiz.innerHTML= "Result: Your best suited role(s) is " + roles[highestIndex] 
        for(i=0; i < 5; i++){ // Deals with multiple roles being the same value
            if(points[i] == points[highestIndex] && highestIndex !=i){
       
                quiz.innerHTML+= ", " + roles[i] 
            }
        }
        quiz.innerHTML+="<br><br><br>Email: scrumassignerfeedback@gmail.com if you wish to leave us<br>some feedback about our website!"
    }
}
})