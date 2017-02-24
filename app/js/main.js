(function($) {
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function jumbotron() {
    	var $footerHeight = $( '.site-footer' ).height();
    	$( ".jumbotron" ).css( "height", $( window ).height()-$footerHeight);
    	console.log($footerHeight);
    }
    //jumbotron(); 

    $( window ).resize(function() {
		//jumbotron();  		
    });
    

})(jQuery);