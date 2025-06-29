# 🧪 QA Inside Job 01 - Cypress E2E Testing  // Link Gdrive 10 Testing Manual https://drive.google.com/drive/folders/1gwwOLIouNVQvPZy2chcFhg1peqfL_00V?usp=drive_link

Project ini merupakan implementasi end-to-end testing menggunakan **Cypress** pada situs [SauceDemo](https://www.saucedemo.com/). Pengujian meliputi proses **login**, **penambahan produk ke keranjang**, hingga **checkout**, menggunakan pendekatan **Page Object Model (POM)**.

---

## 🚀 Fitur yang Diuji

- ✅ Login dengan user valid
- ✅ Menambahkan produk ke keranjang
- ✅ Checkout dan submit order
- ✅ Validasi UI elemen dan alur pengguna

---

## 📁 Struktur Folder

QA_Inside-Job-01/
├── cypress/
│ ├── e2e/ # Skenario pengujian utama (Saucedemo.cy.js)
│ ├── fixtures/ # Data uji, seperti user.json
│ ├── support/
│ │ ├── LoginPage.js # Objek halaman untuk login
│ │ ├── ProductPage.js # Objek halaman untuk produk
│ │ ├── CheckoutPage.js # Objek halaman untuk checkout
│ │ └── commands.js
├── .github/
│ └── workflows/
│ └── cypress.yml # Konfigurasi CI dengan GitHub Actions
├── .gitignore
├── package.json
└── README.md
