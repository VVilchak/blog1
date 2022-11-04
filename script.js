/*(function () {
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

    if (window.innerWidth > 350) {
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 500) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;

        if (window.innerWidth > 700) {
          const fourthSlideIdx =
            thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += slides[fourthSlideIdx];
          if (window.innerWidth > 900) {
            const fifthSlideIdx =
              fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
            slideContainer.innerHTML += slides[fifthSlideIdx];
          }
        }
      }
    }
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

  window.addEventListener("resize", renderSlide);
})();*/
(function () {
  const slides = [
    '<div class="brands-carousel__item"><img src="img/adidas.svg" alt="adidas" class="brands-carousel__img"></div>',
    '<div class="brands-carousel__item"><img src="img/asics.svg" alt="asics" class="brands-carousel__img"></div>',
    '<div class="brands-carousel__item"><img src="img/new-balance.svg" alt="new-balance" class="brands-carousel__img"></div>',
    '<div class="brands-carousel__item"><img src="img/nike.svg" alt="nike" class="brands-carousel__img"></div>',
    '<div class="brands-carousel__item"><img src="img/reebok.svg" alt="reebok" class="brands-carousel__img"></div>',
  ];
  let currentSlideIndx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(".brands-carousel-container");
    slideContainer.innerHTML = slides[currentSlideIndx];
    if (window.innerWidth > 768) {
      const secondSlideInd =
        currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      slideContainer.innerHTML += slides[secondSlideInd];
      if (window.innerWidth > 990) {
        const thirdSlideInd =
          secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
        const fourthSlideInd =
          thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
        slideContainer.innerHTML +=
          slides[thirdSlideInd] + slides[fourthSlideInd];
      }
    }
  }
  function nextSlide() {
    currentSlideIndx =
      currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIndx =
      currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
    renderSlide();
  }
  //setInterval(nextSlide, 4000);
  renderSlide();
  const nextBtn = document.querySelector(".brands-carousel-next");
  nextBtn.addEventListener("click", nextSlide);

  const prevBtn = document.querySelector(".brands-carousel-prev");
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", renderSlide);
})();
