// Navbar toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
  } else {
    alert('Thank you for your message!');
  }
});
