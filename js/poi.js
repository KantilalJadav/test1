window.wayfinder = window.wayfinder || {};
wayfinder.poi = function () {

    var config = {
        // check tuch/tap/scroll event in tuch screen
    }

    var init = function () {
        registerEvent();
    };

    var registerEvent = function () {

        $(".filter-main a").click(function(){
            $(".level-main a").removeClass("active");
            $(".filter-main a").removeClass("act");
            $(this).addClass("act");
            console.log($(this).text());

            filterByCategory($(this).text());

        });

        $(".level-main a").click(function(){
            $(".filter-main a").removeClass("act");
            $(".level-main a").removeClass("active");
            $(this).addClass("active");
            console.log($(this).text());
            var selLevel = $(this).text();

            filterByLevel(selLevel);

            

        });

        $(".level-thumbs a").click(function(){
            $(".thumb").removeClass("act");
            $(".details-main").hide();
            $(".right-map-area img").hide();

            $(this).children('.thumb').addClass("act");
            var poitabId = $(this).attr("poiId");
            $('[poidetail="'+ poitabId + '"]').show();
            $(".right-map-area [poimap='" + poitabId + "']").show();
        });
    }

    var filterByCategory = function(selCategory){

        if(selCategory == "All"){
            $(".level-thumbs").show();
            $(".level-thumbs a").show();
        }
        else{
            $(".level-thumbs").hide();
            $(".level-thumbs a").hide();
            $(".level-thumbs [category='" + selCategory + "']").show();
            $(".level-thumbs").show();

            $(".level-thumbs").each(function () {
                if ($(this).find('a:hidden').length === $(this).find('a').length) {
                    $(this).hide();
                }
            });
        }

        var firstElement = $(".level-thumbs a").filter(function () {
            return $(this).css('display') !== 'none';
        }).first();
    
        //$(".thumb").removeClass("act");

        $(firstElement).click();
        
    }

    var filterByLevel = function(selLevel){
        $(".level-thumbs").hide();
        $(".level-thumbs a").hide();

        $(".level-thumbs").each(function () {
            if ($(this).find('.title').text() === selLevel) {
                $(this).show();
                $(this).find('a').show();
            }
        });

        var firstElement = $(".level-thumbs a").filter(function () {
            return $(this).css('display') !== 'none';
        }).first();

        $(firstElement).click();
    }

    var setFullScreen = function(){
        let element = document.documentElement; // Fullscreen the entire document (webpage)
        if (element.requestFullscreen) {
            element.requestFullscreen(); // Standard request
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(); // For Safari
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen(); // For Internet Explorer
        } else {
            console.log('Fullscreen not supported by this browser.');
        }
    }
    
    return {
        init: init,
    };
}();

$(document).ready(function () {
    wayfinder.poi.init();
});


$(document).one('click', function() {
    let element = document.documentElement; // Fullscreen the entire document (webpage)
    if (element.requestFullscreen) {
        element.requestFullscreen(); // Standard request
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // For Safari
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // For Internet Explorer
    } else {
        console.log('Fullscreen not supported by this browser.');
    }
});
