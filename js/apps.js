// Put the apps
const apps = [
  {
    id: 'cronus',
    label: "Cronus",
    img: "cronus-logo.svg",
    desc: "Deixe-nos cuidar da logística da sua empresa, gerindo colaboradores, clientes, stock e muito mais.",
    show: true,
  },
  {
    id: 7,
    label: "Kapital",
    img: "money-check-alt-solid.svg",
    desc: "Faça uma gestão inteligente do seu capital.",
    show: true,
  },
  {
    id: 6,
    label: "House",
    img: "house.svg",
    desc: "Encontre residências para comprar ou arendar.",
    show: true,
  },

];

let _apps = new String();

for (const { label, img, desc, show } of apps) {
  if (show)
    _apps += `<a
        href="https://${label}.${app_title}.com"
        target="_blank"
        class="product"
      >
        <figure>
          <img
            width="50"
            src="assets/img/services/${img}"
            alt="${label}-logo"
          />
        </figure>
        <p class="title">${label} <i class="la la-external-link"></i></p>
        <p class="desc">
          ${desc}
        </p>
      </a>`;
}

document.getElementById("products").innerHTML = _apps;
