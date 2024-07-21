const URL = `https://mate-academy.github.io/react_phone-catalog/_new/products.json`;

window.onload = async () => {
  const products = await getData();
  renderProducts(products);
};

async function getData() {
  const data = await fetch(URL)
    .then((data) => data.json())
    .then((data) => data);

  return data;
}

function renderProducts(products) {
  const productsList = document.querySelector('.catalog-grid');

  products.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.className = 'catalog-grid__cell';
    listItem.innerHTML = `
    <div class="catalog-item__top">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="catalog-item__img"
      />
    </div>
    <p class="catalog-item--title">${product.name}</p>
    <div class="catalog-item--price-row">
      <span class="catalog-item--new-price">$${product.price}</span>
      <span class="catalog-item--old-price">$${product.fullPrice}</span>
    </div>
    <ul class="catalog-item--params">
      <li class="catalog-item--params-item params-item">
        <span class="params-item--title">Screen</span>
        <span class="params-item--value">${product.screen}</span>
      </li>
      <li class="catalog-item--params-item params-item">
        <span class="params-item--title">Capacity</span>
        <span class="params-item--value">${product.capacity}</span>
      </li>
      <li class="catalog-item--params-item params-item">
        <span class="params-item--title">RAM</span>
        <span class="params-item--value">${product.ram}</span>
      </li>
    </ul>
    <div class="catalog-item--buttons">
      <button type="button" class="catalog-item catalog-item--cart-btn-empty">
        Add to cart
      </button>
      <button type="button" class="catalog-item catalog-item--fav-btn">
        fav
      </button>
    </div>`;
    productsList.appendChild(listItem);
  });
}
