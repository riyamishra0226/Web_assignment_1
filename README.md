# SkillPath - Interactive Website Enhancement Platform

An interactive, responsive, and component-driven multi-page web application built using **React.js** and **Vite**. This project fulfills the front-end web development requirements for the SkillPath evaluation module, demonstrating modern single-page routing structures, reusable UI component hierarchies, and interactive form state management.

---

## 🚀 Key Features Included

* **Single Page Application (SPA) Navigation:** Utilizing `react-router-dom` v6 to switch seamlessly between pages instantly without browser reloads.
* **Component-Based Architecture:** High modularity through reusable interface pieces like custom Hero layouts, Dynamic Feature Cards, and mapped Testimonial grids.
* **State-Driven Interactivity:** A fully functional, controlled-input Contact Form using React's `useState` hook to parse input and handle form submissions dynamically.
* **Custom Error Resolution Routing:** A dedicated wildcard `404 Error` fallback route (`NotFoundPage`) to catch incorrect URL entries and safely guide users back to the homepage.

---

## 📁 Core Directory Blueprint

```text
skillpath-app/
├── public/                 # Static asset hosting assets
├── src/
│   ├── components/         # Modular building blocks and page views
│   │   ├── AboutPage.jsx          # Structural overview page
│   │   ├── ContactPage.jsx        # State-driven interactive form page
│   │   ├── CTABanner.jsx          # Final Call-to-Action panel
│   │   ├── FeatureCard.jsx        # Reusable template data receiver
│   │   ├── Footer.jsx             # Dynamic auto-updating copyright panel
│   │   ├── HeroSection.jsx        # Landing landing banner element
│   │   ├── LandingPage.jsx        # Master assembler view for the index page
│   │   ├── NotFoundPage.jsx       # Fallback 404 router safety net page
│   │   └── TestimonialSection.jsx # Array mapping review panel
│   ├── App.css             # Component-level layout overrides
│   ├── App.jsx             # App routing and layout shell
│   ├── index.css           # Baseline global theme variables
│   └── main.jsx            # React root compiler entry point
├── package.json            # Manifest file declaring dependencies
└── README.md               # Documentation file
