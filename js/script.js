const toggleEl = document.querySelectorAll('.faq-toggle');
toggleEl.forEach(toggle => {
   toggle.addEventListener('click', ()=>{
       toggle.parentNode.classList.toggle('active');
   }) 
});