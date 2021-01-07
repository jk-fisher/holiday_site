//responsive navbar function
const navFunction = () => {
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

//read more function in property description
const displayText = () => {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("moreBtn");
  const imageCards = document.getElementById("imageCards");
  
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
  }
}

//hide and show get availability button on scroll
const showEnquiryBtn = () => {
  const enquiryBtn = document.getElementById("checkAvailabilityBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    enquiryBtn.style.display = "block";
  } else {
    enquiryBtn.style.display = "none";
  }
}

// window.onscroll = showEnquiryBtn();

export { navFunction, displayText, showEnquiryBtn };