
$(document).ready(function () {
    function showBlock($link_id, $block_id) {
        $($link_id).click(function (event) {
            $($block_id).fadeIn(500).css("display", "flex");
            $('header, footer, .main__wrapper').css('display', 'none');
        });
    }

    function hideBlock($block_id, $button_id, $cross_id) {
        $( $cross_id).click(function (event) {
            $($block_id).fadeOut(500);
            $('header, footer, .main__wrapper').css('display', 'block');
        });

        $($button_id).click(function (event) {
            $($block_id).fadeOut(500);
            $('header, footer, .main__wrapper').css('display', 'block');
        });

        $(document).keyup(function (event) {
            if (event.key === 'Escape' || event.key === 27) {
                $($block_id).fadeOut(500);
                $('header, footer, .main__wrapper').show();
            }
        });
    }

    showBlock('#license-link', '#license');
    hideBlock('#license', ' #license-button', '#license-close');

    showBlock('#privacy-policy-link', '#privacy-policy');
    hideBlock('#privacy-policy', ' #privacy-policy-button', '#privacy-policy-close');

    showBlock('#prices-link', '#prices');
    hideBlock('#prices', ' #prices-button', '#prices-close');

    showBlock('#requisities-link', '#requisities');
    hideBlock('#requisities', ' #requisities-button', '#requisities-close');
});
