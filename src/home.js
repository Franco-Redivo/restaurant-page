import "./styles.css";

function loadHomePage(){
    const content = document.querySelector("#content");
    const banner = document.createElement("div");


    banner.classList.add("banner");
    banner.innerHTML = `
        <h1>Welcome to Forrest Restaurant</h1>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
        <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <button>Order Now</button>
    `;
    content.appendChild(banner);

}

export default loadHomePage;