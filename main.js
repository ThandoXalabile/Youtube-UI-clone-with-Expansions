var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var clear = document.getElementById('clear')

feild.onfocus = function() {
    this.setAttribute('placeholder', '');
}

feild.onblur = function() {
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#aaa'
}