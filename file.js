const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert('how did you click it D:')
})

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
    if (popup.paused){ 
        popup.play(); 
        }
      else{ 
        popup.pause();
        }
    }