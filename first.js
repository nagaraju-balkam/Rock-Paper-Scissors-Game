// let heading=document.getElementById("heading");
// console.dir(heading);
// console.log(heading)
// let headings=document.getElementsByClassName("heading");
// console.dir(document.body.firstChild);
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"belongs to nag";
// let div=document.querySelectorAll(".bha");
// console.dir(div[1]);
// div[0].innerText="nag bab"
// for( d of div)
// {
//     console.log(d.innerText)
// }

// let div=document.querySelector("div");
// // //console.log(div)

// // // let id=div.getAttribute("id")
// // console.log(div.setAttribute("name","babe"));

// div.style.backgroundColor="green";

// let btn=document.createElement("button");
// btn.innerHTMl="click me";
// console.log(btn);

// let div=document.querySelector("div");
// div.prepend(btn);

// let newHeading=document.createElement("h1")
// newHeading.innerHTML="<i>Babe Bhavs</i>"

// document.querySelector("body").prepend(newHeading)

// newHeading.remove();

// let btn=document.createElement("button")
// btn.innerHTML="click me babe!"
// console.log(btn);

// document.querySelector("body").prepend(btn)

// let btn=document.querySelector("babe");
 
// btn.addEventListener("click", ()=> {
//     console.log("u click me")
// });

let userScore=0;
let comScore=0;
const Choices = document.querySelectorAll(".Choice");
const msg= document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#computer-score")

const  generateComputerChoice=() =>{
    const options=["rock","paper","scissors"]
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex]
};
// Choices.forEach((Choice) =>{
//     Choice.getAttribute("click", ()=>{
//         const userChoice= Choice.getAttribute("id");
//         playGame(userChoice)
//         });
// });

const drawGame=() =>{
    //console.log("draw game")
    msg.innerText="Draw game. try again!"
    
;}

const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin)
    {
        userScore++;
         userScorePara.innerText=userScore;
         msg.innerText=`YOU WIN! your ${userChoice} beats ${computerChoice}`;
        
        //console.log("you win")
        //msg.innerText="you win"
        
    }
    else{
        comScore++;
        compScorePara.innerText=comScore;
        msg.innerText=`YOU LOSE! ${computerChoice} beats you ${userChoice}`
        //console.log("you lose")
        //msg.innerText="you lose"
    }
};
const playGame=(userChoice) => {
    //console.log("user choice=",userChoice)
    const computerChoice=generateComputerChoice();
    //console.log("compuer choice=",computerChoice)


 if(userChoice === computerChoice){
    drawGame();
}
    else{
    let userWin = true;
     if(userScore==="rock"){
        //scissor,paper
        userWin= computerChoice === "paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock,scissor
    userWin = computerChoice === "scissors" ? false : true;
    }
    else{
        //rock,paper
        userWin=computerChoice === "rock" ? false : true;
    }
showWinner(userWin,userChoice,computerChoice);
    }
};
Choices.forEach((Choice) =>{
    Choice.addEventListener("click", ()=>{
        const userChoice= Choice.getAttribute("id");
        playGame(userChoice)
        });
});
// //const Choices=document.querySelectorAll(".Choice");
// Choices.forEach((Choice)=> {
//     const userChoice=Choice.getAttribute("id")
//     Choice.addEventListener("click",()=>{
//         playGame(userChoice);

//     })
// }
// )