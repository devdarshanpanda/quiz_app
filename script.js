let quizQuestions=[
    {
        question:"What is the name of person which controls a football match",
        a:"A referee",
        b:" An Umpire",
        c:"A spectator",
        d:"A goalkeeper",
        answer:"A referee"
    },
    {
        question:"Against which team did Virender Sehwag make his one day international debut",
        a:"New Zealand",
        b:" Sri lanka",
        c:"Pakistan",
        d:"South Africa",
        answer:"Pakistan"
    },
    {
        question:"Which one of the following Cricketers has been declared by the ICC as 'Cricketer of the Twentieth Century '",
        a:"Sachin Tendulkar",
        b:"Kapil Dev",
        c:"Rahul Dravid",
        d:"Anil Kumble",
        answer:"Kapil Dev"
    },
    {
        question:"Who has the highest batting average in cricket history",
        a:"Virat Kohli",
        b:"Temba Bavuma",
        c:"Sir don bradman",
        d:"Sachin Tendulcar",
        answer:"Sir don bradman"
    },
    {
        question:" The National Game of india is",
        a:"Hockey",
        b:"cricket",
        c:"footbal",
        d:"kabadi",
        answer:"Hockey"
    },
    {
        question:"Syed Mushtaq Ali Trophy is related to which game ?",
        a:"Footabl",
        b:"Kabadi",
        c:"Cricket",
        d:"Golf",
        answer:"Cricket"
    },

    {
        question:"Who is the first Indian woman to win an Asian Games gold in 400m run",
        a:"M.L. Valsamma",
        b:"P.T. Usha",
        c:"Kamaljit Sandhu",
        d:"K.Malleshwari",
        answer:"P.T. Usha"
    },

    {
        question:"With which game does Davis Cup is associated",
        a:"Hockey",
        b:"Lawn Tennis",
        c:"Polo",
        d:"Table Tennis",
        answer:"Lawn Tennis"
    },
    {
        question:"Who has own the golden bat 2 times in champion trophy",
        a:"M.s Dhoni",
        b:"Yubraj singh",
        c:"Virat Kohli",
        d:"Shikhar Dhawan",
        answer:"Shikhar Dhawan"
    },
    {
        question:"What is the full form of DLS method",
        a:"David lewis method",
        b:"Duckworth-lewis-stren-methord",
        c:"Duckworth-lewis methord ",
        d:"David-lewis-stren methord",
        answer:"Duckworth-lewis-stren-methord"
    }

]


let radio=document.getElementsByName("option")

let questions=document.getElementById("Questions");
let a=document.getElementById("A")
let b=document.getElementById("B")
let c=document.getElementById("C")
let d=document.getElementById("D")

let finish=document.getElementById("finish")
let scoreValue=document.getElementById("score")
let quiz_container=document.getElementById("quiz-container")
let result=document.getElementById("result")

let counter=0;
let score=0;
function start(){
questions.innerHTML=quizQuestions[counter]. question
a.innerHTML=quizQuestions[counter].a
b.innerHTML=quizQuestions[counter].b
c.innerHTML=quizQuestions[counter].c
d.innerHTML=quizQuestions[counter].d

}
start()

let next=document.getElementById("btns")
next.addEventListener("click",()=>{
    
    radio.forEach((item)=>{
        if(item.checked){

            // console.log(quizQuestions[counter][item.id]);
            // console.log(quizQuestions[counter].answer);
           
            if(quizQuestions[counter][item.id]==quizQuestions[counter].answer){
            score++
            // console.log(score);
            // console.log(counter);
            }
            counter++
        
    if(counter<quizQuestions.length){
        start()
        item.checked=false
    }else{
        
        quiz_container.style.display="none"

       
        result.style.display="block"

        finish.innerHTML="Game Complited"
        scoreValue.innerHTML="Your Score Is:"+" "+score 
    }

}
})
})
let restart=document.getElementById("restart")
restart.addEventListener("click",()=>{
    window.location.reload();
})

