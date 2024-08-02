window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
}


$(function() {
  setTimeout(function() { $(".preloaderBg").fadeOut(1500);}, 2000)
  })



// ScrollReveal().reveal('.item2', {
//   distance: '50px',
//   origin: 'bottom',
//   opacity: 0,
//   delay: 100,
//   duration: 1000,
//   easing: 'ease-in-out'
// });

function myFunction() {
  alert("Respond send");
}