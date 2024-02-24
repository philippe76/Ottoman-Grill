
        // **************************************** //
        // ***  Schedules animation on scroll  *** //
        // **************************************** //

        // Create the observer
        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // It's visible. Add the animation class here!
                    entry.target.style.opacity = 1;
                    entry.target.classList.add('slideUp')   
               }
            })
        });

        // Choose element to track
        observer.observe(document.querySelector('.schedules'));



        // **************************************** //
        // ********  Testimonials slider  ********* //
        // **************************************** //

        const testimonials = document.querySelectorAll('.testimonials article');
        
        // testimonials.forEach( item => {
        //     item.style.display = item.classList.contains('active') ? "block" : "none";
        // })

        // function slideLeft(article) {
        //     article
        // }

        let artIndex = 0;
        window.setInterval(function(){
            // testimonials[artIndex].style.transform = "translateX(-100%)";
            // testimonials[artIndex%testimonials.length].style.transform = "translateX(-100%)";
            testimonials[artIndex%testimonials.length].style.transform = "translateX(-100%)";

            testimonials[artIndex%testimonials.length].classList.toggle('active')
            artIndex++;
        },1000)

        
        
        // **************************************** //
        // ********  Footer dynamic year  ********* //
        // **************************************** //

        document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());