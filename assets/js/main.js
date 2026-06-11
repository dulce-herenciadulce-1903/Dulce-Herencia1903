"use strict";

// Edita los precios aqui. Toda la coleccion, menu y carrito leen desde esta seccion.
const PRICES = {
  charlotteImperiale: 65,
  herenciaRomanov: 70,
  marieEloise: 75,
  tortugaImperiale: 80,
  fresaIndividual: 30,
  fresasCaja4: 115,
  fresasCaja6: 165,
  fresasCaja8: 215
};

const SETTINGS = {
  currency: "MXN",
  whatsappNumber: ""
};

const products = [
  {
    key: "charlotteImperiale",
    category: "Carta de Rebanadas",
    name: "Charlotte Impériale",
    orderName: "Charlotte Impériale",
    unitSingular: "rebanada de",
    unitPlural: "rebanadas de",
    note: "Precio por rebanada",
    description:
      "Carlota de limón con capas delicadas, notas cítricas y una textura suave y sedosa.",
    image: "assets/images/clean-charlotte-imperiale.jpg",
    imageSmall: "assets/images/clean-charlotte-imperiale-sm.jpg",
    width: 410,
    height: 520,
    alt: "Rebanada de Charlotte Impériale con crema de limón"
  },
  {
    key: "herenciaRomanov",
    category: "Carta de Rebanadas",
    name: "Herencia Romanov",
    orderName: "Herencia Romanov",
    unitSingular: "rebanada de",
    unitPlural: "rebanadas de",
    note: "Precio por rebanada",
    description:
      "Chocolate profundo, dulce de leche artesanal y una presencia inspirada en sobremesas imperiales.",
    image: "assets/images/clean-herencia-romanov.jpg",
    imageSmall: "assets/images/clean-herencia-romanov-sm.jpg",
    width: 430,
    height: 510,
    alt: "Postre Herencia Romanov de chocolate y dulce de leche"
  },
  {
    key: "marieEloise",
    category: "Carta de Rebanadas",
    name: "Marie Eloise 1903",
    orderName: "Marie Eloise 1903",
    unitSingular: "rebanada de",
    unitPlural: "rebanadas de",
    note: "Precio por rebanada",
    description:
      "Pastel de café, cocoa y un delicado toque de brandy para una sobremesa profunda.",
    image: "assets/images/clean-marie-eloise-1903.jpg",
    imageSmall: "assets/images/clean-marie-eloise-1903-sm.jpg",
    width: 430,
    height: 510,
    alt: "Pastel Marie Eloise 1903 con cobertura de chocolate"
  },
  {
    key: "tortugaImperiale",
    category: "Carta de Rebanadas",
    name: "Tortuga Impériale",
    orderName: "Tortuga Impériale",
    unitSingular: "rebanada de",
    unitPlural: "rebanadas de",
    note: "Precio por rebanada",
    description:
      "Cheesecake artesanal coronado con cajeta, chocolate oscuro y base de galleta.",
    image: "assets/images/clean-tortuga-imperiale.jpg",
    imageSmall: "assets/images/clean-tortuga-imperiale-sm.jpg",
    width: 430,
    height: 510,
    alt: "Rebanada de Tortuga Impériale con caramelo y chocolate"
  }
];

const strawberryProducts = [
  {
    key: "fresaIndividual",
    category: "Fresas Cubiertas Gourmet",
    name: "Pieza individual",
    orderName: "Fresas Cubiertas Gourmet",
    unitSingular: "pieza individual de",
    unitPlural: "piezas individuales de",
    description: "Fresa cubierta a mano con chocolate premium."
  },
  {
    key: "fresasCaja4",
    category: "Fresas Cubiertas Gourmet",
    name: "Caja de 4",
    orderName: "Fresas Cubiertas Gourmet",
    unitSingular: "caja de 4 de",
    unitPlural: "cajas de 4 de",
    description: "Caja pequeña para un detalle elegante y artesanal."
  },
  {
    key: "fresasCaja6",
    category: "Fresas Cubiertas Gourmet",
    name: "Caja de 6",
    orderName: "Fresas Cubiertas Gourmet",
    unitSingular: "caja de 6 de",
    unitPlural: "cajas de 6 de",
    description: "Selección equilibrada para regalar o compartir."
  },
  {
    key: "fresasCaja8",
    category: "Fresas Cubiertas Gourmet",
    name: "Caja de 8",
    orderName: "Fresas Cubiertas Gourmet",
    unitSingular: "caja de 8 de",
    unitPlural: "cajas de 8 de",
    description: "Caja especial para celebraciones y sobremesas."
  }
];

