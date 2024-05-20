
var yeniRolButton = document.querySelector('.yeniRol');
var dropdown = document.querySelector('.dropdown');
yeniRolButton.addEventListener('click', function (clickButton) {
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});