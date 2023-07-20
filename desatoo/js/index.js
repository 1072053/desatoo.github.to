
        $(document).ready(function() {
            
//            nav
            $('#content_index').show();
            $('#content_items').hide();
            $('#content_cake').hide();
            $('#content_chocolate').hide();
            $('#content_icecream').hide();
            $('#content_box').hide();
            $('#content_cart').hide();
            
            $('#logo').click(function(){
                $('#content_index').show();
                $('#content_items').hide();
                $('#content_cake').hide();
                $('#content_items').hide();
                $('#content_chocolate').hide();
                $('#content_icecream').hide();
                $('#content_box').hide();
                $('#content_cart').hide();
            });
            $('#myMenuBtn').click(function(){
                $('#content_index').hide();
                $('#content_items').hide();
                $('#content_cake').hide();
                $('#content_items').show();
                $('#content_chocolate').hide();
                $('#content_icecream').hide();
                $('#content_box').hide();
                $('#content_cart').hide();
            });
            $('#nav_cake').click(function(){
                $('#content_index').hide();
                $('#content_items').hide();
                $('#content_cake').show();
                $('#content_chocolate').hide();
                $('#content_icecream').hide();
                $('#content_box').hide();
                $('#content_cart').hide();
            });
            $('#nav_chocolate').click(function(){
                $('#content_index').hide();
                $('#content_items').hide();
                $('#content_cake').hide();
                $('#content_chocolate').show();
                $('#content_icecream').hide();
                $('#content_box').hide();
                $('#content_cart').hide();
            });
            $('#nav_ice').click(function(){
                $('#content_index').hide();
                $('#content_items').hide();
                $('#content_cake').hide();
                $('#content_chocolate').hide();
                $('#content_icecream').show();
                $('#content_box').hide();
                $('#content_cart').hide();
            });
            $('#nav_box').click(function(){
                $('#content_index').hide();
                $('#content_items').hide();
                $('#content_cake').hide();
                $('#content_chocolate').hide();
                $('#content_icecream').hide();
                $('#content_box').show();
                $('#content_cart').hide();
            });
            $('#nav_cart').click(function(){
                $('#content_index').hide();
                $('#content_items').hide();
                $('#content_cake').hide();
                $('#content_chocolate').hide();
                $('#content_icecream').hide();
                $('#content_box').hide();
                $('#content_cart').show();
            });
            
//            content_chocolate
            $('#p1').click(function() {
                $('#item1').show();
            });
            $('.close').click(function() {
                $('#item1').hide();
            });

            $('#p2').click(function() {
                $('#item2').show();
            });
            $('.close').click(function() {
                $('#item2').hide();
            });
            
            $('#p3').click(function() {
                $('#item3').show();
            });
            $('.close').click(function() {
                $('#item3').hide();
            });
            
            $('#p4').click(function() {
                $('#item4').show();
            });
            $('.close').click(function() {
                $('#item4').hide();
            });
            $('#p5').click(function() {
                $('#item5').show();
            });
            
            $('.close').click(function() {
                $('#item5').hide();
            });
            
            
//            content_box
            $('#gallery a').click(function(e) {
                e.preventDefault();
                var imagePath = $(this).attr('href');
                var $newImage = $(`<img src="${imagePath}"/>`);
                var $oldImage = $('#photo img');
                $newImage.hide();
                $('#photo').prepend($newImage);
                $newImage.fadeIn(500);
                $oldImage.fadeOut(500, function() {
                    $(this).remove();
                });
            });
            

        }); // end ready

