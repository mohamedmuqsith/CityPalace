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

var sliderContainer=document.getElementById('sliderContainer')
var slider=document.getElementById('slider')
var card=slider.getElementsByTagName('div')

var elementToShow=3;
if(document.body.clientWidth<1000){
    var elementToShow=1;
}


var sliderContainerWidth=sliderContainer.clientWidth
var cardWidth=sliderContainerWidth/elementToShow

slider.style.width=card.length*cardWidth+'px'

for (let index = 0; index < card.length; index++) {
    const element = card[index];
    element.style.width=cardWidth+'px'
    
}

function prv(){
    if(+slider.style.marginLeft.slice(0,-2)!=cardWidth*(card.length-elementToShow))
    slider.style.marginLeft =  ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px'

}
function next(){
    if(+slider.style.marginLeft.slice(0,-2)!=0)
        slider.style.marginLeft =  ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'

}