document.getElementById('maiuscula').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    document.getElementById('resultado-maiuscula').innerHTML = texto.toUpperCase();
});

document.getElementById('separar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const palavras = texto.split(' ');
    const resultado = palavras.join('<br>');
    document.getElementById('resultado-separar').innerHTML = resultado;
});
