const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.menu-burger');
const btnClose = document.querySelector('.btn-close');
const blackout = document.querySelector('.blackout');
const body = document.querySelector('body');

menuBurger.style.display = 'none';
blackout.style.display = 'none';

const showHideBurgerMenu = (event) => {

    if (menuBurger.style.display == 'none') {
        menuBurger.style.display = 'flex';
        blackout.style.display = 'block';
        body.style.overflow = 'hidden';
    }

    else if (menuBurger.style.display == 'flex') {
        menuBurger.style.display = 'none';
        blackout.style.display = 'none';
        body.style.overflow = 'auto';
    }

}

burger.addEventListener('click', showHideBurgerMenu);
btnClose.addEventListener('click', showHideBurgerMenu);
blackout.addEventListener('click', showHideBurgerMenu);

const testimonialPopups = document.querySelectorAll('.testimonial-popup');
const blackoutTestimonial = document.querySelector('.blackout-testimonial');
const btnCloseTestimonials = document.querySelectorAll('.btn-close-testimonial');

blackoutTestimonial.style.display = 'none';

testimonialPopups.forEach(testimonial => {

    testimonial.addEventListener('click', () => {

        if (window.innerWidth <= 640) {

            testimonial.style.position = 'absolute';
            testimonial.style.top = '50%';
            testimonial.style.left = '50%';
            testimonial.style.zIndex = '7';
            testimonial.style.transform = 'translate(-50%, -50%)';
            testimonial.style.width = '320px';
            testimonial.style.height = '428px';
            testimonial.style.padding = '20px 36px 17px 17px';
            testimonial.style.background = '#FFFFFF';
            testimonial.style = '';

            testimonial.querySelector('.testimonial-bg').style.height = '100%';
            testimonial.querySelector('.testimonial').style.width = '100%';
            testimonial.querySelector('.testimonial').style.height = '100%';
            testimonial.querySelector('.btn-close-testimonial').style.display = 'flex';
            body.style.overflow = 'hidden';

        }

    })

});

btnCloseTestimonials.forEach((btnCloseTestimonial, i) => {

    btnCloseTestimonial.addEventListener('click', () => {
        console.log(i);

        testimonialPopups[i].style = '';
        testimonialPopups[i].querySelector('.testimonial-bg').style.height = '';
        testimonialPopups[i].querySelector('.testimonial').style.width = '';
        testimonialPopups[i].querySelector('.testimonial').style.height = '';
        btnCloseTestimonial.style.display = 'none';
        blackoutTestimonial.style.display = 'none';
        body.style.overflow = 'auto';
        btnCloseTestimonial.style.display = 'none';

    });

});
