// Scroll to sections smoothly
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project hover effect or other interactive elements
// Get the modal
var lightbox = document.getElementById('lightbox');

// Get the image and insert it inside the modal
var images = document.querySelectorAll('.project-thumbnail');
var lightboxImg = document.getElementById('lightbox-img');
var captionText = document.getElementById('caption');

images.forEach((img) => {
    img.addEventListener('click', function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    lightbox.style.display = "none";
}
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
AOS.init();
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        // AJAX request to submit the form
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'your-server-endpoint-here', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('form-response').innerText = 'Thank you for your message!';
            } else {
                document.getElementById('form-response').innerText = 'Oops! Something went wrong. Please try again.';
            }
        };
        xhr.send(`name=${name}&email=${email}&message=${message}`);
    } else {
        document.getElementById('form-response').innerText = 'Please fill in all fields.';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazyload");    
    var lazyloadThrottleTimeout;
    
    function lazyload() {
        if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }    
        
        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazyload');
                }
            });
            if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});
// Parallax Scrolling Effect for Floating Icons
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    document.getElementById('icon1').style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
    document.getElementById('icon2').style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
    // Adjust the factors for different parallax speeds
});
const typedText = document.querySelector('.animated-text');
const phrases = ["Hello, I'm Simran Kaur", "Let's Build Together"];
let phraseIndex = 0;
let charIndex = 0;
let currentPhrase = '';
let isDeleting = false;

function type() {
    if (phraseIndex < phrases.length) {
        if (!isDeleting && charIndex <= phrases[phraseIndex].length) {
            currentPhrase = phrases[phraseIndex].slice(0, charIndex++);
            typedText.innerHTML = currentPhrase;
        }
        
        if (isDeleting && charIndex <= phrases[phraseIndex].length) {
            currentPhrase = phrases[phraseIndex].slice(0, charIndex--);
            typedText.innerHTML = currentPhrase;
        }

        if (charIndex == phrases[phraseIndex].length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            setTimeout(type, 300);
        } else {
            setTimeout(type, isDeleting ? 80 : 200);
        }
    } else {
        phraseIndex = 0;
        type();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 500);
});
