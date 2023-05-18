function messaghtml(name,msg){
    return '<p><strong>'+name+':</strong>'+msg+'</p>';
}

var socket = io.connect('//' + document.domain + ':' + location.port);
    socket.on('message', function(data) {
        console.log('message',data);
    });
    socket.on('connect', function() {
        socket.emit('message', {name: 'Marcus',message: 'teste'});
});

var ionome = document.querySelector('#nome');
var iomensagem = document.querySelector('#mensagem');
var homeform = document.querySelector('#home form');

homeform.addEventListener('submit',function(ev){
    document.querySelector('#home').style.display='none';
    document.querySelector('#batepapo').style.display='grid';
    ev.preventDefault();
});
        