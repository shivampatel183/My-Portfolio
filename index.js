window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
}

$(function () {
  setTimeout(function () {
    $(".preloaderBg").fadeOut(1500);
  }, 2000);
});

function myFunction() {
  alert("Respond send");
}
