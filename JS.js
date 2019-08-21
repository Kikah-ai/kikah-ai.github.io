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
    x.innerHTML = 'Hide Information'
    document.getElementById('ocdinformation').style.display = "block";

  }
  else if (x.innerHTML == 'Hide Information'){
    x.innerHTML = 'Information';
    document.getElementById('ocdinformation').style.display = "none";

  }
}

function symphide(){
  y = document.getElementById("symptom");
  if (y.innerHTML == 'Symptoms'){
    y.innerHTML = 'Hide Symptoms'
    document.getElementById('ocdsymptom').style.display = "block";

  }
  else if (y.innerHTML == 'Hide Symptoms'){
    y.innerHTML = 'Symptom';
    document.getElementById('ocdsymptom').style.display = "none";

  }
}

function leadhide(){
  y = document.getElementById("lead");
  if (y.innerHTML == 'Related'){
    y.innerHTML = 'Hide Related'
    document.getElementById('ocdlead').style.display = "block";

  }
  else if (y.innerHTML == 'Hide Related'){
    y.innerHTML = 'Related';
    document.getElementById('ocdlead').style.display = "none";

  }
}

function symptomhide(){
  x = document.getElementById("adhdsymptom");
  if (x.innerHTML == 'Symptoms'){
    x.innerHTML = 'Hide Symptoms'
    document.getElementById('adsymptom').style.display = "block";

  }
  else if (x.innerHTML == 'Hide Symptoms'){
    x.innerHTML = 'Symptoms';
    document.getElementById('adsymptom').style.display = "none";

  }
}

function typehide(){
  x = document.getElementById("adhdtypes");
  if (x.innerHTML == 'Types Of ADHD'){
    x.innerHTML = 'Hide Types'
    document.getElementById('adtypes').style.display = "block";

  }
  else if (x.innerHTML == 'Hide Types'){
    x.innerHTML = 'Types Of ADHD';
    document.getElementById('adtypes').style.display = "none";

  }
}



function causehide(){
  x = document.getElementById("adhdcauses");
  if (x.innerHTML == 'Causes Of ADHD'){
    x.innerHTML = 'Hide Causes'
    document.getElementById('adcauses').style.display = "block";

  }
  else if (x.innerHTML == 'Hide Causes'){
    x.innerHTML = 'Causes Of ADHD';
    document.getElementById('adcauses').style.display = "none";

  }
}


function preventhide(){
  x = document.getElementById("adhdprevention");
  if (x.innerHTML == 'Preventions'){
    x.innerHTML = 'Hide Preventions'
    document.getElementById('adprevention').style.display = "block";

  }
  else if (x.innerHTML == 'Hide Preventions'){
    x.innerHTML = 'Preventions';
    document.getElementById('adprevention').style.display = "none";

  }
}

