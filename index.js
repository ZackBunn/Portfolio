$(".jumpTo").on("click", function(i) {
    i.preventDefault();
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);   
});