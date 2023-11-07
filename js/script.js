
    $.scrollify({
        section : ".mainstyle",
        interstitialSection: ".header .footer",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0, 
        scrollbars: false,
        standardScrollElements:".header .footer",
        setHeights: true,
        overflowScroll:false,
        target:"html,body",
        updateHash: true,
    });
    console.log("scrollify");
    