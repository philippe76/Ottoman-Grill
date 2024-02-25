
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
        // ********  Testimonial slider  ********* //
        // **************************************** //

        const articles = document.querySelectorAll('.testimonials article');
        let artIndex = 0;

        function slide() {

            articles[artIndex%articles.length].style.transform = "translateX(-100%)";
            articles[artIndex%articles.length].classList.add('noOpacity');
            articles[(artIndex+1)%articles.length].style.transform = "translateX(0)";
            articles[artIndex%articles.length].classList.remove('noOpacity');
            artIndex++;
            
        }



        setInterval(slide, 1000); 

       

        
        
        // **************************************** //
        // ********  Footer dynamic year  ********* //
        // **************************************** //

        document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());


