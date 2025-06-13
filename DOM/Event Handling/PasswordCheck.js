
const passwordField = document.getElementById('password');
const CheckboxField = document.getElementById('check');

    CheckboxField.addEventListener('change', function () {
      if (this.checked) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    });