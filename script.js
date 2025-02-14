// //offer
var offer=document.getElementById('offer')
var X=document.getElementById('close-offer')

X.addEventListener('click',function(){
    offer.style.right='-100%'
})

// side nav

var sidenav=document.getElementById('sidenav')
var menu=document.getElementById('menuicon')
var closenav=document.getElementById('close-nav')

menu.addEventListener('click',function(){
    sidenav.style.left=0
})

closenav.addEventListener('click',function(){
    sidenav.style.left='-50%'
})


// slider-container

var slider = document.getElementById("slider");
var slides = slider.getElementsByTagName("div");
var currentIndex = 0;
var totalSlides = slides.length;

// Detect screen size for responsiveness
var elementsToShow = window.innerWidth < 1000 ? 1 : 1; // Show 1 element at a time
var sliderWidth = document.getElementById("sliderContainer").clientWidth;
var slideWidth = sliderWidth / elementsToShow;

// Set slider width dynamically
slider.style.width = totalSlides * slideWidth + "px";

for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = slideWidth + "px";
}

// Function to slide to previous image
function prv() {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// Function to slide to next image
function next() {
    if (currentIndex < totalSlides - elementsToShow) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}
