import "./styles.css";

function loadHomePage(){
    const content = document.querySelector("#content");
    const banner = document.createElement("div");


    banner.classList.add("banner");
    banner.innerHTML = `
        <h1>Delicious Fast Food</h1>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <button>Order Now</button>
    `;
    content.appendChild(banner);

}

export default loadHomePage;