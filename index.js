
// **************************************** //
// ***** Add header border on scroll ****** //
// **************************************** //

window.onscroll = function() {

    if (window.scrollY > 0){  
        document.querySelector('header').classList.add("header-border");
    }
    else {
        document.querySelector('header').classList.remove("header-border");
    }

}


// **************************************** //
// ********  Testimonial Slider  ********* //
// **************************************** //

const slider = document.querySelector('.slider');
const articles = document.querySelectorAll('.testimonials article');
let artIndex = 0;

function slide() {
    
    // slide container on the left step by step
    slider.style.transform = `translateX(${artIndex * -100}%)`;

    artIndex++;  
    
    if(artIndex === articles.length){ 

        // Get back to first slide
        setTimeout(() => {
            artIndex = 0;
            slider.style.transform = "translateX(0%)";
        }, 1500);
    }
}     

// Fire slider
setInterval(slide, 1500)


// **************************************** //
// ***  Starting animations on scroll  *** //
// **************************************** //

// Create observer
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        // when scrolling to observed elements
        if (entry.isIntersecting) {                    

            // *** Schedule Animation *** //
            if (entry.target.classList.contains('schedules')) {
                entry.target.classList.add('slideUp');  
            }
            
            // *** Video Text Animation *** //
            if (entry.target.classList.contains('video-hero')) {
                entry.target.classList.add('slideX');
            }
        }
    })
});

// Choose elements to observe
observer.observe(document.querySelector('.schedules'));
observer.observe(document.querySelector('.video-hero'));


// **************************************** //
// ********  Footer dynamic year  ********* //
// **************************************** //

document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());


