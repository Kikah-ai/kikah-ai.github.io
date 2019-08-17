var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlidesfade");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4500); // Change image every 2 seconds
}


// buttons



function infohide(){
  x = document.getElementById("info");
  if (x.innerHTML == 'Information'){
    x.innerHTML = 'Hide'
    document.getElementById('ocdinformation').style.display = "block";

  }
  else if (x.innerHTML == 'Hide'){
    x.innerHTML = 'Information';
    document.getElementById('ocdinformation').style.display = "none";

  }
}

function symphide(){
  y = document.getElementById("symptom");
  if (y.innerHTML == 'Symptom'){
    y.innerHTML = 'Hide'
    document.getElementById('ocdsymptom').style.display = "block";

  }
  else if (y.innerHTML == 'Hide'){
    y.innerHTML = 'Symptom';
    document.getElementById('ocdsymptom').style.display = "none";

  }
}

function leadhide(){
  y = document.getElementById("lead");
  if (y.innerHTML == 'OCD Leads To'){
    y.innerHTML = 'Hide'
    document.getElementById('ocdlead').style.display = "block";

  }
  else if (y.innerHTML == 'Hide'){
    y.innerHTML = 'OCD Leads To';
    document.getElementById('ocdlead').style.display = "none";

  }
}

