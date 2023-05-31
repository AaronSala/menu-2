const menu=document.getElementById('menu');
const bars=document.getElementById('bars');
const close=document.getElementById('close')

bars.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
       
    }
    else{
        
        menu.classList.add('hidden')
       
    }
})

// bars.addEventListener('click', ()=>{
// menu.style.display='block';
// bars.innerHTML=close.innerHTML;
// });
//close.addEventListener('click', ()=>{
//menu.style.display='none';
//close.innerHTML=bars.innerHTML;
//menu.style.background='black'
//});