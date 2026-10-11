const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

function currentTheme() {
  const explicitTheme = root.getAttribute('data-theme');
  if (explicitTheme) return explicitTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

themeToggle.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('theme', nextTheme);
  } catch (e) {}
});

document.getElementById('ano-atual').textContent = new Date().getFullYear();
