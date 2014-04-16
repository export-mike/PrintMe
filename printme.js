(function ($) {
    $('a.print-me').on('click', function () {
        var areaToPrintSelector = $(this).data('print-me-click'),
            $printMeAreas = $('[data-print-me]'),
            $areaToPrint = '';

        if (areaToPrintSelector.substr(0, 1) === '.' || areaToPrintSelector.substr(0, 1) === '#') {
            $areaToPrint = $(areaToPrintSelector);
        }

        if ($areaToPrint.length) {
            $printMeAreas.hide();
            $areaToPrint.show();
            window.print();
            $printMeAreas.show();
        } else {
            console.error('Failed to find area to print: (use . or #)' + areaToPrintSelector);
        }
    });
})(jQuery);