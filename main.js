let boxes = document.querySelectorAll(".box");
let githubLink = document.querySelector("#github-link");
let linkedinLink = document.querySelector("#linkedin-link");
let resetBtn = document.querySelector("#resetGame");
let newGame = document.querySelector("#newGame");
let msgConatianer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let winAudio = new Audio('winningBell.wav');
let startAudio = new Audio('startBell.wav');

githubLink.addEventListener("click", ()=>{
    window.open("https://github.com/chetandotspace")
})
linkedinLink.addEventListener("click", ()=>{
    window.open("https://linkedin.com/in/chetandotspace")
})

let winPatterns= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
]
let turn0=true;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;

        }else{
            box.innerText="X "
            turn0=true;
        }
        box.disabled=true;
        checkWinner();

    });
});

const reset = ()=>{
    
    turn0=true;
    // startAudio.volume=0.2;
    startAudio.play();

    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgConatianer.classList.add("hide");
        
    }

}
resetBtn.addEventListener("click", reset)
newGame.addEventListener("click", reset)
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}
const showWinner=(winner)=>{
    msg.innerText =`'${winner}' is the winner`;
    msgConatianer.classList.remove("hide");


}
const checkWinner= ()=>{
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                
                disableBtn();
                showWinner(pos2Val);
                winAudio.play();
                
            }
        
        };
        

    };
    let count=0;
    for( let box of boxes){

        if (box.innerText=="O"||box.innerText=="X"){
            count++;

        }
    }
    if(count==9){
        msg.innerText=`The Game is Draw`
        msgConatianer.classList.remove("hide");
        winAudio.play();

    }
}
