const quizData = [
    {
        question: "1. Kam nechodí slunce, ...",
        a: "tam je zima.",
        b: "tam chodí lékař.",
        
        correct: "b",
    },
    {
      question: "2. Každá liška ... ",
      a: "není myška.",
      b: "svůj ocas chválí.",
      
      correct: "b",
  },
  {
    question: "3. Každý chvilku ...",
    a: "papá Milku.",
    b: "tahá pilku.",
    
    correct: "b",
},
{
  question: "4. Kto se bojí, ...",
  a: "nesmí do lesa.",
  b: "všechno pojí.",
  
  correct: "a",
},{
  question: "5. Kto pozdě chodí, ...",
  a: "musí jet lodí.",
  b: "sám sobě škodí.",
  
  correct: "b",
},
{
question: "6. Oko za oko, ...",
a: "buřt za buřt.",
b: "zub za zub.",

correct: "b",
},{
  question: "7. Pes, který štěká, ...",
  a: "nemá rád kočky.",
  b: "nekouše.",
  
  correct: "b",
},
{
question: "8. Všude dobře, ...",
a: "doma nejlépe.",
b: "milý bobře.",

correct: "a",
},{
  question: "9. Žádný učený ...",
  a: "není mučený.",
  b: "z nebe nespadl.",
  
  correct: "b",
},
{
question: "10. Vrána k vráně sadá, ...",
a: "rovný rovného si hledá.",
b: "dokud je mladá.",

correct: "a",
},{
  question: "11. Po bitvě ...",
  a: "je každý generál.",
  b: "je každý hladný.",
  
  correct: "a",
},
{
question: "12. Šaty ...",
a: "dělají člověka.",
b: "chci zlatý.",

correct: "a",
},{
  question: "13. Neštěstí nechodí po horách, ...",
  a: "ale po lidech.",
  b: "raději zatopí v stodolách.",
  
  correct: "a",
},
{
question: "14. Co můžeš udělat dnes, ...",
a: "neodkládej na zítřek.",
b: "to zítra udělá pes.",

correct: "a",
},{
  question: "15. Potrefená husa ...",
  a: "se vždycky ozve.",
  b: "všude chodí bosa.",
  
  correct: "a",
},
{
question: "16. Pro jedno kvítí ...",
a: "slunce nesvítí.",
b: "není už zbytí.",

correct: "a",
},{
  question: "17. Malé ryby - ...",
  a: "velké chyby.",
  b: "taky ryby.",
  
  correct: "b",
},
{
question: "18. Všechna sláva, ...",
a: "špatná káva.",
b: "polní tráva.",

correct: "b",
},{
  question: "19. Koho chleba jíš, ...",
  a: "toho píseň zpívej.",
  b: "toho chválit smíš.",
  
  correct: "a",
},
{
question: "20. Práce kvapná ...",
a: "málo platná.",
b: "býva vadná.",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
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
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })