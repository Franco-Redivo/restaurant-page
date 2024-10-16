import './styles.css';
function loadMenuPage() {
  const content = document.querySelector("#content");
  const menu = document.createElement('div');
  menu.classList.add('menudiv');
  menu.innerHTML = `
    <h1>Menu</h1>
    <div>
        <div>
            <h2>Cheese Burger</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p>$12.99</p>
        </div>
        <div>
            <h2>chicken wings</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            <p>$8.99</p>
        </div>
        <div>
            <h2>Cheese Pizza</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique.</p>
            <p>$7.99</p>
        </div>
        <div>
            <h2>Baby Back Ribs</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p>$16.99</p>
        </div>
        <div>
            <h2>Cesar Salad</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et .</p>
            <p>$9.99</p>
        </div>
        <div>
            <h2>Tiramisu</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p>$5.99</p>
        </div>                   
    </div>
  `;
    content.appendChild(menu);

}

export default loadMenuPage;