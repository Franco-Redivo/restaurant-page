import './styles.css';

function loadAboutPage() {
  const content = document.querySelector("#content");
  const about = document.createElement('div');
  about.classList.add('aboutdiv');
  about.innerHTML = `
    <h1>About Us</h1>
    <p>Forrest Restaurant is a family owned restaurant that has been in business for over 20 years. We specialize in American cuisine and are known for our delicious burgers, wings, and ribs. Our goal is to provide our customers with a great dining experience and excellent customer service. We take pride in using fresh ingredients and preparing our food from scratch. Come visit us today and enjoy a delicious meal in a warm and welcoming atmosphere.</p>
    <p>Location: 123 Main Street, Anytown, USA</p>
    <p>Hours: Monday-Saturday 11am-9pm, Sunday 12pm-8pm</p>
  `;
  content.appendChild(about);

}

export default loadAboutPage;