document.querySelector('form').addEventListener('submit',function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        event.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
})