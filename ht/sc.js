const navDialog = document.getElementById('nav-bar')
function handlemenu(){
   navDialog.classList.toggle('hidden')
}

function validateFirstName() {
  const firstNameInput = document.getElementById('first-name');
  const errorMsg = document.getElementById('error-msg');
  
  // Validate first name - at least 3 characters and only alphabets
  const firstName = firstNameInput.value.trim();
  const nameRegex = /^[A-Za-z]{3,}$/;

  if (firstName.match(nameRegex)) {
      errorMsg.style.display = 'none'; // Hide error message if valid
      firstNameInput.style.border = '2px solid green'; // Optional styling for valid input
  } else {
      errorMsg.style.display = 'block'; // Show error message if invalid
      firstNameInput.style.border = '2px solid red'; // Optional styling for invalid input
  }
}



document.getElementById('contact-number').addEventListener('input', function() {
  const contactNumber = this.value.trim();
  const contactError = document.getElementById('contact-error');
  const contactPattern = /^\d{10}$/;

  if (!contactPattern.test(contactNumber)) {
      contactError.classList.remove('hidden');
  } else {
      contactError.classList.add('hidden');
  }
});

const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');


    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length < 6) {
            passwordError.classList.remove('hidden');
        } else {
            passwordError.classList.add('hidden');
        }
    });

    const form = document.getElementById('your-form-id'); // Change 'your-form-id' to your form's actual ID
    form.addEventListener('submit', function(event) {
        if (passwordInput.value.length < 6) {
            passwordError.classList.remove('hidden');
            event.preventDefault(); // Prevent form submission if password is invalid
        }
    });




    document.addEventListener('DOMContentLoaded', function() {
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('email-error');
  
      // Regular expression to validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Add event listener to check email validity as the user types
      emailInput.addEventListener('input', function() {
          if (!emailPattern.test(emailInput.value)) {
              emailError.classList.remove('hidden');
          } else {
              emailError.classList.add('hidden');
          }
      });
  
      // Handle form submission
      const form = document.getElementById('your-form-id'); // Replace with your actual form ID
      form.addEventListener('submit', function(event) {
          if (!emailPattern.test(emailInput.value)) {
              emailError.classList.remove('hidden');
              event.preventDefault(); // Prevent form submission if email is invalid
          }
      });
  });