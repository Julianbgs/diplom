$(document).ready(function() {
    // $('#fullpage').fullpage({
    //     navigation: true,
    // });
    $('#fullpage').fullpage({
        <!--loopHorizontal: false,-->
        navigation: true,
        // css3:true,
        // scrollOverflow: true
    })
    console.log('tesr');
    $("body").on("click", ".js-open-modal", function(e) {
        if(!$(this).hasClass("itislink")) {
            e.preventDefault();
            $(this).parents(".section").find(".modal").removeClass("out");
            $(this).parents(".section").find(".modal").addClass("open");
        }
    });
    $("body").on("click", ".close", function(e) {
        e.preventDefault();
        $(this).parents(".modal").removeClass("open");
        $(this).parents(".modal").addClass("out");
    });

    $(".menu-info__i__sub-menu__i").click(function(){
        $(".menu_active").removeClass("menu_active");
    });

    $(".news__i").on("mouseover", function(){
        let n = $(this).attr("data-main");
        $(".news__i").removeClass("news__i_active");
        $(this).addClass("news__i_active");
        $(".news__info").removeClass("news__info_active");
        $(".news__info[data-main='"+n+"']").addClass("news__info_active");
    });

    $(".contacts-list__t").click(function(){
        $(this).toggleClass("contacts-list__t_active");
        if($(this).hasClass("contacts-list__t_active")) {
            $(this).next().fadeIn();
        } else {
            $(this).next().fadeOut();
        }
    });

    $(".for-slide-prev, .for-slide-next").click(function(e){
        e.preventDefault();
        let slide = $(this).attr("data-slide");
        $(".main-slide_vac_active").removeClass("main-slide_vac_active");
        $(".main-slide_vacblo[data-active="+slide+"]").addClass("main-slide_vac_active");
    });

    var prev = '<button type="button" class="detail-news__top__dop__i__lk detail-news__top__dop__i__lk_top"><span class="detail-news__top__dop__i__lk__tx">РџСЂРµРґС‹РґСѓС‰Р°СЏ</span><span class="detail-news__top__dop__i__lk__form"></span></button>';
    var next = '<button type="button" class="detail-news__top__dop__i__lk"><span class="detail-news__top__dop__i__lk__form"></span><span class="detail-news__top__dop__i__lk__tx">РЎР»РµРґСѓСЋС‰Р°СЏ</span></button>';
    if($("html").attr("lang") == "en") {
        prev = '<button type="button" class="detail-news__top__dop__i__lk detail-news__top__dop__i__lk_top"><span class="detail-news__top__dop__i__lk__tx">Previous</span><span class="detail-news__top__dop__i__lk__form"></span></button>';
        next = '<button type="button" class="detail-news__top__dop__i__lk"><span class="detail-news__top__dop__i__lk__form"></span><span class="detail-news__top__dop__i__lk__tx">More</span></button>';
    }

    $(".main-detail-news .detail-news__top__dop").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: prev,
        nextArrow: next,
    });

    $(".footer__send a").click(function(e){
        e.preventDefault();
        $("#send-form").addClass("vak_active");
    });

    $("#sendform__submit").click(function(e){
        e.preventDefault();
        var error = false;
        let form = document.getElementById("sendform");
        let required = form.getElementsByClassName("required");
        for(let i=0;i<required.length;i++) {
            required[i].classList.remove('it__error');
        }
        for(let i=0;i<required.length;i++) {
            if(required[i].value == '') {
                error = true;
                required[i].classList.add('it__error');
            }
        }
        if(error) {
            return false;
        }

        var formData = new FormData(form);
        var xhrs = new XMLHttpRequest();
        xhrs.open('POST', '/ajax/sendSend.php', false);
        xhrs.send(formData);
        if(xhrs.status == 200) {
            $("#form-ok").addClass("vak_active");
        }
    });

    $(".search").click(function(e) {
        if(!$(".search").hasClass("search_active") || $(e.target).hasClass("search-form__inp") || $(e.target).hasClass("search-form")) {
            $(".search").addClass("search_active");
            $(".search-form__inp").focus();
        } else {
            location.href = "/search/?q="+$(".search-form__inp").val();
        }
    });

    $("body").click(function(e){
        if(!$(e.target).hasClass("search") && !$(e.target).hasClass("search-form__inp") && !$(e.target).hasClass("search-form")) {
            $(".search").removeClass("search_active");
        }
    });

    if($(".detail-news__top__main__img").length) {
        prev = '<button type="button" class="detail-news__top__dop__i__lk detail-news__top__dop__i__lk_left"><span class="detail-news__top__dop__i__lk__form"></span></button>';
        next = '<button type="button" class="detail-news__top__dop__i__lk detail-news__top__dop__i__lk_right"><span class="detail-news__top__dop__i__lk__form"></span></button>';
        let dots = false;
        if($(".detail-news__top__main__img").length > 1) {
            dots = true;
        }
        $(".detail-news__top__main__slide").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            prevArrow: prev,
            nextArrow: next,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: dots,
        });
    }
});
