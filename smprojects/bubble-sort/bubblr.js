// let hitbox=document.querySelector("#hit");
// let timerbox=document.querySelector("#timer");
// let scorebox=document.querySelector("#score");
// let panelbot=document.querySelector("#panelbuttom");

let timer=60;
let hit=0;
let score=0;

// function newBubble(){
//     let bubbleBox='';
//     for(let i=1;i<=100;i++){
        
//         bubbleBox+=`<div class="circle">${Math.floor(Math.random()*i+1)}</div>`
//     document.querySelector("#panelbuttom").innerHTML=bubbleBox;
//         }

// }
function newBubble() {
    let bubbleBox = '';
    let usedNumbers = new Set();
    
    for (let i = 1; i <= 100; i++) {
        let number;
        do {
            number = Math.floor(Math.random() * 100) + 1;
        } while (usedNumbers.has(number));
        
        usedNumbers.add(number);
        bubbleBox += `<div class="circle">${number}</div>`;
    }

    document.querySelector("#panelbuttom").innerHTML = bubbleBox;
}
function timerWork(){
    const time=setInterval(() => {
        timer--;
        document.querySelector("#timer").innerHTML=timer;
        if(timer<=0){
            clearInterval(time);
        }
    }, 1000);
}
function hitOp(){
    hit=Math.ceil(Math.random()*11);
    document.querySelector("#hit").innerHTML=hit;


}
function totalScore(){
    score+=5;
    document.querySelector("#score").innerHTML=score;
}
function clickCirc(){
    document.querySelector("#panelbuttom").addEventListener("click",(event)=>{
        let click=+event.target.textContent;
      if(click===hit){
        hitOp();
        totalScore();
        newBubble();
      }
    })
}
newBubble();
timerWork();
hitOp();
clickCirc();