const editorials = [
  {
    name: "Charlotte Impériale",
    image: "assets/images/editorial-charlotte-imperiale.jpg",
    imageSmall: "assets/images/editorial-charlotte-imperiale-sm.jpg",
    width: 790,
    height: 630,
    alt: "Ficha editorial de Charlotte Impériale"
  },
  {
    name: "Tortuga Impériale",
    image: "assets/images/editorial-tortuga-imperiale.jpg",
    imageSmall: "assets/images/editorial-tortuga-imperiale-sm.jpg",
    width: 790,
    height: 622,
    alt: "Ficha editorial de Tortuga Impériale"
  },
  {
    name: "Herencia Romanov",
    image: "assets/images/editorial-herencia-romanov.jpg",
    imageSmall: "assets/images/editorial-herencia-romanov-sm.jpg",
    width: 790,
    height: 628,
    alt: "Ficha editorial de Herencia Romanov"
  },
  {
    name: "Marie Eloise 1903",
    image: "assets/images/editorial-marie-eloise-1903.jpg",
    imageSmall: "assets/images/editorial-marie-eloise-1903-sm.jpg",
    width: 788,
    height: 626,
    alt: "Ficha editorial de Marie Eloise 1903"
  }
];

const catalog = [...products, ...strawberryProducts];
const cart = new Map();

const money = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0
});

const collectionGrid = document.querySelector("#collectionGrid");
const editorialGrid = document.querySelector("#editorialGrid");
const menuList = document.querySelector("#menuList");
const strawberryGrid = document.querySelector("#strawberryGrid");
const cartToggle = document.querySelector("#cartToggle");
const cartCount = document.querySelector("#cartCount");
const cartClose = document.querySelector("#cartClose");
const cartOverlay = document.querySelector("#cartOverlay");
const orderCart = document.querySelector("#orderCart");
const cartItems = document.querySelector("#cartItems");
const cartEmpty = document.querySelector("#cartEmpty");
const cartTotal = document.querySelector("#cartTotal");
const whatsappOrder = document.querySelector("#whatsappOrder");
const openCartFromOrders = document.querySelector("#openCartFromOrders");

const formatPrice = (keyOrValue) => {
  const value = typeof keyOrValue === "number" ? keyOrValue : PRICES[keyOrValue];
  return Number.isFinite(value) ? `${money.format(value)} ${SETTINGS.currency}` : "Por anunciar";
};

const getCatalogItem = (key) => catalog.find((item) => item.key === key);

