        // HANDLE BRIGHTNESS OF BACKGROUND IMAGES ON SCROLL
        let scrollPosition = [];
        let brightness = 55;

        // ADD HEADER BOTTOM BORDER ON SCROLL
        window.onscroll = function() {

            // ADD BORDER TO HEADER 
            if (window.scrollY > 0){  
                document.querySelector('header').classList.add("header-border");
            }
            else {
                document.querySelector('header').classList.remove("header-border");
            }

            // INCREASE - DECREASE BRIGHTNESS OF BACKGROUND
            if (window.scrollY > 1940)  {

                scrollPosition.splice(1); // delete too old position
                scrollPosition.unshift(Math.round(window.scrollY)); // Add new position

                // if scrolling down
                if(scrollPosition[0] > scrollPosition[1]){
                    document.getElementById('desserts').style.filter = `brightness(${brightness+=3.5}%)`
                } 
                //  if scrolling up
                else{
                    document.getElementById('desserts').style.filter = `brightness(${brightness-=3.5}%)`
                }
            }
            else {
                brightness = 55;
            }
        }

        // TOGGLE DOWN FISH IMAGES ON CLICK

        let displayedFish = 'half'

        document.getElementById('dropRawFish').onclick = function() {

            toggleFish('raw');

            // if (displayedFish !== 'cooked') {
            //     document.querySelector('img[src*="raw-fish"]').style.maskImage = "unset";
            //     document.querySelector('img[src*="raw-fish"]').style.display = "block";
            //     displayedFish = 'raw';
            // }
        }
        
        document.getElementById('dropCookedFish').onclick = function() {
            
            toggleFish('cooked');

            // if (displayedFish !== 'raw') {
            //     document.querySelector('img[src*="cooked-fish"]').style.maskImage = "unset";
            //     document.querySelector('img[src*="raw-fish"]').style.display = "none";
            //     displayedFish = 'cooked';
            // }
        } 

        function toggleFish(fishName) {

            displayedFish = fishName;
            document.querySelector(`img[src*="${fishName}-fish"]`).style.maskImage = "unset";
            document.querySelector('img[src*="raw-fish"]').style.display = fishName === 'raw' ? 'block' : 'none'; 
        }


        /*
        
        if (caret === 'down' && fish !== 'cooked')  display rawFish   - update diplayedFish         
        
        if (caret === 'up' && fish !== 'raw')  display cookedFish  - update diplayedFish 

        if (caret === 'up' && fish !== 'half')  display half  - update diplayedFish 
        if (caret === 'down' && fish !== 'half')  display half  - update diplayedFish 


        */


        // HANDLE FOOTER DYNAMIC YEAR 
        document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());
