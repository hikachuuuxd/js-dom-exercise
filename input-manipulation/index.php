<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coba</title>
</head>
<body>
    <form action="" method="post">
        <input type="number" name="a" id="a">
        <input type="number" name="b" id="b">
        <input type="number" name="hasil" id="hasil">
        
    </form>

<script>
let a = document.getElementById('a')
let b = document.getElementById('b')
let hasil = document.getElementById('hasil')

function jumlah()
{
    let jumlah = parseInt(a.value) + parseInt(b.value) 
    hasil.value = jumlah
}
b.addEventListener('input', jumlah)
a.addEventListener('input', jumlah)
</script>
</body>
</html>