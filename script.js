const inputList = document.querySelectorAll('input');
const exclamationList = document.querySelectorAll('.fa-exclamation');

inputList.forEach((input, index) => {
    input.addEventListener('invalid', () => {
        Array.from(exclamationList)[index].classList.add('active')
    })
    input.addEventListener('input', (event) => {
    event.target.checkValidity()
    ? Array.from(exclamationList)[index].classList.remove('active')
    : Array.from(exclamationList)[index].classList.add('active');
    });
});


