
const button = document.getElementById('target-button')
const target = document.getElementById('target')
const text = document.getElementById('target-text')
let select  = document.getElementsByTagName('select')['target-select']
let input = document.getElementById('target-input')

button.addEventListener('click', function()
{
  
    if(select.value == 'bg')
    {
            target.style.background = input.value
            // console.log(select.value)
    }
    else if(select.value == 'font-color')
    {
            text.style.color = input.value
    }
    else if(select.value == 'font-size')
    {
             target.style.fontSize = input.value +'px'
    }
    else if(select.value == 'font')
    {
             target.style.fontFamily = input.value
    }
    else if(select.value == 'width')
    {
           target.style.width = input.value + 'px'
    }
    else if(select.value == 'height')
    {
          target.style.height = input.value +'px' 
    }
    else
    {
        console.log('anda belum memasukkan pilihan')
    }


})


        