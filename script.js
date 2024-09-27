let timer = 60;
let score =0;
let hitval = 0;

function setScore(){
    score +=10;
    document.getElementById('scoreval').innerText=score
    setHit();
    makeBubble()
}

function timeInterval(){
    let clearint = setInterval(() => {

        if(timer >= 0){
            document.getElementById('timeval').innerHTML = timer;
            timer--;
        }else{
            clearInterval(clearint);
            document.querySelector('.boadrdb').innerHTML = `<div class='score'><h1> GAME OVER  </h1>
            <p>YOUR SCORE IS ${score}</p>
            <button onclick='window.location.reload()'>PLAY AGAIN</button>
            <div>`
        }
    },1000)
}
timeInterval();

function setHit(){
    hitval = Math.floor(Math.random() *10);
    document.getElementById('hitval').innerHTML=hitval
}
setHit();

function makeBubble () {
let bubble='';
for(let i=1 ; i<=133 ; i++){
    let key = Math.floor(Math.random()*10)
    bubble +=`<div class="buuble">${key}</div>`
}
document.querySelector('.boadrdb').innerHTML = bubble;
}

document.querySelector('.boadrdb').addEventListener('click',(details)=>{
    if(Number(details.target.innerText) === Number(hitval)){
        setScore();
    }
    
})

makeBubble();
// 