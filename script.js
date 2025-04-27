const EMAIL_CONFIG = {
    serviceID: 'your_email_service', // e.g., 'gmail', 'outlook', etc.
    templateID: 'your_template_id',  // if using email service with templates
    userID: 'your_user_id',          // from your email service
    to: 'wedding@example.com',       // recipient email
    subject: 'Wedding RSVP Submission'
};

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
    
    // Send email using SMTPJS (you'll need to set this up)
    Email.send({
        SecureToken: "your_secure_token", // Get this from SMTPJS.com
        To: EMAIL_CONFIG.to,
        From: "noreply@weddinginvite.com",
        Subject: EMAIL_CONFIG.subject,
        Body: `
            <h2>New Wedding RSVP</h2>
            <p><strong>Name:</strong> ${emailData.name}</p>
            <p><strong>Email:</strong> ${emailData.email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `
    }).then(
        message => {
            console.log("Email sent successfully:", message);
            document.getElementById('success-message').classList.add('show');
            setTimeout(() => {
                document.getElementById('success-message').classList.remove('show');
            }, 5000);
        }
    ).catch(
        error => {
            console.error("Email sending failed:", error);
            alert("There was an error submitting your RSVP. Please try again later.");
        }
    );
}