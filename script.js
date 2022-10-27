(function () {
  const slides = [
    '<div class="slide"><img src="img/adidas.svg" alt="Adidas"></div>',
    '<div class="slide"><img src="img/asics.svg" alt="Asics"></div>',
    '<div class="slide"><img src="img/new-balance.svg" alt="New-Balance"></div>',
    '<div class="slide"><img src="img/nike.svg" alt="Nike"></div>',
    '<div class="slide"><img src="img/reebok.svg" alt="Reebok"></div>',
  ];
  let currentSlideIdx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(
      ".brands-carousel__slide-container"
    );

    slideContainer.innerHTML = slides[currentSlideIdx];

    /* if (window.innerWidth > 400) {
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 600) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
      if (window.innerWidth > 800) {
        const fourthSlideIdx =
          thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slideContainer.innerHTML += slides[fourthSlideIdx];
      }
    }*/
  }
  function nextSlide() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }
  //setInterval(nextSlide, 1000);
  renderSlide();
  const nextButton = document.querySelector(".brands-carousel__next");
  nextButton.addEventListener("click", nextSlide);
  const prevButton = document.querySelector(".brands-carousel__prev");
  prevButton.addEventListener("click", prevSlide);
})();
