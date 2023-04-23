const button = document.querySelector('.container button')
const warna = document.getElementById('warna')
const body = document.getElementsByTagName('body')[0]
button.addEventListener('click', function(){
    body.style.backgroundColor = warna.value
})

const range = document.querySelectorAll('input[type="range"]')
range[0].addEventListener('input', rgb)
range[1].addEventListener('input', rgb)
range[2].addEventListener('input', rgb)

function rgb(){
    const red = range[0].value
    const green = range[1].value
    const blue = range[2].value
    
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
}

