let product = {
  electronics: [
    {
      product_name: "laptop",
      prise: 10000,
      brand: "vivo",
      type: "gaming",
      available: true,
    },
    {
      product_name: "mobile",
      prise: 100000,
      brand: "poco",
      type: "gaming",
      available: true,
    },
    {
      product_name: "pc",
      prise: 1000,
      brand: "pc",
      type: "gaming",
      available: true,
    },
    {
      product_name: "cc",
      prise: 100,
      brand: "i",
      type: "gaming",
      available: true,
    },
    {
      product_name: "coco",
      prise: 10,
      brand: "magzin",
      type: "gaming",
      available: true,
    },
  ],

  cloths: [
    {
      product_name: "shirt",
      prise: 10000,
      brand: "nike",
      type: "sports",
      available: true,
    },
    {
      product_name: "paint",
      prise: 100000,
      brand: "pike",
      type: "gaming",
      available: true,
    },
    {
      product_name: "tshirt",
      prise: 1000,
      brand: "mike",
      type: "pick pick",
      available: true,
    },
    {
      product_name: "bunny",
      prise: 100,
      brand: "zara",
      type: "fit",
      available: true,
    },
    {
      product_name: "kurta",
      prise: 10,
      brand: "magic",
      type: "gaming",
      available: true,
    },
  ],

  footwares: [
    {
      product_name: "belt",
      prise: 10000,
      brand: "para",
      type: "gaming",
      available: true,
    },
    {
      product_name: "shooes",
      prise: 100000,
      brand: "gon",
      type: "gaming",
      available: true,
    },
    {
      product_name: "slippers",
      prise: 1000,
      brand: "pc",
      type: "gaming",
      available: true,
    },
    {
      product_name: "crocks",
      prise: 100,
      brand: "i",
      type: "gaming",
      available: true,
    },
    {
      product_name: "cheeku",
      prise: 10,
      brand: "magzin",
      type: "gaming",
      available: true,
    },
  ],
};

let container = document.querySelector(".container-u");
let productsdiv = document.querySelector(".products");
let cart = [];
for (let p in product) {
  let h1 = document.createElement("h1");
  h1.innerHTML = `<h1>${p}</h1>`;
  productsdiv.append(h1);
  product[p].map((ele, ind) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    card.style.margin = "10px";
    card.style.border = "2px solid black";
    let image = document.createElement("img");
    image.setAttribute("alt", `${ele.product_name}`);
    image.setAttribute(
      "src",
      "https://th.bing.com/th/id/OIP.B7vLzditRRJGxq1MSpB3QQHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    );
    image.style.width = "100%";
    card.append(image);
    let cardBody = document.createElement("div");
    let title = document.createElement("h5");
    title.innerHTML = `<h5>${ele.brand}</h5>`;
    cardBody.append(title);
    let price = document.createElement("span");
    price.textContent = ele.prise;
    cardBody.append(price);
    let addCart = document.createElement("button");
    addCart.textContent = "add to cart";
    addCart.setAttribute("class", "btn btn-primary");
    cardBody.append(addCart);
    card.append(cardBody);
    addCart.addEventListener("click", () => {
      cart.push({ image, price, cardBody });
      localStorage.setItem("cart", cart);
    });
    productsdiv.append(card);
  });
}
