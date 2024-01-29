
const btn = document.querySelector('.track');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close_btn');
btn.addEventListener('click',()=>{
    modal.style.display = "block";
    // body.style.background = "#12121280";

});
close.addEventListener('click',()=>{
    modal.style.display = "none";
} ,false);
const sets_images = document.querySelector('.selling_images');
const image = document.querySelectorAll('.selling_img')
function suit(){
image.style.display = "none";
}
$('.cutomer_slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    loop:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
          dots: false,
          arrows:false

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.annouc_slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    pagination:false,
    loop:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.banner_slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    pagination:false,
    loop:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1
        }
      }
    
    ]
  });

  $('.item_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    autoplay:true,
    arrows:true,
    pagination:false,
    loop:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769, 
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  if($(window).width() < 1350 ){

 
  $('.catego_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    pagination:false,
    loop:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        }
      }
     
    ]
  });

 
}

$('.ocassion_slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  arrows:false,
  pagination:false,
  dots: false,
  loop:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
     
      }
    },
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
  centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }

  ]
});

$('.usp_icon_section').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  arrows:false,
  pagination:false,
  dots: false,
  loop:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
        infinite: true,
     
      }
    },
    {
      breakpoint: 769,
      settings: {
  //       centerMode: true,
  // centerPadding: '40px',
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }

  ]
});