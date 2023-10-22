//  services toggle 

const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}`;
    

}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })

}
servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active');
    })
})

getService('frontend');


// =======================MIXITUP 

const containerEl = document.querySelector('.projects__container');


var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});
mixer.filter('*');


const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navClosebtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {

    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navClosebtn.style.display = 'inline-block';

}

const closeNavHandler = () => {

    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navClosebtn.style.display = 'none';

}

navOpenBtn.addEventListener('click', openNavHandler)
navClosebtn.addEventListener('click', closeNavHandler)

const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768) {
    navItems.forEach(item =>{
     item.addEventListener('click',closeNavHandler )
    })
}


// dark theme toggle ///

const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;

      themeBtn.innerHTML = "<i class = 'uil   uil-sun'></i>"

      window.localStorage.setItem('theme',bodyClass);
    }else{
        bodyClass = '';
        document.body.className = bodyClass
        themeBtn.innerHTML = "<i class = 'uil   uil-moon'></i>"
    }
    
})

window.addEventListener('load', () => {
   document.body.className = window.localStorage.getItem('theme') 
})