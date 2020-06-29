window.onload = function(){starting()}

function starting(){
    
    var width = 0;
    var myAudio = document.getElementById("myAudio");
    var page = document.getElementById("page");
    var box1 = document.getElementById("box1");
    var timer = setInterval(move,50);
    function move(){
        if(width >= 100){
            clearInterval(timer);
            page.style.display = 'none';
            myAudio.play();
           
        }else{
            width++;
            box1.style.width = width + '%';
        }
    }
}