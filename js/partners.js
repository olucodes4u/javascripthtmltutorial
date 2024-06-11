$(document).ready(function(){
    $('.partner-slider').slick({
      slidesToShow: 4, // Show 4 slides per view on desktop
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500, // Adjust autoplay speed as needed
      responsive: [
        {
          breakpoint: 768, // Adjust the breakpoint as needed for mobile devices
          settings: {
            slidesToShow: 2, // Show 2 slides per view on mobile
          }
        }
      ]
    });
  });
  