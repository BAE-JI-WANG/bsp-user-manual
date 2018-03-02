var TOCMenu = (function ($) {
    var scope,
        $container,
        $anchorToggle,
        $anchor,
        init = function() {
            $container = $('#toc-menu');
            $anchorToggle = $container.find('div.toc > ul > li > ul > li > a');
            $anchor = $container.find('.toc a');

            initLayout();
            initEvent();
        };

    function initLayout() {
    }

    function initEvent() {
        $container.find('div.toc').on('mousewheel', function (e) {
            var event = e.originalEvent,
                d = event.wheelDelta || -event.detail;

            this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });

        $container.find('a').on('click', function(e) {
            var $this = $(this);
            if( !$this.hasClass("btn-section") ) { e.preventDefault(); }

            var $target = $( $this.attr("href") );

            if( $this.hasClass("btn-toggle") ) {
                $('html, body').animate({
                    scrollTop: $target.offset().top + 2
                }, 0);
            } else {
                $('html, body').animate({
                    scrollTop: $target.offset().top + 2
                }, 500);
            }
        });

        onResize();
        onScroll();

        $(document).on('scroll', function(e) {
            onScroll();
        });
        $(window).on('resize', function(e) {
            onResize();
        });
    }

    function updatePosition() {
        var marginLeft;
        var left;
        var top = $container.position().top;
        if( $(window).width() < 1200 ) {
            marginLeft = -300;
            left = $('article.AlertNow').offset().left;
            left = left - $(document).scrollLeft();
            $container.css({
                "marginLeft": marginLeft,
                "top": top,
                "left": left + "px",
                "opacity": 1
            });
        } else {
            marginLeft = -1200/2;
            $container.css({
                "marginLeft": marginLeft,
                "top": top,
                "left": "50%",
                "opacity": 1
            });
        }
    }

    function onResize() {
        updatePosition();
    }

    function onScroll(e) {
        updatePosition(e);

        var scrollPos = $(document).scrollTop() + 1;

        var $lastToggleTarget = null;
        $anchorToggle.each(function() {
            var $this = $(this);
            var $target = $( $this.attr("href") );
            if( $target.offset().top <= scrollPos ) {
                if( $lastToggleTarget != null ) {
                    $lastToggleTarget.removeClass("active");
                }
                $this.addClass("active");
                $lastToggleTarget = $this;
            } else {
                $this.removeClass("active");
            }
        });

        var targets = [];
        $anchor.each(function() {
            var $this = $(this);
            var $target = $( $this.attr("href") );

            if( $target.offset().top <= scrollPos ) {
                targets.push($(this));
            } else {
                $this.parents(".toc li").removeClass("active");
            }
        }).promise().done(function() {
            activate(targets);
        });
    }

    function activate(targets) {
        if( targets.length < 1 ) return;
        for( var i = 0;  i < targets.length; i++ ) {
            targets[i].parents(".toc li").removeClass("active");
        }
        targets[targets.length-1].parents(".toc li").addClass("active");
    }

    return {
        init: function() {
            init();
        }
    };
}(jQuery));


$(window.document).ready(function () {
    TOCMenu.init();
});
