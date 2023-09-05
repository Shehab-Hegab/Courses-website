$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(this).toggleClass("fa-times");
        $('.navbar ul').toggleClass('show');
    });

    $(window).on('scroll load', function() {
        $('.fa-bars').removeClass("fa-times");
        $('.navbar ul').removeClass('show');

        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).offset().top - 200;
            var offset = 200; // تعريف المتغير offset

            if (top >= height && top < height + offset) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
