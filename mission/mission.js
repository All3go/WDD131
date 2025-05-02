const themeSelector = document.querySelector('#theme-select');
function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('.logo');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo-white.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo-blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);