$(document).ready(function (){
    $('.review-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500
    })
});

var modal = document.getElementById("modal");
var btn = document.getElementById("btn-modal-window");
var span = document.getElementsByClassName("close-modal-window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function timer(){
    var obj=document.getElementById('timer-inp');
    obj.innerHTML--;
    if (obj.innerHTML==0){
        setTimeout(function(

    ){},1000);
    } else {
        setTimeout(timer, 62000);
    }
}
setTimeout(timer,1000);

$(function(){

    $('.btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#modal').offset().top }, 1000);
        e.preventDefault();
    });
});

