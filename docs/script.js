let webElements = {
    buttons: document.querySelectorAll(".btn"),
    firstInput: document.querySelector(".firstInput"),
    secondInput: document.querySelector(".secondInput"),
};

webElements.buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        webElements.secondInput.innerHTML += e.target.innerHTML;
        webElements.firstInput.innerHTML += e.target.innerHTML;
    })
});