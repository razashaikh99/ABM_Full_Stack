# AlBayt Mart Frontend

This is the frontend of the AlBayt Mart e-commerce project. It is built with React, Vite, and Tailwind CSS to provide a modern shopping experience with a responsive user interface.

## Features

- Modern landing page with a hero section
- Product listing and shop page
- Product detail page
- Cart sidebar and checkout flow
- Authentication UI pages for login, register, and forgot password
- Responsive design for desktop and mobile devices
- Toast notifications and smooth animations
- Responsive Hero and New Arrivals carousels using React Slick
- Route-based navigation using React Router

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router DOM
- Framer Motion
- Formik + Yup
- React Toastify
- React Icons

## Project Structure

The frontend project is organized as follows:

```text
Frontend/
├── public/                  # Files served directly without bundling
├── src/                     # Main source code of the application
│   ├── assets/images/       # All images and their central named exports in index.js
│   ├── Components/          # Reusable UI components
│   │   └── <Component>/    # One folder per global component
│   │       ├── index.jsx          # UI
│   │       └── index.function.js  # Component logic
│   ├── Context/             # React context providers for auth, cart, and products
│   ├── config/              # Static datasets, page defaults, and carousel settings
│   ├── Hooks/               # Custom hooks like useCart
│   ├── Pages/               # Each page has its own folder
│   │   ├── Checkout/components/  # Billing form and order summary
│   │   ├── ContactUs/components/ # Contact form and contact details
│   │   ├── Shop/components/      # Product card, filters, and sorting
│   │   └── Home/            # Same page structure applies to other pages
│   │       ├── components/       # Home sections and carousel
│   │       ├── index.jsx          # UI and presentation
│   │       └── index.function.js  # Page hook, state, and event handlers
│   ├── App.css              # Tailwind theme and global styling
│   ├── Utils/               # Utility helpers and formatting functions
│   ├── App.jsx              # Main app layout
│   ├── AppRouter.jsx        # Route definitions
│   └── main.jsx             # Application entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

Each page renders its UI in `index.jsx` and reads state and event handlers from
`index.function.js`. Static arrays, page defaults, and carousel settings are
exported directly from `src/config/index.js`, including all homepage datasets.

## Installation

1. Navigate to the frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the application in your browser:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` → Start the development server
- `npm run build` → Create a production build
- `npm run preview` → Preview the production build locally
- `npm run lint` → Run ESLint checks

## Notes

- Shopping and informational routes share `Components/MainLayout`; `/auth`, `/login`, `/register`, and `/forgot` use a separate `AuthLayout` with no store header or footer. Desktop authentication uses a 50/50 image/form split, with a form-first layout on smaller screens.
- Product cards, prices, ratings, quantity controls, breadcrumbs, form fields, password controls, and empty states are shared components. Static catalog and page data remain in `src/config/index.js`.
- The product catalog is static. Cart quantities, totals, removal, and local-device persistence work without a backend. Online orders and payments remain unavailable, and checkout explains this instead of showing a simulated success.
- Login and registration retain the existing `http://localhost:5000/api/auth` endpoints and request/response contracts. The backend must be running for live authentication. Password-reset and contact forms prepare support emails; they do not claim an email was sent automatically. Newsletter subscriptions are not enabled.
- Search, category links, price/rating filters, and supported sort options work on the existing catalog. Newest/oldest options are omitted because the catalog has no creation dates.
- Reduced-motion preferences, keyboard focus, accessible field labels/errors, modal cart controls, and responsive mobile navigation are supported.

## Author

AlBayt Mart Frontend Project
