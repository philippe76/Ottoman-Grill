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
              
        function toggleFish(fishName, caret) {
            
            console.log('on click : ' + displayedFish);                

            if ((caret === 'up' && displayedFish === 'raw') || 
                (caret === 'down' && displayedFish === 'cooked')) {
                document.querySelector('img[src*="raw-fish"]').style.display = 'block';
                document.querySelector(`img[src*="raw-fish"]`).style.maskImage = 'linear-gradient(#000 50%, transparent 0)';
                document.querySelector(`img[src*="cooked-fish"]`).style.maskImage = 'linear-gradient(transparent 50%, #000 0)';
                displayedFish = 'half';  
            }

            else if (caret === 'down' && displayedFish !== 'cooked') {
                document.querySelector(`img[src*="${fishName}-fish"]`).style.maskImage = "unset";
                if (displayedFish === 'half') {
                    console.log('HERE');

                }
                else {

                }
                document.querySelector('img[src*="raw-fish"]').style.display = 'block';
                // document.querySelector('img[src*="cooked-fish"]').style.maskImage = 'linear-gradient(#000 50%, transparent 0)';
                displayedFish = fishName; 
            }
            else {
                document.querySelector(`img[src*="${fishName}-fish"]`).style.maskImage = "unset";
                document.querySelector('img[src*="raw-fish"]').style.display = fishName !== 'cooked' ? 'block' : 'none'; 
                displayedFish = fishName; 
            }

        //  DO NOT WORK FOR HALF AND DOWN
                console.log('after click : ' + displayedFish); 
            }      
        
        document.getElementById('dropRawFish').onclick = () => toggleFish('raw', 'down');        
        document.getElementById('dropCookedFish').onclick = () => toggleFish('cooked', 'up');


        // HANDLE FOOTER DYNAMIC YEAR 
        document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());
