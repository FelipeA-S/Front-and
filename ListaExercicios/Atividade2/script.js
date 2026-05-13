const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')

function celPfah(){
    fahrenheit.value = ((celsius.value * 9/5) + 32).toFixed(2)
}
function fahPcel(){
    celsius.value = ((fahrenheit.value - 32) * 5/9).toFixed(2)
}

celsius.addEventListener('input', function() {
    celPfah();
});
fahrenheit.addEventListener('input', function() {
    fahPcel();
});