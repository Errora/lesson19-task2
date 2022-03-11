import './index.css';

const okCookieButton = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');
okCookieButton.addEventListener('click', () => {
  localStorage.setItem('displayCookie', 'none');
  window.location.reload();
})
const displayCookie = localStorage.getItem('displayCookie');
if (displayCookie == 'none') {
  cookieConsent.style.display = localStorage.getItem('displayCookie');
}
