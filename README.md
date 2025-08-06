# UnityWorks

A responsive React frontend website for an NGO platform "UnityWorks" featuring a Home page, Volunteer registration form, and About Us section. Built with Vite, React Router, and modern React best practices.

---

## Demo

*(Add a live demo link here if deployed)*

---

## Features

- **Home Page** showcasing the NGO's mission and impact stats.
- **Volunteer Registration Form** with accessible and validated inputs for users to sign up.
- **About Us Page** presenting team members with photos and core values.
- Responsive design optimized for desktops and mobile devices.
- Mobile-friendly navigation menu (hamburger menu) with auto-collapse on link click.
- Form validation including required fields and phone number input restrictions.
- Fully functional routing with React Router (Home, Volunteer, About).

---

## Technologies Used

- React 18
- Vite (build tool)
- React Router DOM v6
- CSS (with responsive design)
- Node.js & npm for package management

---

## Project Structure

UNITYWORKS/
├── node_modules/                # Installed dependencies (auto-generated)
├── public/                      # Static assets accessible at root path (favicons, robots.txt etc.)
│   └── favicon.ico              # Example: Site favicon
├── src/                        # Source files
│   ├── assets/                 # Images, logos, icons, photos
│   │    ├── alice.jpg
│   │    ├── michael.jpg
│   │    └── sara.jpg
│   │
│   ├── components/             # Reusable UI components (buttons, cards, navbars, etc.)
│   │    └── /* optional if you create reusable components */
│   │
│   ├── pages/                  # Route-specific page components
│   │    ├── About.jsx
│   │    ├── Home.jsx
│   │    └── Volunteer.jsx
│   │
│   ├── styles/                 # CSS/SASS files - modular or global styling
│   │    ├── App.css            # Main app-wide styles
│   │    └── index.css          # Global resets and base styles
│   │
│   ├── App.jsx                 # Main app routing and layout
│   ├── main.jsx                # React app entry point
│   └── vite-env.d.ts           # Vite environment types (if using TypeScript)
│
├── .gitattributes              # Git config for line endings
├── .gitignore                  # Files/folders ignored by git (node_modules, dist, etc.)
├── index.html                  # Root HTML template
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Exact dependency versions (auto-generated)
├── vite.config.js              # Vite configuration
└── README.md                   # Project overview and instructions


---

## Setup & Run Locally

1. **Clone the repository:**
git clone https://github.com/YOUR-USERNAME/unityworks.git
cd unityworks

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm run dev

4. **Open the app in your browser:**

Visit [http://localhost:5173](http://localhost:5173)

---

## Build for Production

To create a production-ready build:
npm run build


The optimized files will be in the `dist/` folder.

---

## Deployment

You can deploy the `dist/` folder on any static hosting service like Netlify, Vercel, or GitHub Pages.

---

## Contributing

Contributions are welcome! Please fork the repo and create a pull request with your improvements.

---

## License

MIT License © 2025 UnityWorks

---

## Contact

For questions or feedback, reach out to **[Your Name or Team Name]** at [your.email@example.com].

---

*Thank you for supporting UnityWorks and helping empower communities worldwide!*

