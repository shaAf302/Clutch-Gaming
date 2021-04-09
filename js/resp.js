burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
navright=document.querySelector('.navright')

burger.addEventListener('click',()=>{

    navright.classList.toggle('v-nav');
    navlist.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})