const API_URL = "http://localhost:5000/api/products";

//fetch all products
async function fetchProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  data.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${product.name}- ₹${product.price}</span>
    <button onClick={"deleteProduct(${product.id})"}>Delete</button>
<button onClick="showUpdateForm(${product.id}, '${product.name}', ${product.price})">Edit</button>`;
    container.appendChild(li);
  });
}

//create product
async function createProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (!name || !price) {
    alert("Please enter product name and price");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price }),
  });

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";

  fetchProducts();
}

async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  fetchProducts();
}

function showUpdateForm(id, name, price) {
  document.getElementById("updateId").value = id;
  document.getElementById("updateName").value = name;
  document.getElementById("updatePrice").value = price;

  document.getElementById("updateSection").style.display = "block";
}

async function updateProduct() {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const price = document.getElementById("updatePrice").value;

  if (!id || !name || !price) {
    alert("Enter all update fields");
    return;
  }

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price }),
  });

  document.getElementById("updateSection").style.display = "none";

  fetchProducts();
}


//fetch products when page loads

fetchProducts();
