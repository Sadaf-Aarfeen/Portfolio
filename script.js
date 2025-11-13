const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('i');
const body = document.body;


// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
body.classList.add('dark');
themeIcon.classList.replace('fa-sun', 'fa-moon');
}


// Toggle theme
themeToggleBtn.addEventListener('click', () => {
body.classList.toggle('dark');
if (body.classList.contains('dark')) {
themeIcon.classList.replace('fa-sun', 'fa-moon');
localStorage.setItem('theme', 'dark');
} else {
themeIcon.classList.replace('fa-moon', 'fa-sun');
localStorage.setItem('theme', 'light');
}
});