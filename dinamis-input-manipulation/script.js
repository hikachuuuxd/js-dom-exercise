
const button = document.getElementById('target-button')
const target = document.getElementById('target')
let select = document.getElementsByTagName('select')[0]
let input = document.getElementById('target-input')


    select.addEventListener('input', function(){
        if(select.value == 'color')
        {
            target.style.backgroundColor = input.value
        }
        else if(select.value == 'font-color')
        {
            target.style.color = input.value
        }
        else if(select.value == 'font-size')
        {
            target.style.fontSize = input
        }
        else if(select.value == 'font')
        {
            target.style.fontFamily = input.value
        }
        else if(select.value == 'width')
        {
            target.style.width = input.value
        }
        else if(select.value == 'height')
        {
            target.style.height = input.value
        }
        else
        {
            alert('ini tidak masuk dalam pilihan')
        }
    })
