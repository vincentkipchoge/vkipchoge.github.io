$(window).scroll(() => {
    // Distance from top of document to top of footer.
    topOfFooter = $("#footer").position().top;
    // Distance user has scrolled from top, adjusted to take in height of sidebar
    scrollDistanceFromTopOfDoc = $(document).scrollTop() + window.innerHeight;
    // Difference between the two.
    scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;
 
    // If user has scrolled further than footer,
    // pull sidebar up using a negative margin.
    if (scrollDistanceFromTopOfDoc > topOfFooter) {
       $(".intro").css("margin-top", 0 - scrollDistanceFromTopOfFooter);
    } else {
       $(".intro").css("margin-top", 0);
    }
 
    console.log(scrollDistanceFromTopOfDoc);
 });
 