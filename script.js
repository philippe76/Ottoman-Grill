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
            // if (window.scrollY > 1940)  {

            //     scrollPosition.splice(1); // delete too old position
            //     scrollPosition.unshift(Math.round(window.scrollY)); // Add new position

            //     // if scrolling down
            //     if(scrollPosition[0] > scrollPosition[1]){
            //         document.getElementById('desserts').style.filter = `brightness(${brightness+=3.5}%)`
            //     } 
            //     //  if scrolling up
            //     else{
            //         document.getElementById('desserts').style.filter = `brightness(${brightness-=3.5}%)`
            //     }
            // }
            // else {
            //     brightness = 55;
            // }
        }

        // TOGGLE DOWN FISH IMAGES ON CLICK

        let displayedFish = 'half';
              
        let toggleButtons = document.querySelectorAll('.fish-pics img + i');
        
        toggleButtons.forEach(btn => btn.onclick = () => toggleFish(btn.dataset.fish, btn.dataset.toggle))
        
        function toggleFish(fishName, caret) {

            if (displayedFish === 'half') {   
                // display down of raw
                document.querySelector(`img[src*="raw-fish"]`).style.maskImage = "unset";

                // mask top of raw for cooked displaying
                document.querySelector('img[src*="raw-fish"]').style.display = fishName !== 'cooked' ? 'block' : 'none';
                
                // disable toggle caret
                document.querySelector(`[data-fish="${fishName}"]`).classList.add('noOpacity');

                // update fish variable
                displayedFish = fishName;    
            }

            else {
                
                // get all carets back
                document.querySelector(`[data-toggle="down"]`).classList.remove('noOpacity');
                document.querySelector(`[data-toggle="up"]`).classList.remove('noOpacity');               

                // mask down of raw
                document.querySelector('img[src*="raw-fish"]').style.maskImage = 'linear-gradient(#000 50%, transparent 0)';


                if (displayedFish === 'cooked' && caret === 'down') {

                    // display top of raw
                    document.querySelector('img[src*="raw-fish"]').style.display = 'block'; 
                }

                // update fish variable
                displayedFish = 'half';  
            }

        }      
        


        // HANDLE FOOTER DYNAMIC YEAR 
        document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());
