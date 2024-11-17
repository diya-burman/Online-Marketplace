const productList = []; // Store all products

// Handle adding a new product
document.getElementById('addProductForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('productName').value.trim();
  const category = document.getElementById('productCategory').value;
  const price = document.getElementById('productPrice').value;

  if (name && category && price) {
    const newProduct = { name, category, price: `₹${price}` };
    productList.push(newProduct);
    document.getElementById('addProductForm').reset(); // Clear form
    displayProducts(productList); // Refresh product list
  }
});

// Handle filtering products
document.getElementById('filterCategory').addEventListener('change', function () {
  const selectedCategory = this.value;
  const filteredProducts =
    selectedCategory === 'all'
      ? productList
      : productList.filter((product) => product.category === selectedCategory);
  displayProducts(filteredProducts);
});

// Display products in the list
function displayProducts(products) {
  const productListContainer = document.getElementById('productList');
  productListContainer.innerHTML = ''; // Clear current list

  if (products.length === 0) {
    productListContainer.innerHTML = '<p>No products available</p>';
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-item');
    productCard.innerHTML = `
      <h4>${product.name}</h4>
      <p>Category: ${product.category}</p>
      <p>Price: ${product.price}</p>
    `;
    productListContainer.appendChild(productCard);
  });
}
