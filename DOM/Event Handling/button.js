 const button = document.createElement('button');
 button.textContent = "Click Me";

 const para = document.createElement('p');
 para.textContent = "Hi";
 para.style.display = 'none'

 const container = document.getElementById('container');
 container.appendChild(button);
 container.appendChild(para);

button.addEventListener('click', () => {
    if(para.style.display == 'none'){
        para.style.display = 'block';
        button.innerHTML = 'Hide Now';
    }else{
        para.style.display = 'none';
    }
    
})