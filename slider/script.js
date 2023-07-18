const slider = document.querySelector('.slider');
let isSlide = false, startX, startScrollLeft;
const slideStart = (e) => {
    isSlide = true;
    slider.classList.add('slide')
    startX = e.pageX
    startScrollLeft = slider.scrollLeft
}

const slideStop = () => {
    isSlide = false;
    slider.classList.remove('slide')
}
const slide = (e) => {
    if(!isSlide) return;
    slider.scrollLeft = startScrollLeft - (e.pageX - startX)
}
slider.addEventListener('mousemove', slide);
slider.addEventListener('mousedown', slideStart);
document.addEventListener('mouseup', slideStop);

