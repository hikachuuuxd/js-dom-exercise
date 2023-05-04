
const button = document.getElementById('target-button')
const target = document.querySelector('#target')
const text = document.querySelector('#target p')
console.log(target)
let select = document.getElementsByTagName('select')[0]
let input = document.getElementById('target-input')

select.addEventListener('input', function()
{
    if(select.value == 'bg')
    {
        button.addEventListener('click', function()
        {
            target.style.background = input.value
        })

    }
    else if(select.value == 'font-color')
    {
        button.addEventListener('click', function()
        {
            text.style.color = input.value
        })
    }
    else if(select.value == 'font-size')
    {
        button.addEventListener('click', function()
        {
             target.style.fontSize = input.value
        })
    }
    else if(select.value == 'font')
    {
        button.addEventListener('click', function()
        {
             target.style.fontFamily = input.value
        })
    }
    else if(select.value == 'width')
    {
        button.addEventListener('click', function()
        {
             target.style.width = input.value
        })
    }
    else if(select.value == 'height')
    {
        button.addEventListener('click', function()
        {
             target.style.height = input.value
        })
    }
    else
    {
        console.log('anda belum memasukkan pilihan')
    }

})


        