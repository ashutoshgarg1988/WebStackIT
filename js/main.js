
document.querySelectorAll('.faq-item button').forEach(btn=>{
btn.addEventListener('click',()=>{const a=btn.nextElementSibling;a.style.display=a.style.display==='block'?'none':'block';});
});
const track=document.querySelector('.carousel-track');
if(track){
const cards=[...document.querySelectorAll('.service-card')];
let index=0;
const cardWidth=344;
document.querySelector('.next').onclick=()=>{if(index<cards.length-1) index++; track.style.transform=`translateX(-${index*cardWidth}px)`;};
document.querySelector('.prev').onclick=()=>{if(index>0) index--; track.style.transform=`translateX(-${index*cardWidth}px)`;};
}
