let count = 0;
 const button = document.getElementById('btn');
 const para = document.getElementById('paragraph');

 btn.addEventListener('click', ()=> {
    count++;
    para.innerHTML = `You clicked ${count} times`;
 })