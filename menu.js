

// **************************************** //
// ** Change section brightness on scroll ** //
// **************************************** //
// let brightness = 55;

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






// to use for knowing if scrolling up or down
let scrollPosition = [];

// to use to change brightness of background images
// let brightness = getComputedStyle(document.getElementById('desserts')).filter.brightness;
// console.log(brightness);

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

    // if scrolling up
    if (scrollPosition[0] < scrollPosition[1]){
        document.querySelector('header').classList.add('headerBack')
    }
    // if scrolling down
    else {
        document.querySelector('header').classList.remove('headerBack')
    }
}


// **************************************** //
// ***  Starting animations on scroll  *** //
// **************************************** //

// Create observer
const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
                
        // when scrolling to observed elements
        if (entry.isIntersecting) {                    
            
            // change brightness of menu-cards background images
            if (entry.target.id === 'skewer' || entry.target.id === 'desserts') {
                
                // if scrolling down
                // if(scrollPosition[0] > scrollPosition[1]){
                //     document.getElementById('desserts').style.filter = `brightness(${brightness+=3.5}%)`
                // } 
                // //  if scrolling up
                // else{
                //     document.getElementById('desserts').style.filter = `brightness(${brightness-=3.5}%)`
                // }
                                
                
            }
            else {
                // *** Menu Animation *** //
                entry.target.classList.add('slideUp');
            }
        }
    })

});

// Choose elements to observe

const menuDetails = document.querySelectorAll('main ul:not(.menu-card ul)');

menuDetails.forEach(item => {
    observer.observe(item);
})

observer.observe(document.querySelector('.fish-pics'));
observer.observe(document.querySelector('.fish-pics + .with-price'));
observer.observe(document.getElementById('skewer'));
observer.observe(document.getElementById('desserts'));



        
// **************************************** //
// *********  Toggle fish image  ********** //
// **************************************** //

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



// **************************************** //
// ********  Footer dynamic year  ********* //
// **************************************** //

document.querySelectorAll('.footerDate').forEach(item => item.textContent = new Date().getFullYear());

