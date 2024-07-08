document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');
    
    if (!email) {
        errorMessage.textContent = 'Email address is required.';
        errorMessage.style.visibility = 'visible';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = 'Please provide a valid email address.';
        errorMessage.style.visibility = 'visible';
    } else {
        errorMessage.style.visibility = 'hidden';
        alert('Email submitted successfully!');
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
