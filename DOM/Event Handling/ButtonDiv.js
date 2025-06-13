const inputField = document.getElementById('in');
const content = document.getElementById('container');

inputField.addEventListener('input', () =>{
    content.textContent = inputField.value;
})