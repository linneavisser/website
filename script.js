// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// PRODUCT LIST & PRODUCT VIEW
window.addEventListener("DOMContentLoaded", init);

function init(event) {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let url = "https://thordiskara.com/wp_silfen/wp-json/wp/v2/bag";

  if (id) {
    url += `/${id}`;
  }

  getData(url + "?_embed");

  async function getData(fetchurl) {
    console.log(fetchurl);
    let result = await fetch(fetchurl);
    if (id) {
      showSingleBag(await result.json());
    } else {
      showBag(await result.json());
    }
  }
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

function showSingleBag(singlebag) {
  console.log(singlebag);
  document.querySelector(".bagName").textContent = singlebag.bagname;
  document.querySelector(".bagPrice span").textContent = singlebag.price;

  document.querySelector(".description").textContent = singlebag.description;
  document.querySelector(".bagColor").textContent = singlebag.color;
  document.querySelector(".toggleInner .bagMaterial span").textContent =
    singlebag.material;
  document.querySelector(".toggleInner .bagDimensions span").textContent =
    singlebag.dimensions;
  document.querySelector(".toggleInner .bagStrap span").textContent =
    singlebag.straplength;
  document.querySelector(".bagImg").src =
    singlebag._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.large.source_url;
}
