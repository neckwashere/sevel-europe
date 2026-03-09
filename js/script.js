// NAVBAR ACTIVE LINK
emailjs.init("_Cd6mFQBqvkM-nqJ1");
document.getElementById("contact-form").addEventListener("submit", function(e) {

e.preventDefault();

emailjs.sendForm(
"service_o1ez14y",
"template_no66nog",
this
)

.then(function() {

alert("Message sent successfully!");

}, function(error) {

alert("Failed to send message.");

});

});

const links = document.querySelectorAll("nav a");

links.forEach(link => {
if(link.href === window.location.href){
link.style.color = "#ffd000";
}
});


// IMAGE ZOOM

const images = document.querySelectorAll("img");

images.forEach(img => {

img.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.9)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.cursor = "zoom-out";

const bigImg = document.createElement("img");

bigImg.src = img.src;
bigImg.style.maxWidth = "85%";
bigImg.style.maxHeight = "85%";
bigImg.style.borderRadius = "10px";

overlay.appendChild(bigImg);

overlay.addEventListener("click", () => {
overlay.remove();
});

document.body.appendChild(overlay);

});

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(".product-card, .feature");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

});

cards.forEach(card => {

card.style.opacity = 0;
card.style.transform = "translateY(30px)";
card.style.transition = "0.6s";

observer.observe(card);

});
