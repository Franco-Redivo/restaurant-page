import "./styles.css";
import "./home.css";
import "./menu.css";
import "./about.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

loadHomePage();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  loadHomePage();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenuPage();
});

aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadAboutPage();
});

