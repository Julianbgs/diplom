$(".hamb").click(function(e){
    $(".hamb").toggleClass("hamb_active");
    $(".menu").toggleClass("menu_active");
});
$(".menu__left__i").hover(function(){
    let id = $(this).attr("data-block");
    $(".menu-info").removeClass("menu-info_active");
    $(id).addClass("menu-info_active");
    $(".menu__left__i").removeClass("menu__left__i_active");
    $(this).addClass("menu__left__i_active");
});
$(".menu-info__i__arr_prev").click(function(){
    let active = $(".menu-info_active");
    $(".menu-info_active").prev().addClass("menu-info_active");
    active.removeClass("menu-info_active");
    let elA = $(".menu__left__i_active").prev();
    $(".menu__left__i").removeClass("menu__left__i_active");
    elA.addClass("menu__left__i_active");
});
$(".menu-info__i__arr_next").click(function(){
    let active = $(".menu-info_active");
    $(".menu-info_active").next().addClass("menu-info_active");
    active.removeClass("menu-info_active");
    let elA = $(".menu__left__i_active").next();
    $(".menu__left__i").removeClass("menu__left__i_active");
    elA.addClass("menu__left__i_active");
});
$(".js-open-menu").click(function(e){
    e.preventDefault();
    let id = $(this).attr("data-block");
    $(".menu").toggleClass("menu_active");
    $(".menu-info").removeClass("menu-info_active");
    $(id).addClass("menu-info_active");
});
