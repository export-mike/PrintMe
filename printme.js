(function ($){
    $('a.print-me').on('click', function(){
        var areaToPrintSelector = $(this).data('print-me-click');
        $areaToPrint = $('#'+areaToPrintSelector);
        $printMeAreas = $('[data-print-me]');
        if($areaToPrint){
            $printMeAreas.hide();
            $areaToPrint.show();
            window.print();
            $printMeAreas.show();
        }else{
            console.error('Failed to find area to print. ID:#' + areaToPrintSelector);
        }
    });
})($);