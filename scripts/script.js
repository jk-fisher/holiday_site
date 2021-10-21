//responsive navbar
function myFunction() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
      nav.className = "topnav";
  }
}

// moreBtn.addEventListener('click', readMore);

//read more function in property description
function displayText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");
  var imageCards = document.getElementById("imageCards");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more <i class='fas fa-angle-down'>";
    moreText.style.display = "none";
    imageCards.style.marginBottom = "0px";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less <i class='fas fa-angle-up'></i>";
    moreText.style.display = "inline";
    imageCards.style.marginBottom = "180px";
    // imageCards.style.marginTop = "70px";
  }
}

//hide and show get availability button on scroll
var mybutton = document.getElementById("checkAvailabilityBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
