const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

                    }

window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    orifin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__img, .gallery__container, .footer__logo, .footer__description,
            .footer__content, .footer__info`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img`, {origin: 'right'})
sr.reveal(`.platters__card`, {interval: 100})