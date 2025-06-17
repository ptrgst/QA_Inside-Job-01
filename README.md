# 🧪 QA Inside Job 01 - Cypress E2E Testing

Project ini merupakan implementasi end-to-end testing menggunakan **Cypress** pada situs [SauceDemo](https://www.saucedemo.com/). Pengujian meliputi proses **login**, **penambahan produk ke keranjang**, hingga **checkout**, menggunakan pendekatan **Page Object Model (POM)** dan **fixtures** sebagai data uji.

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
│ ├── e2e/ # Skenario pengujian utama (misalnya: Saucedemo.cy.js)
│ ├── fixtures/ # Data uji, seperti user.json
│ ├── support/
│ │ ├── LoginPage.js # Objek halaman untuk login
│ │ ├── ProductPage.js # Objek halaman untuk produk
│ │ ├── CheckoutPage.js # Objek halaman untuk checkout
│ │ └── commands.js # Custom command Cypress (opsional)
├── .github/
│ └── workflows/
│ └── cypress.yml # Konfigurasi CI dengan GitHub Actions
├── .gitignore
├── package.json
└── README.md
