// the slider is an anonymous function
const navSlide = () => {
    // burger 
    const burger = document.querySelector('.burger');
    // the links
    const nav = document.querySelector('.topnav-menu');

    // get all the navlinks
    const navLinks = document.querySelectorAll('.topnav-menu li');

    // when you click on the burger, run a function
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    
    // animate links
        navLinks.forEach((link, index)=>{
            // if the link already has animation
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                // animate the links 
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        
        });
    });
}

// call the above function
navSlide();