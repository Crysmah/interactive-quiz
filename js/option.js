
  const quizData = [
    {
        question: "You have an eye for spotting errors in a project that others have missed",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "QA",
    },
    {
        question: "People often come to you to confirm details about what the project should be",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ProductOwner",
        
    },
    {
        question:  "You are not afraid to voice your opnion and concerns",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "QA",
    },
    {
        question:  "You offer creative new perspectives on a project",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "QA",
    },
    {
        question:  "You are detailed orineted",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "QA",
    },
    {
        question:  "People often come to you to confirm that they are working on the correct part of the project.",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ProductOwner",
    },
    {
        question:  "Your friends and family would consider you an extrovert",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ProductOwner",
    },
    {
        question:  "You often reach out to absent members in a group to let them know that their absence is noticed.",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ScrumMaster",
    },
    {
        question:  "People often rely on you to ensure that the progress of the group is going smoothly.",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ScrumMaster",
    },
    {
        question:  "You like to look at the big picture",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ScrumMaster",
    },
    {
        question:  "You are well organized",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "ScrumMaster",
    },
    {
        question:  "You often mentor and teach others new skills",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechLead",
    },
    {
        question:  "People often come to you if they are having difficulty with their part of the project",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechLead",
    },
    {
        question:  "You divide up tasks amoung your team",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechLead",
    },
    {
        question:  "People often confide in you when they need help",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechLead",
    },
    {
        question:  "You are often the most hands-on person in a project",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechChaser",
    },
    {
        question:  "You enjoy being creative and taking on challenges",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechChaser",
    },
    {
        question:  "You are often the first to find a solution while working on a project",
        a:  "Strongly Agree",
        b:  "Agree",
        c:  "Neutral",
        d:  "Disagree",
        e:  "Strongly Disagree",
        answer: "TechChaser",
    },
    


];
const quiz= document.getElementById('quiz')
const answers= document.querySelectorAll('.answer')
const questions = document.getElementById('question')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const e_text =document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
var points = Array(0, 0, 0, 0, 0);
let highestIndex = 0;

loadQuiz()
function loadQuiz(){
    deselectAnwsers()
    const currentQuizData = quizData[currentQuiz]
    questions.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}
function  deselectAnwsers(){
  answers.forEach(item => item.checked = false)
    
  }

function getSelected(){
    let answer 
   
    answers.forEach(items => {
        if(items.checked){
            answer = items.value
            
        }
    })
    
    return answer
}

submitBtn.addEventListener('click', () =>{
    
    var roles = new Array("Product Owner", "Scrum Master", "QA", "Tech Lead", "Tech Chaser")
    
   
    const answer = getSelected()
    if(answer){
        
       if(quizData[currentQuiz].answer === "ProductOwner"){
       points[0] += parseInt(answer)
       
       } 
       else if (quizData[currentQuiz].answer === "ScrumMaster"){
        points[1] = answer
        }
        else if(quizData[currentQuiz].answer === "QA"){
            points[2] += parseInt(answer)
            
        }
        else if(quizData[currentQuiz].answer === "TechLead"){
            points[3] = answer
        }
        else if(quizData[currentQuiz].answer === "TechChaser"){
            points[4] = answer
        }
       currentQuiz++
    
    if(currentQuiz < quizData.length){
        loadQuiz()
    } else{
        console.log(points[0])
        console.log(points[1])
        console.log(points[2])
        console.log(points[3])
        for(i = 1; i < 5; i++) {// Single Highest Role
            if(points[i] > points[highestIndex]){ // comparing indexes to find highest value index 
                highestIndex = i;
             }
        }
        quiz.innerHTML= "Result: Your best suited role(s) is " + roles[highestIndex] 
        for(i=0; i < 5; i++){
            if(points[i] == points[highestIndex] && highestIndex !=i){
       
                quiz.innerHTML+= ", " + roles[i] 
            }
        }
       
       

    }
   
   
}
})
