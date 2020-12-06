const btnChanger = document.getElementById('Changer');
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('theme');

if (localConfig === 'dark') {
    document.body.classList.add('dark-theme');
} else if (localConfig === 'light') {
    document.body.classList.add('light-theme');
}

btnChanger.addEventListener('click', () => {
    //console.log(configUser.matches)
    let themeColor;
    if (configUser.matches) {
        document.body.classList.toggle('light-theme')
        themeColor = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        themeColor = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', themeColor)
})