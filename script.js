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