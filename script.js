const quizData =[
    {
        question:"What does Html Stands for?",
        a:"Hyper Text Makeup Language",
        b:"Hyper Text Markup Language",
        c:"Home Tool Markup Language",
        d:"Hyper Text Making Language",
        correct:"b"
    },
    {
        question: "What does CSS Stands for?",
        a: "Cascading Style Sheets",
        b: "Color Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        correct:"a"
    },
    {
        question:"Which language runs in a web browser?",
        a:"Python",
        b:"Java",
        c:"JavaScript",
        d:"C++",
        correct:"c"
    }
];
const questionE1 = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");

let currentQuiz = 0;
let score =0;

loadQuiz();
function loadQuiz(){
    deselectAnswer();    // unselect radio button
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText=currentQuizData.question;
      
    a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

 function deselectAnswer(){
    answerEls.forEach((el)=>
el.checked = false
    );
 }
//function to get the user selected answer
 function getSelected(){
    let answer;
    answerEls.forEach((answerE1)=>
    {
        if(answerE1.checked)
        {
            answer = answerE1.id;
        }
    });
    return answer;
 }
 submitBtn.addEventListener("click",()=>{

 
//get user selected answer
 const answer = getSelected();

 if(answer){
    if(answer===quizData[currentQuiz].correct)
    {
        score++;
    }
    currentQuiz++;//move to the next question
    if(currentQuiz<quizData.length)
    {
        loadQuiz();
    }
    else{
//show final result message
quiz.innerHTML =`<h2>You answered ${score}/${quizData.length} Question Correctly </h2>
<button onclick="location.reload()">Reload</button>`;
   
}
 }
});