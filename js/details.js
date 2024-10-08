document.addEventListener('DOMContentLoaded', showProductDetails);

const url = 'https://668d7a88099db4c579f318c8.mockapi.io/products';

async function showProductDetails() {
	const urlSearchParam = new URLSearchParams(window.location.search);
	const productId = urlSearchParam.get('id');

	const response = await fetch(`${url}/${productId}`);
	const product = await response.json();

	document.querySelector('.main').innerHTML = `
	<div class="cart-container">
	<div class="card-details">
		<div class="image">
			<img width="400px" src=${product.imageUrl} />
		</div>
		<div class="info">
			<h1>${product.name}</h1>
			<h2>${product.details}</h2>
			<h2>${product.price} lei</h2>
			<h4>Available stock: ${product.stock}</h4>
			<button class="btn add-to-cart" 
                data-id="${product.id}"
                data-price="${product.price.toFixed(2)}"
                data-name="${product.name}"
                data-image="${product.imageUrl}">
               <i class="fa-solid fa-cart-shopping"></i>
            </button>
		</div>
		</div>
	</div>`;
}