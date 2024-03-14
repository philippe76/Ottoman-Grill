
let scrollPosition = [];

window.onscroll = function() {
    
    // **************************************** //
    // ***** Add header border on scroll ****** //
    // **************************************** //
    
    if (window.scrollY > 0){  
        document.querySelector('header').classList.add("header-border");
    }
    else {
        document.querySelector('header').classList.remove("header-border");
    }


    // **************************************** //
    // ** Get Header back when scrolling up ** //
    // **************************************** //

    scrollPosition.splice(1); // delete too old position
    scrollPosition.unshift(Math.round(window.scrollY)); // Add new position

    if (scrollPosition[0] < scrollPosition[1]){
        // document.getElementById('desserts').style.filter = `brightness(${brightness+=3.5}%)`
        document.querySelector('header').classList.add('headerBack')
    }
    else {
        document.querySelector('header').classList.remove('headerBack')
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


