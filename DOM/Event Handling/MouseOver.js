let container = document.getElementById('mouse');
container.addEventListener('mouseover', () => {
    container.style.backgroundColor = 'skyblue';
    
});
container.addEventListener('mouseout', () => {
      container.style.backgroundColor = 'white';
});