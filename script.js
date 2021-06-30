const button=document.getElementById('newRew');

button.addEventListener('click', () =>{
    if($('.rew').hasClass('visOff')){
        $('.rew').addClass('visOn');
        $('.rew').removeClass('visOff');
    }else {
        return
    }
})