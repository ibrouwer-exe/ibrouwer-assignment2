$(document).ready(function() {
    $.scrollify({
        section : ".hero",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function(i) {
            console.log(i)
        },
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
      });
});
