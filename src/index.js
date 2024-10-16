import "./styles.css";
import "./home.css";
import "./menu.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";

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

