$(function(){
    $('figure').hover(
        function(){
            $(this).find('.image').addClass('image-active')
            $(this).find('.bgcolor').addClass('bgcolor-active')
            
        },
        function(){
            $(this).find('.image').removeClass('image-active')
            $(this).find('.bgcolor').removeClass('bgcolor-active')
        }
    );
})