//可投注項
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';
})

//filter open + close
$(function(){
    $('.jumpWindow .closeWindow').click(function(){
        $('.filter')
        .removeClass('display');
    })
    //請先登入
    $(".plzLogIn").on("click",function(){
        $(".jumpWindow")
        .removeClass('display');
        $('.filter,.unLogIn')
        .addClass('display');
    })

    //立即註冊
    $(".filter .unLogIn .signUp").click(function(){
        $('.jumpWindow.signUP').addClass('display');
        $(".unLogIn").removeClass('display');
    })

    //註冊
    $(".signUp").on("click",function(){
        $(".jumpWindow.signUP")
        .removeClass("display");
        $(".filter,.signUP")
        .addClass("display");
    })

    //註冊成功!
    $(".filter .signUP .submit").click(function(){
        $('.jumpWindow.apply_success').addClass('display');
        $(".signUP").removeClass('display');
    })

    //公告
    $('.jumpWindow.notice .showmore').click(function(){
        $('.jumpWindow.showMore').addClass('display');
        $('.jumpWindow.notice').removeClass('display');
    })
})