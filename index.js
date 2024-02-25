
        // **************************************** //
        // ***  Schedules animation on scroll  *** //
        // **************************************** //

        // Create the observer
        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {                    

                    if (entry.target.classList.contains('shedules') ) {
                        entry.target.style.opacity = 1;
                        entry.target.classList.add('slideUp')   
                    }

                    if (entry.target.classList.contains('video-hero')) {
                        entry.target.classList.add('slideX')   
                    }
                }
            })
        });

        // Choose elements to track
        observer.observe(document.querySelector('.schedules'));
        observer.observe(document.querySelector('.video-hero'));



        // **************************************** //
        // ********  Testimonial slider  ********* //
        // **************************************** //

        // const articles = document.querySelectorAll('.testimonials article');
        // let artIndex = 0;

        // function slide() {

        //     articles[artIndex%articles.length].style.transform = "translateX(-100%)";
        //     articles[artIndex%articles.length].classList.add('noOpacity');
        //     articles[(artIndex+1)%articles.length].style.transform = "translateX(0)";
        //     articles[artIndex%articles.length].classList.remove('noOpacity');
        //     artIndex++;
            
        // }


        const slider = document.querySelector('.slider');
        const articles = document.querySelectorAll('.testimonials article');
        let artIndex = 0;
        
        function slide() {
          
            slider.style.transform = `translateX(${artIndex * -100}%)`;
        
            artIndex++;  
          
            if(artIndex === articles.length){ 

                setTimeout(() => {
                    artIndex = 0;
                    slider.style.transform = "translateX(0%)";
                }, 1500);
            }
        }

        setInterval(slide, 1500); 
      
        
        // **************************************** //
        // ********  Footer dynamic year  ********* //
        // **************************************** //

        document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());


