const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container')
const arrows = document.querySelectorAll('.slider-container a');
const firstCard = document.querySelector('.card').offsetWidth;
const sliderChild = [...slider.children];

let cardPreview = Math.round(slider.offsetWidth / firstCard);

sliderChild.slice(-cardPreview).reverse().forEach(card => {
    slider.insertAdjacentHTML('afterbegin', card.outerHTML)
})

sliderChild.slice(0, cardPreview).forEach(card => {
    slider.insertAdjacentHTML('beforeend', card.outerHTML)
})
arrows.forEach( arrow => {
    arrow.addEventListener('click', function(){
        slider.scrollLeft += arrow.id === 'left' ? -firstCard : firstCard
    })
})

let isSlide = false, startX, startScrollLeft, timeoutId;


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

const autoPlay = () => {
   
    timeoutId = setTimeout(() => slider.scrollLeft += -firstCard, 2500)
}
autoPlay();

const infiniteScroll = () =>{
    if(slider.scrollLeft === 0){
        slider.classList.add('no-animation')
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth )
        slider.classList.remove('no-animation')
    }else if(Math.ceil(slider.scrollLeft) == slider.scrollWidth - slider.offsetWidth){
        slider.classList.add('no-animation')
        slider.scrollLeft = slider.offsetWidth
        slider.classList.remove('no-animation')
    }

    clearTimeout(timeoutId);
    if(!container.matches(':hover')) autoPlay();
}



slider.addEventListener('mousemove', slide);
slider.addEventListener('mousedown', slideStart);
document.addEventListener('mouseup', slideStop);
slider.addEventListener('scroll', infiniteScroll)
container.addEventListener('mouseenter', () => clearTimeout(timeoutId))
container.addEventListener('mouseleave', autoPlay)