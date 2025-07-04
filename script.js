let gameSeq=[];
let userSeq=[];

let btns=["yellow" , "red", "purple" ,"green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }
    levelUp();

})
function gameFlash(btn){
   btn.classList.add("flash") ;
   setTimeout(function(){
    btn.classList.remove("flash");
   }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash") ;
    setTimeout(function(){
     btn.classList.remove("userflash");
    }, 250)
 }


 function checkAns(idx){
    console.log("current level", level);
   
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp, 1000); 
        }

    }
    else{
        h2.innerHTML=`Game over !Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } , 100);
        reset();
    }
 }


function levelUp(){
    level++;
    userSeq=[];
    h2.innerText=`level ${level}`;
    let randomInd=Math.floor(Math.random()*3);
    let randColor=btns[randomInd];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randomInd);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1); 
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    level=0;
    gameSeq=[];
    userSeq=[];
    started=false;
}