// script.js
console.log("CV Template loaded!");

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

// funcție pentru animare timeline la scroll
function revealTimeline() {
  const items = document.querySelectorAll(".timeline-item");
  const windowHeight = window.innerHeight;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);

// Inițializează EmailJS
emailjs.init("TA_CHEIE_PUBLICA"); // ex: emailjs.init("vT4jh5X8Jp1AbC")

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_id', 'template_id', this)
    .then(function() {
      alert("Mesaj trimis cu succes!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Eroare la trimitere. Încearcă din nou!");
      console.log(error);
    });
});


function revealOnScroll() {
  const revealItems = document.querySelectorAll(".project-item, .testimonial-item, .education-item, .timeline-item");
  const windowHeight = window.innerHeight;

  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



document.getElementById('priceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const service = document.getElementById('service').value;
  const urgency = document.getElementById('urgency').value;
  let price = 0;

  if (service === 'web') price = 100;
  else if (service === 'repair') price = 50;
  else if (service === 'consult') price = 70;

  if (urgency === 'urgent') price += 20;

  document.getElementById('price').textContent = price + '€';
});



