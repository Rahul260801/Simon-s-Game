let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    // console.log("game started");
    if(started==false){
        console.log("game is now started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);

}
function levelup() {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random btn choose
    let randidx=Math.floor(Math.random()*3);
    let randclr=btns[randidx];
    let randbtn= document.querySelector(`.${randclr}`);
    // console.log(randidx);
    // console.log(randclr);
    // console.log(randbtn);
    gameseq.push(randclr);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
    // console.log("curr level",level);
    // let idx=level-1;

    if(userseq[idx]===gameseq[idx]){
        // console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,750);
        }
    }
    else{
        h2.innerHTML=`Game over buddy! Your score was <b>${level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    //  console.log("button was pressed");
    // console.log(this);
    let btn=this;
    userflash(btn);

    userclr=btn.getAttribute("id");
    // console.log(userclr);
    userseq.push(userclr);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}