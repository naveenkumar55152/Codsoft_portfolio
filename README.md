# Classic Personal Portfolio

A premium, simple, and classic single-page personal portfolio website designed with clean typography, balanced editorial layout, and classic styling. Built entirely with vanilla HTML5, CSS3, and JavaScript—using no external frameworks or libraries.

---

## Design Aesthetic
- **Color Palette**: Sophisticated light theme featuring warm alabaster (`#fcfbfa`), soft neutral beige (`#f5f3ed`), charcoal body text (`#1a1917`), and classic gold/bronze highlights (`#8b7754`).
- **Typography**: Editorial serif headings using *Playfair Display* paired with a clean, modern sans-serif body typeface *Plus Jakarta Sans*.
- **Structure**: High-contrast minimal layouts, crisp thin borders, and generous white space, drawing inspiration from high-end print design and architectural portfolios.

---

## Folder Structure

```text
portfolio/
├── assets/
│   ├── profile.png      # Profile picture (classic black and white portrait)
│   ├── project1.png     # Screenshot mockup of Project 1 (Editorial Magazine)
│   ├── project2.png     # Screenshot mockup of Project 2 (E-Commerce Mobile)
│   ├── project3.png     # Screenshot mockup of Project 3 (Weather Dashboard)
│   └── resume.pdf       # Professional curriculum vitae PDF
├── index.html           # Main semantic HTML file
├── styles.css           # Custom CSS stylesheets (variables, layout grid, typography)
├── app.js               # Interactive functionality (scroll-spy, mobile navigation, contact form)
└── README.md            # Project documentation and guide
```

---

## Features
1. **Header & Navigation**: A sticky glassmorphic navigation bar with scroll detection and active-link indicators (Scroll-Spy). Supports a responsive mobile menu drawer.
2. **Hero Section**: Typographic layout introducing the developer's core specialties and links to key actions.
3. **About Section**: Professional summary placed side-by-side with an elegant double-framed profile portrait.
4. **Areas of Expertise (Skills)**: Structured card grid featuring inline custom SVG icons representing design, frontend code, and development tools.
5. **Selected Projects**: Cards highlighting detailed descriptions, category labels, technology badges, custom hover zoom scaling, and links.
6. **Resume (CV)**: Prominent call-to-action banner supporting inline download of the CV in PDF format.
7. **Contact**: Split section containing active links to Email, Phone, and a fully functional interactive form with animated inputs and validation simulation.
8. **Footer**: Quick navigation links, custom SVG social icons, and copyright details.

---

## Running Locally

To view the portfolio website on your local machine:
1. Open the project folder.
2. Double-click the `index.html` file to launch it directly in your web browser.
3. Alternatively, if you have a local HTTP server tooling installed (e.g., Python, Live Server extension in VS Code, or Node.js server), serve the root folder:
   - **Python**: Run `python -m http.server 8000` and open `http://localhost:8000`.
   - **Node.js**: Run `npx http-server -p 8000` (requires Node/NPM installed) and open `http://localhost:8000`.

---

## Customization Guide

### 1. Update Personal Details
Open `index.html` and modify the text content to match your personal identity:
- **Logo/Name**: Update `<span class="logo-text">` and `<span class="footer-logo">`.
- **Text & Headlines**: Change headings, titles, paragraph paragraphs, and email/phone numbers in the `#about` and `#contact` sections.
- **Social Handles**: Update the `href` values inside the `<div class="footer-socials">` links in the footer.

### 2. Replace Portfolio Assets
Save your custom files under the `assets/` directory using the same names, or update their paths inside `index.html`:
- **Profile Headshot**: Replace `assets/profile.png` (a square ratio grayscale crop is recommended for classic aesthetics).
- **Projects Preview**: Place your project showcase screenshots inside `assets/` named as `project1.png`, `project2.png`, and `project3.png`.
- **Resume Document**: Overwrite `assets/resume.pdf` with your actual professional resume.
