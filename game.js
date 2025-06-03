let userScore = 0;
let CPUScore = 0;

const choices = document.querySelectorAll(".choice");
let playagain = document.querySelector(".msg-container2")
const msg = document.getElementById("msg");

const genCPUchoice = () =>{
    const options = ["rock" , 'paper' , 'scissors'];
    const ridx = Math.floor(Math.random()*3);
    return options[ridx];

}

const playgame = (userchoice)=>{
    console.log(`Userchoice = `,userchoice);
    

    //cpu turn
    const CPUchoice = genCPUchoice();
    console.log('CPUchoice = ',CPUchoice);
    if(userchoice == CPUchoice){
        msg.innerText = `Match is Draw`;
        console.log(msg);
        msg.style.backgroundColor = "#081b31"
    }
    else if (
        (userchoice === "rock" && CPUchoice === "paper") ||
        (userchoice === "paper" && CPUchoice === "scissors") ||
        (userchoice === "scissors" && CPUchoice === "rock")
    ) {
        CPUScore++;
        let cid = document.querySelector("#CPU-score");
        cid.innerText = CPUScore;
        msg.innerText = `You lose! ${CPUchoice} beats ${userchoice}.`;
        console.log(msg);
        msg.style.backgroundColor = "RED";
    }
    else{
        userScore++;
        let uid = document.querySelector("#user-score");
        uid.innerText = userScore;
        msg.innerText = `You win! ${userchoice} beats ${CPUchoice}.`;
        console.log(msg);
        msg.style.backgroundColor = "Green";
    }

}



choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

        playagain.addEventListener("click",resetgame );
    });

});

const resetgame = () =>{
    userScore = 0;
    CPUScore = 0;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("CPU-score").innerText = CPUScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
}
