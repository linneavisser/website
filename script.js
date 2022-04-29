// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// PRODUCT LIST
window.addEventListener("DOMContentLoaded", init);

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(
    "https://thordiskara.com/wp_silfen/wp-json/wp/v2/bag?_embed"
  );
  showBag(await result.json());
}

function showBag(bagArray) {
  console.log(bagArray);
  const template = document.querySelector(".productlistTemplate").content;
  const parentElement = document.querySelector(".productlistmain");
  bagArray.forEach((bag) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".bagName").textContent = bag.title.rendered;
    copy
      .querySelector("a")
      .setAttribute("href", `productView.html?id=${bag.id}`);
    copy.querySelector(".price span").textContent = bag.price;
    copy.querySelector(".bagImg").src =
      bag._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    parentElement.appendChild(copy);
  });
}

// PRODUCT VIEW
