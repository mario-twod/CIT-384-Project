const Homebutton = document.querySelector('#homeBtn');
const Contactbutton = document.querySelector('#contactBtn');
const Aboutbutton = document.querySelector('#aboutmeBtn');
const Lightbutton = document.querySelector('#lightbtn');
const Darkbutton = document.querySelector('#darkbtn');

Homebutton.addEventListener('click', function(){
    console.log('Home Button Clicked');
});


Contactbutton.addEventListener('click', function(){
    console.log('Contact Button Clicked');
});

Aboutbutton.addEventListener('click', function(){
    console.log('About Button Clicked');
});

Lightbutton.addEventListener('click', function(){
    document.body.classList.toggle('light');
});

Darkbutton.addEventListener('click', function(){
    document.body.classList.toggle('dark');
});