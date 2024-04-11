
$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.animated-heading');
    heading.classList.add('active');
});

const scrollToTopButton = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


function SmoothScroll(target)
{
	var targetElement=document.getElementById(target);
	targetElement.scrollIntoView({behavior:'smooth'});
}

