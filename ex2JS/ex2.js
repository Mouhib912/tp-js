let color = document.querySelector('#exampleColorInput');
let text=document.querySelector('.text');
let size =document.querySelector('.num');
let police = document.querySelector('.police');
let boldChoice= document.querySelector('.bold');
let italicChoice =document.querySelector('.italic');
color.addEventListener('input', function() {
 
  text.style.color = this.value;
 
});
size.addEventListener('input', function() {

  text.style.fontSize = `${this.value}px`;

});
police.addEventListener('input', function() {

  text.style.fontFamily = `${this.value}`;

});
boldChoice.addEventListener('input', function() {

  text.style.fontWeight = `${this.value}`;
    if(this.checked === false) {
         text.style.fontWeight="normal";}
});
italicChoice.addEventListener('input', function() {

  text.style.fontStyle = `${this.value}`;
    if (this.checked=== false) {
        text.style.fontStyle="normal";
    }
});
