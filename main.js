//change navbar styles on Scroll
const nav = document.querySelector('nav');

function toggleNav(){    
    nav.classList.toggle('window-scroll', window.scrollY > 0);    
}

window.addEventListener('scroll', toggleNav)

//Accordion menu
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus'
        }
    })
})


//Open and close nav menu
const menu = document.querySelector('.nav__menu');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');

openMenuBtn.addEventListener('click', () => {
    // menu.classList.add('show');
    menu.style.display = 'flex'
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'inline-block'
});

closeMenuBtn.addEventListener('click', () => {
    // menu.classList.remove('show');
    menu.style.display = 'none'
    openMenuBtn.style.display = 'inline-block'
    closeMenuBtn.style.display = 'none'
})