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
├── public/                  # Static assets such as logos, banners, and product images
│   ├── Logo/
│   ├── BannerImages/
│   └── ProductsImages/
├── src/                     # Main source code of the application
│   ├── Components/          # Reusable UI components
│   │   ├── Auth/            # Login, register, and forgot password forms
│   │   ├── Cart/            # Cart sidebar and cart item UI
│   │   ├── Checkout/        # Billing and order summary components
│   │   ├── Common/          # Navbar, footer, top bar, loader, etc.
│   │   ├── Contact/         # Contact form and contact details
│   │   └── Home/            # Homepage sections such as hero, categories, products
│   ├── Context/             # React context providers for auth, cart, and products
│   ├── Data/                # Static data such as products, categories, and testimonials
│   ├── Hooks/               # Custom hooks like useCart
│   ├── Pages/               # Main pages of the app
│   ├── Styles/              # Global styling files
│   ├── Utils/               # Utility helpers and formatting functions
│   ├── App.jsx              # Main app layout
│   ├── AppRouter.jsx        # Route definitions
│   └── main.jsx             # Application entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

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

- This frontend is currently focused on the UI and user experience.
- Backend integration may be required for full e-commerce functionality such as real authentication, orders, and persistent cart data.

## Author

AlBayt Mart Frontend Project