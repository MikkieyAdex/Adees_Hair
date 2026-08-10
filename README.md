# 👑 Adees Hair — Premium Hair Extensions E-Commerce Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

**Adees Hair** is a feature-rich, fully responsive e-commerce web application tailored for a luxury human hair extension brand. Built as a portfolio project, this site delivers a seamless, high-conversion shopping experience inspired by modern online stores (such as Hair Virginity).

---

## 🌟 Key Features

### 🛍️ E-Commerce & Shopping Experience
* **Interactive Hero Carousel & Announcement Bar:** Rotating promo banner slider and smooth-fading hero carousels highlighting new arrivals and special offers.
* **Sticky Product Gallery:** Pinned left-side image gallery on product pages (`product.html`) that stays visible while scrolling through detailed options and descriptions.
* **Dynamic Currency Converter:** Client-side currency switching between Nigerian Naira (₦ NGN), US Dollars ($ USD), British Pounds (£ GBP), and Euros (€ EUR).
* **Interactive Product Variants:** Selectors for Hair Length, Texture (Silky Straight, Body Wave, Deep Wave, Kinky Straight), and Origin (Peruvian, Brazilian, Vietnamese) with dynamic price calculation.
* **Offcanvas Slide-Over Mini Cart:** A smooth, slide-in side drawer featuring backdrop blurring, quick quantity adjusters, item removal, and subtotal calculation.
* **Full Cart & Express Checkout:** Dedicated Cart page (`cart.html`) and a modern, Shopify-style split checkout page (`checkout.html`) with Express Payment options (Apple Pay, PayPal, Google Pay).

### 🎨 UI/UX & Design System
* **Brand Color Theme:** Clean White and Royal Purple (`#8A2BE2`) brand aesthetic.
* **Dynamic Dark / Light Mode:** Native Bootstrap 5.3 theme engine with system OS preference auto-detection, manual navbar toggle, dynamic icon updates, and `localStorage` state persistence across pages.
* **Theme Prompt Toast Notification:** Gentle, auto-hiding toast prompt informing first-time visitors about dark mode functionality.
* **Hover-Activated Mega Dropdowns:** Desktop navigation menus that expand smoothly on hover while maintaining mobile-friendly touch toggles.
* **Slide-Down Search Overlay:** Full-width search bar with background dimming/blurring, input auto-focus, and keyboard `Esc` key dismissal.

### 🔐 Authentication & Account Management
* **Dual Auth Card (`login.html`):** Smooth, single-page JavaScript toggling between Sign In and Sign Up forms without page reloads.
* **Password Visibility Toggle:** Eye icon action on password fields for showing/hiding plain text credentials.

---

## 📂 Project Directory Structure

```text
Adees_Hair/
├── index.html            # Main Homepage (Hero Slider, Categories, Featured Showcase, Reviews)
├── collection.html       # Collections Overview Page (Square Ratio Product Grid)
├── product.html          # Product Details Template (Sticky Gallery, Variant Selectors, Currency Switcher)
├── cart.html             # Dedicated Full Shopping Cart Page
├── checkout.html         # Express Split-Layout Checkout Page
├── login.html            # User Authentication (Sign In / Sign Up toggle)
├── css/
│   ├── bootstrap/        # Bootstrap 5.3 Framework CSS
│   └── style.css         # Global Custom Styles, Brand Variables, Animations, Fixes
├── js/
│   ├── bootstrap/        # Bootstrap Bundle JS
│   └── script.js         # Centralized Modular JavaScript Controller
└── img/                  # High-Resolution Product Images, Banners, and Brand Assets