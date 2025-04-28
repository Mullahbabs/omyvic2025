function generateInvitation() {
    const nameInput = document.getElementById('guest-name');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Please enter your name');
        return;
    }
    
    // Personalize the invitation
    document.getElementById('personalized-name').textContent = name;
    
    // Hide form and show invitation
    document.getElementById('name-form').classList.add('hidden');
    document.getElementById('invitation-card').classList.remove('hidden');
    
    // Scroll to the invitation
    document.getElementById('invitation-card').scrollIntoView({ behavior: 'smooth' });
}

function resetInvitation() {
    // Clear the input
    document.getElementById('guest-name').value = '';
    
    // Show form and hide invitation
    document.getElementById('name-form').classList.remove('hidden');
    document.getElementById('invitation-card').classList.add('hidden');
    
    // Scroll to the form
    document.getElementById('name-form').scrollIntoView({ behavior: 'smooth' });
}
function generateInvitation() {
    const nameInput = document.getElementById('guest-name');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Please enter your name');
        return;
    }
    
    document.getElementById('personalized-name').textContent = name;
    document.getElementById('name-form').classList.add('hidden');
    document.getElementById('invitation-card').classList.remove('hidden');
    document.getElementById('invitation-card').scrollIntoView({ behavior: 'smooth' });
}

function resetInvitation() {
    document.getElementById('guest-name').value = '';
    document.getElementById('guest-email').value = '';
    document.getElementById('name-form').classList.remove('hidden');
    document.getElementById('invitation-card').classList.add('hidden');
    document.getElementById('success-message').classList.remove('show');
    document.getElementById('name-form').scrollIntoView({ behavior: 'smooth' });
}

function submitRSVP() {
    const name = document.getElementById('guest-name').value.trim();
    const email = document.getElementById('guest-email').value.trim();
    
    if (!name) {
        alert('Please enter your name first');
        return;
    }
    
    // Prepare email data
    const emailData = {
        name: name,
        email: email || 'Not provided',
        message: `${name} has viewed the wedding invitation and submitted their RSVP.`
    };
}
// Initialize EmailJS with your credentials
(function() {
    emailjs.init("S-xQwmEV2I8oavOc1"); // Replace with your EmailJS user ID
})();

function generateInvitation() {
    const nameInput = document.getElementById('guest-name');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Please enter your name');
        return;
    }
    
    document.getElementById('personalized-name').textContent = name;
    document.getElementById('name-form').classList.add('hidden');
    document.getElementById('invitation-card').classList.remove('hidden');
    document.getElementById('invitation-card').scrollIntoView({ behavior: 'smooth' });
}

function resetInvitation() {
    document.getElementById('guest-name').value = '';
    document.getElementById('guest-email').value = '';
    document.getElementById('name-form').classList.remove('hidden');
    document.getElementById('invitation-card').classList.add('hidden');
    document.getElementById('name-form').scrollIntoView({ behavior: 'smooth' });
}

function submitRSVP() {
    const name = document.getElementById('guest-name').value.trim();
    const email = document.getElementById('guest-email').value.trim();
    
    if (!name) {
        alert('Please enter your name first');
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Prepare email parameters
    const templateParams = {
        guest_name: name,
        guest_email: email || 'Not provided',
        reply_to: email || 'no-reply-to@example.com',
        date: new Date().toLocaleString()
    };
    
    // Send email using EmailJS
    emailjs.send('service_5tf829h', 'template_y9u8ba5',  templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showSuccessModal();
        }, function(error) {
            console.log('FAILED...', error);
            showSuccessModal();
        })
        .finally(() => {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit RSVP';
            submitBtn.disabled = false;
        });
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('show');
    
    // Add multiple confetti elements
    for (let i = 0; i < 20; i++) {
        createConfetti();
    }
}

function closeModal() {
    document.getElementById('success-modal').classList.remove('show');
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.innerHTML = ['❦', '✿', '🌸', '💮', '🏵️'][Math.floor(Math.random() * 5)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.fontSize = (Math.random() * 10 + 10) + 'px';
    confetti.style.color = ['#f8c8dc', '#d4a59a', '#8db596', '#f9d5e5', '#e8b4bc'][Math.floor(Math.random() * 5)];
    document.querySelector('.modal-content').appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}