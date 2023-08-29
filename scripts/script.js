// scrollToTop functionality 

const scrollToTop = document.querySelector('.scrollToTop');
scrollToTop.addEventListener('click', () => {
    window.scrollTo({top:0});
});
window.addEventListener('scroll', () => {
    window.pageYOffset > 100
     ? (scrollToTop.style.display = 'block')
     : (scrollToTop.style.display = 'none')
});


// Responsive Navbar Functionality

const html = document.querySelector('html');
const responsiveNavbar = document.querySelector('.responsive__navbar');
const responsiveToggle = document.querySelector('.toggle');
responsiveNavbar.addEventListener('click', (e) => e.stopPropagation());

responsiveToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    responsiveNavbar.classList.toggle('show');
});

html.addEventListener('click', () => responsiveNavbar.classList.remove('show'));

const navLinks = document.querySelectorAll('.nav__links');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        responsiveNavbar.classList.remove('show');
    });
});



// contact script 


const scriptURL = 'https://script.google.com/macros/s/AKfycbz9kPoAYEt9bNnexCemHzn9rG3A10Kah2e6VItEMT_YohXFLKtDlaTJiJEsEJ5O-8Vq/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
            
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 2000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
