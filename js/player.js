function initiate(){
    // initiate так как она инициирует приложения после загрузки окна
    maxim    =600;
    mmedia   =document.getElementById('media');
    play     =document.getElementById('play');
    bar      =document.getElementById('bar');
    progress =document.getElementById('progress')
    // Объявили глобальные переменные
 
    play.addEventListener('click', push, false);
    bar.addEventListener('click', move,false);
    // Написали прослушиватели на функции push и move
}
function push(){
    // Проверяем свойства paused и ended,т.е. если видео воспроизводиться, их значения =false
    if(!mmedia.paused && !mmedia.ended) {
        // Если видео воспроизводится,то вызываем команду паузы
        mmedia.pause();
        play.innerHTML='Play';
        window.clearInterval(Loop);
    }else{
        //Если остановлено или закончилось,вызываем запуск видео
        mmedia.play();
        play.innerHTML='Pause';
        loop=setInterval(status, 1000);
        // Вызываем каждую секунду функцию Status
    }
}
function status(){
    // Если видео не закончилось,то вычисляем длину индикатора прогресса
    if(!mmedia.ended){
        var size=parseInt(mmedia.currentTime*maxim/mmedia.duration);
        progress.style.width=size+'px';
    }else{
        progress.style.width='0px';
        play.innerHTML='Play';
        window.clearInterval(loop);     
    }
}
function move(e){
    if(!mmedia.paused && !mmedia.ended){
        var mouseX=e.pageX-bar.offsetLeft;
        var newtime=mouseX*mmedia.duration/maxim;
        mmedia.currentTime=newtime;
        progress.style.width=mouseX+'px'
    }
}
// Запустить функцию initiate после загрузки документа
window.addEventListener('load',initiate, false);