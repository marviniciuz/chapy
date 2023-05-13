var ionome = document.querySelector('#nome');
var iomensagem = document.querySelector('#mensagem');
var homeform = document.querySelector('#home form');

homeform.addEventListener('submit',function(ev){
    document.querySelector('#home').style.display='none';
    document.querySelector('#batepapo').style.display='grid';
    ev.preventDefault();
});
