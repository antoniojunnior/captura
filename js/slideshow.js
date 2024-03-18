/*Slideshow */
/* let slides = document.getElementsByClassName("c-slideshow__img");
let dots = document.getElementById("c-slideshow__controlls");
let slideIndex = 0;

showSlides(slideIndex);
let timeout = setTimeout(moveSlides, 5000, 1);

function showSlides(n) {
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
        slides[i].classList.remove("proximo");
        slides[i].classList.remove("anterior");
      }

    let atual = n;
    let anterior = n - 1;
    let proximo = n + 1;

    if(anterior < 0){anterior = slides.length - 1;}
    if(proximo >= slides.length){proximo = 0;}

    slides[atual].classList.add("ativo");
    slides[anterior].classList.add("anterior");
    slides[proximo].classList.add("proximo");

    // Atualiza os indicadores
    dots.innerHTML = "";
    for (i = 0; i < slides.length; i++) {
    dots.innerHTML += `<span class="slide-indicator" onclick="currentSlide(${i})"></span>`;
    }
    dots.childNodes[slideIndex].classList.add("active");
}

// Next/previous controls
function moveSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    clearTimeout(timeout);
    timeout = setTimeout(moveSlides, 5000, 1);
    showSlides(slideIndex);
}
  
// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(timeout);
    timeout = setTimeout(moveSlides, 5000, 1);
    showSlides(slideIndex = n);
} */

/*End Slideshow */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const indicators = document.getElementById("slide-indicators");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("proximo");
    slides[i].classList.remove("anterior");
  }

  let atual = slideIndex - 1;
  let anterior = atual - 1;
  let proximo = atual + 1;

  if(anterior < 0){anterior = slides.length - 1;}
  if(proximo >= slides.length){proximo = 0;}

  slides[atual].classList.add("active");
  slides[anterior].classList.add("anterior");
  slides[proximo].classList.add("proximo");

  // Atualiza os indicadores
  indicators.innerHTML = "";
  for (i = 0; i < slides.length; i++) {
    indicators.innerHTML += `<span class="slide-indicator" onclick="currentSlide(${i + 1})"></span>`;
  }
  indicators.childNodes[slideIndex - 1].classList.add("active");
}