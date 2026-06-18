// kartu

document.querySelectorAll(".card")
.forEach(card=>{

card.onclick=()=>{

card.classList.toggle("active");

}

});





function goLetter(){

document
.getElementById("letter")
.scrollIntoView({
behavior:"smooth"
});

}





function catTalk(){

alert(
"meow 🐾 Nuraisyah jangan lupa senyum hari ini"
);

}





function catGame(x){


let text=document.getElementById("gameText");


if(x==1){

text.innerHTML=
"🐈 kucing ini bilang: jangan lupa makan ya";

}


if(x==2){

text.innerHTML=
"🐈‍⬛ kucing ini bilang: jangan tidur terlalu malam";

}


if(x==3){

text.innerHTML=
"🐱 kucing ini bilang: kamu berharga, jangan lupa jaga diri";

}


}






function secret(){

document.getElementById("secretText")
.innerHTML=

"🤍 ternyata rahasianya cuma satu... aku berharap Nuraisyah selalu bahagia";


}






function explodeLove(){


for(let i=0;i<100;i++){


let heart=document.createElement("div");


heart.className="heart";

heart.innerHTML="❤️";


heart.style.left=
Math.random()*100+"vw";


heart.style.top="-20px";


heart.style.animationDuration=
(2+Math.random()*5)+"s";



document.body.appendChild(heart);


}


}






// bintang


for(let i=0;i<80;i++){


let star=document.createElement("span");


star.style.position="fixed";

star.style.width="3px";

star.style.height="3px";

star.style.background="white";

star.style.borderRadius="50%";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


document.body.appendChild(star);


}
