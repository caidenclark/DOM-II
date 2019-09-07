// Your code goes here
let logo = document.querySelector('.logo-heading');
let text = document.getElementsByTagName('p');

logo.addEventListener("mouseover", function( event ) {   
    event.target.style.transform = "scale(1.5)";
  
    setTimeout(function() {
      event.target.style.transform = "scale(1.0)";
    }, 500);
  }, false); 

// Keydown and Keyup

document.addEventListener('keydown', logKey);

function logKey() {
    event.target.style.backgroundColor = 'lightblue';
}

document.addEventListener('keyup', logKey2);

function logKey2() {
    event.target.style.backgroundColor = 'white';
}

// Wheel

let scale = 1;
const image = document.querySelector('.img-content')


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    image.style.transform = `scale(${scale})`;
  }

  image.onwheel = zoom;



// Drag & Drop

var dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
    dragged = event.target;

    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    if (event.target.className == "text-content") {
        event.target.style.background = "purple";
    }
}, false);

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "text-content") {
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function(event) {
    event.preventDefault();

    if (event.target.className == "text-content") {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );    
    }
}, false);

// Load

window.addEventListener('load', (event) => {
    alert("Page has finished loading!");
})

//Focus

let navBar = document.querySelectorAll('.nav-link');

navBar.forEach((navigation) => {
navigation.addEventListener('focus', (event) => {
    event.preventDefault();   
    event.target.style.background = 'pink';
    event.preventDefault();
})

navigation.addEventListener('blur', (event) => {
    event.preventDefault();   
    event.target.style.background = '';    
  });


}); 

// Resize

window.addEventListener('resize', (event) => {
    const changeTitle = 
    document.querySelector('h2');
    changeTitle.textContent = '!suB nuF oT emocleW'
})

// Click

const images = document.querySelectorAll('img');

images.forEach((image) => {
    image.addEventListener('click', event => {
        image.src = "https://images.unsplash.com/photo-1512229146678-994d3f1e31bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
    })
})

// Double Click

const btn = document.querySelectorAll('.btn');

btn.forEach((button) => {
    button.addEventListener('dblclick', (event) => {
        event.target.style.color = 'green';
        event.target.style.background = 'blue';
    })
})

  