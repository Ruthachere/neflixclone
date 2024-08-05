const toggleEl = document.querySelectorAll('.faq-toggle');
toggleEl.forEach(toggle => {
   toggle.addEventListener('click', ()=>{
       toggle.parentNode.classList.toggle('active');
   }) 
});

const btn = document.querySelector('.get-started-btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    if (input.value == '') {
        input.focus();
    } else {
         window.location.href = 'reg1.html'; 
    }
    
})