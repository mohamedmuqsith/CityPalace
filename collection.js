// offer 

var offer=document.getElementById('offer')
var closeoffer=document.getElementById('close-offer')

offer.addEventListener('click',function(){
    offer.style.display='none'
}
)

// side nav
var sidenav=document.getElementById('sidenav')
var closenav=document.getElementById('close-nav')
var menuicon=document.getElementById('menuicon')

menuicon.addEventListener('click',function(){ 
    sidenav.style.left=0
})

closenav.addEventListener('click',function(){
    sidenav.style.left='-50%'
})

var search = document.getElementById('search');
var image1 = document.getElementById('image1');

search.addEventListener('click', function() { 
    if (image1.style.display === 'flex') {
        image1.style.display = 'none'; 
    } else {
        image1.style.display = 'flex'; 
    }
});
