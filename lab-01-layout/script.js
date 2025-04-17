// Данные сайта
let siteInfo = {
  htmlName: "Science States.html",
  siteName: "Библиотека"
};

// Заполнение Header
function renderHeader() {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
    <div class="logo">${siteInfo.siteName}</div>
    <ul class="nav-menu">
      <li><a href="#hero">Главная</a></li>
      <li><a href="#about">О нас</a></li>
      <li><a href="#features">Особенности</a></li>
      <li><a href="#gallery">Галерея</a></li>
      <li><a href="#contact">Контакты</a></li>
    </ul>
    <div class="burger" id="burger">&#9776;</div>
  `;
}

// Заполнение Hero
function renderHero() {
  document.getElementById("hero").innerHTML = `
    <div class="hero-content">
      <h1>Добро пожаловать в ${siteInfo.siteName}</h1>
      <p>Откройте для себя мир знаний и научных статей</p>
      <button class="btn-more" onclick="openModal()">Узнать больше</button>
    </div>
  `;
}

// Заполнение About
function renderAbout() {
  document.getElementById("about").innerHTML = `
    <div class="container">
      <h2>О нас</h2>
      <p>Мы предоставляем доступ к обширной коллекции научных и учебных материалов. Наша цель — сделать знания доступными каждому.</p>
    </div>
  `;
}

// Заполнение Features
function renderFeatures() {
  const features = [
    { icon: "fas fa-book", title: "Тысячи книг" },
    { icon: "fas fa-brain", title: "Научные статьи" },
    { icon: "fas fa-laptop", title: "Доступ онлайн" }
  ];

  let html = '<div class="container"><h2>Особенности</h2><div class="features-grid">';
  features.forEach(f => {
    html += `
      <div class="feature-card">
        <i class="${f.icon}"></i>
        <h3>${f.title}</h3>
      </div>
    `;
  });
  html += '</div></div>';
  document.getElementById("features").innerHTML = html;
}

// Заполнение Gallery
function renderGallery() {
  const galleryItems = [
    { id: 1011, alt: "Книга 1" },
    { id: 1025, alt: "Книга 2" },
    { id: 1033, alt: "Книга 3" }
  ];

  let html = '<div class="container"><h2>Галерея</h2><div class="gallery-grid">';
  galleryItems.forEach(item => {
    html += `
      <img 
        src="https://picsum.photos/id/${item.id}/300/400" 
        srcset="https://picsum.photos/id/${item.id}/150/200 150w, https://picsum.photos/id/${item.id}/300/400 300w"
        sizes="(max-width: 600px) 150px, 300px"
        loading="lazy" 
        alt="${item.alt}">
    `;
  });
  html += '</div></div>';
  document.getElementById("gallery").innerHTML = html;
}

// Заполнение Contact
function renderContact() {
  document.getElementById("contact").innerHTML = `
    <div class="container">
      <h2>Связаться с нами</h2>
      <form id="contactForm">
        <input type="text" name="name" placeholder="Ваше имя" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Сообщение" required></textarea>
        <button type="submit">Отправить</button>
      </form>
      <div class="contact-info">
        <p><strong>Адрес:</strong> г. Москва, ул. Науки, 42</p>
        <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
        <p><strong>Email:</strong> info@library.ru</p>
      </div>
    </div>
  `;
}

// Заполнение Footer
function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <div class="container footer-content">
      <div class="socials">
        <a href="#"><i class="fab fa-vk"></i></a>
        <a href="#"><i class="fab fa-telegram"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
      </div>
      <p>&copy; 2025 ${siteInfo.siteName}. Все права защищены.</p>
    </div>
  `;
}

// Плавная прокрутка
document.addEventListener("click", function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Валидация формы
document.addEventListener("submit", function(e) {
  if (e.target.id === "contactForm") {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;
    if (!email || !name || !message) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    if (!email.includes("@")) {
      alert("Введите корректный email.");
      return;
    }
    alert("Спасибо за сообщение!");
    form.reset();
  }
});

// Модальное окно (пример)
function openModal() {
  alert("Здесь может быть модальное окно с дополнительной информацией.");
}

// Инициализация после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  // Сначала отрисовываем шапку, чтобы появился burger
  renderHeader();

  // Подключаем бургер-меню после отрисовки
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Отрисовываем остальные секции
  renderHero();
  renderAbout();
  renderFeatures();
  renderGallery();
  renderContact();
  renderFooter();
});
