import '../css/style.css';

function start(){
    const div = document.createElement('div');
    div.classList.add('red-bg');
    div.textContent = "Hello World";
    document.body.appendChild(div);
}

start();