function renderCollection() {
  collectionGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card reveal">
          <figure class="product-image">
            <img
              src="${product.image}"
              srcset="${product.imageSmall} 760w, ${product.image} ${product.width}w"
              sizes="(max-width: 760px) 92vw, (max-width: 1080px) 42vw, 25vw"
              width="${product.width}"
              height="${product.height}"
              alt="${product.alt}"
              fetchpriority="low"
              decoding="async"
            >
          </figure>
          <div class="product-body">
            <span class="product-note">${product.note}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-purchase">
              <span class="price">${formatPrice(product.key)}</span>
              <button class="add-to-cart" type="button" data-product-key="${product.key}">
                Agregar al pedido
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderEditorials() {
  editorialGrid.innerHTML = editorials
    .map(
      (editorial) => `
        <figure class="editorial-card reveal">
          <img
            src="${editorial.image}"
            srcset="${editorial.imageSmall} 760w, ${editorial.image} ${editorial.width}w"
            sizes="(max-width: 760px) 92vw, 44vw"
            width="${editorial.width}"
            height="${editorial.height}"
            alt="${editorial.alt}"
            fetchpriority="low"
            decoding="async"
          >
        </figure>
      `
    )
    .join("");
}

function renderMenu() {
  const groups = [
    { title: "Carta de Rebanadas", items: products },
    { title: "Fresas Cubiertas Gourmet", items: strawberryProducts }
  ];

  menuList.innerHTML = groups
    .map(
      (group) => `
        <section class="menu-group" aria-label="${group.title}">
          <h3>${group.title}</h3>
          ${group.items
            .map(
              (item) => `
                <article class="menu-item reveal">
                  <div>
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                  </div>
                  <span class="menu-price">${formatPrice(item.key)}</span>
                </article>
              `
            )
            .join("")}
        </section>
      `
    )
    .join("");
}

function renderStrawberries() {
  strawberryGrid.innerHTML = strawberryProducts
    .map(
      (item) => `
        <article class="strawberry-mini reveal">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="strawberry-order">
            <span>${formatPrice(item.key)}</span>
            <button class="add-to-cart light" type="button" data-product-key="${item.key}">
              Agregar al pedido
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function openCart() {
  orderCart.classList.add("is-open");
  orderCart.setAttribute("aria-hidden", "false");
  cartToggle.setAttribute("aria-expanded", "true");
  cartOverlay.hidden = false;
  requestAnimationFrame(() => cartOverlay.classList.add("is-visible"));
}

function closeCart() {
  orderCart.classList.remove("is-open");
  orderCart.setAttribute("aria-hidden", "true");
  cartToggle.setAttribute("aria-expanded", "false");
  cartOverlay.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!orderCart.classList.contains("is-open")) {
      cartOverlay.hidden = true;
    }
  }, 260);
}

function addToCart(key) {
  const item = getCatalogItem(key);
  if (!item) return;

  const current = cart.get(key) || 0;
  cart.set(key, current + 1);
  renderCart();
  openCart();
}

function setQuantity(key, quantity) {
  if (quantity <= 0) {
    cart.delete(key);
  } else {
    cart.set(key, quantity);
  }
  renderCart();
}

function removeFromCart(key) {
  cart.delete(key);
  renderCart();
}

function getCartEntries() {
  return [...cart.entries()]
    .map(([key, quantity]) => {
      const item = getCatalogItem(key);
      return item ? { item, quantity, unitPrice: PRICES[key] } : null;
    })
    .filter(Boolean);
}

function getCartTotal(entries = getCartEntries()) {
  return entries.reduce((sum, entry) => sum + entry.quantity * entry.unitPrice, 0);
}

function renderCart() {
  const entries = getCartEntries();
  const totalItems = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = getCartTotal(entries);

  cartCount.textContent = String(totalItems);
  cartCount.toggleAttribute("hidden", totalItems === 0);
  cartEmpty.hidden = entries.length > 0;
  whatsappOrder.disabled = entries.length === 0;
  whatsappOrder.dataset.orderText = entries.length > 0 ? buildWhatsAppMessage() : "";
  cartTotal.textContent = formatPrice(total);

  cartItems.innerHTML = entries
    .map(({ item, quantity, unitPrice }) => {
      const subtotal = quantity * unitPrice;
      return `
        <article class="cart-item">
          <div class="cart-item-main">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <span>${formatPrice(unitPrice)} c/u</span>
          </div>
          <div class="cart-controls" aria-label="Cantidad de ${item.name}">
            <button type="button" data-cart-action="decrease" data-product-key="${item.key}" aria-label="Disminuir ${item.name}">−</button>
            <strong>${quantity}</strong>
            <button type="button" data-cart-action="increase" data-product-key="${item.key}" aria-label="Aumentar ${item.name}">+</button>
          </div>
          <div class="cart-item-total">
            <span>${formatPrice(subtotal)}</span>
            <button type="button" data-cart-action="remove" data-product-key="${item.key}">
              Eliminar
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function buildWhatsAppMessage() {
  const entries = getCartEntries();
  const lines = entries.map(({ item, quantity, unitPrice }) => {
    const unitLabel = quantity === 1 ? item.unitSingular : item.unitPlural;
    const subtotal = quantity * unitPrice;
    return `- ${quantity} ${unitLabel} ${item.orderName} — ${formatPrice(subtotal)}`;
  });

  return [
    "Hola, quiero realizar un pedido de Dulce Herencia:",
    "",
    ...lines,
    "",
    `Total: ${formatPrice(getCartTotal(entries))}`,
    "",
    "Estoy en Tecámac, Estado de México.",
    "¿Me pueden confirmar disponibilidad para viernes o sábado?"
  ].join("\n");
}

function openWhatsAppOrder() {
  if (cart.size === 0) return;

  const encodedMessage = encodeURIComponent(buildWhatsAppMessage());
  const baseUrl = SETTINGS.whatsappNumber
    ? `https://wa.me/${SETTINGS.whatsappNumber}`
    : "https://wa.me/";

  window.open(`${baseUrl}?text=${encodedMessage}`, "_blank", "noopener");
}

function setupCartEvents() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-product-key].add-to-cart");
    if (addButton) {
      addToCart(addButton.dataset.productKey);
      return;
    }

    const cartActionButton = event.target.closest("[data-cart-action]");
    if (!cartActionButton) return;

    const key = cartActionButton.dataset.productKey;
    const quantity = cart.get(key) || 0;
    const action = cartActionButton.dataset.cartAction;

    if (action === "increase") setQuantity(key, quantity + 1);
    if (action === "decrease") setQuantity(key, quantity - 1);
    if (action === "remove") removeFromCart(key);
  });

  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  whatsappOrder.addEventListener("click", openWhatsAppOrder);
  openCartFromOrders.addEventListener("click", openCart);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCart();
  });
}

function setupReveals() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupActiveNav() {
  const sections = [...document.querySelectorAll(".story-chapter, #coleccion, #detalles")];
  const links = [...document.querySelectorAll(".chapter-nav a")];

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visible.target.id}`;
        link.toggleAttribute("aria-current", isActive);
      });
    },
    { threshold: [0.32, 0.55, 0.78] }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupParallax() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const heroStillLife = document.querySelector(".hero-still-life");
  const finaleImage = document.querySelector(".finale-media img");

  if (reduceMotion) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;
    if (heroStillLife) {
      heroStillLife.style.transform = `translateY(${scrollY * 0.045}px)`;
    }

    if (finaleImage) {
      const finaleTop = document.querySelector(".finale").offsetTop;
      const finaleOffset = Math.max(0, scrollY - finaleTop);
      finaleImage.style.transform = `translateY(${finaleOffset * 0.05}px)`;
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
}

renderCollection();
renderEditorials();
renderMenu();
renderStrawberries();
renderCart();
setupCartEvents();
setupReveals();
setupActiveNav();
setupParallax();
