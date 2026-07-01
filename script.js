const text='Happy Doctor\'s Day, My Beautiful Doctor ❤️';
let i=0;
function type(){
 if(i<text.length){
  document.getElementById('typing').innerHTML+=text.charAt(i++);
  setTimeout(type,70);
 }
}
type();

document.getElementById('startBtn').onclick=()=>{
 document.getElementById('content').classList.remove('hidden');
 document.getElementById('content').scrollIntoView({behavior:'smooth'});
}

document.getElementById('flowerBtn').onclick=()=>{
 document.getElementById('message').classList.remove('hidden');
 for(let j=0;j<80;j++){
   const h=document.createElement('div');
   h.className='heart';
   h.innerHTML=Math.random()>0.5?'💖':'🌸';
   h.style.left=Math.random()*100+'vw';
   h.style.animationDuration=(3+Math.random()*4)+'s';
   document.body.appendChild(h);
   setTimeout(()=>h.remove(),7000);
 }
}

setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart';
 h.innerHTML='✨';
 h.style.left=Math.random()*100+'vw';
 h.style.animationDuration='6s';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),6000);
},500);
