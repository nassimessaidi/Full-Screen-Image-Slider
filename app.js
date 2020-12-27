const sliderImages = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

currentSlide = 0;

// Clear all imaged
function reset() {
    for(let i=0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

// Show previous
function slideLeft() {
    reset();
    sliderImages[currentSlide - 1].style.display = "block";
    currentSlide--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[currentSlide + 1].style.display = "block";
    currentSlide++;
}

// Left arrow Click
leftArrow.addEventListener('click', () => {
    if(currentSlide === 0) 
        currentSlide = sliderImages.length;
    slideLeft();
});

// Right arrow Click
rightArrow.addEventListener('click', () => {
    if(currentSlide === sliderImages.length - 1) 
        currentSlide = -1;
    slideRight();
});


startSlide();
