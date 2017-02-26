(function($) {

    $('#videoModal').on('shown.bs.modal', function () {
        $('#presentationVideo')[0].play();
    })
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#presentationVideo')[0].pause();
    })
    

})(jQuery);