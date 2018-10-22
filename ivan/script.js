let btn = document.querySelector('.btn');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
btn.addEventListener('click', function (event) {
    let circle = document.getElementById('1');
    circle.classList.remove('effect');
    circle.classList.add('effect');
    
    
});