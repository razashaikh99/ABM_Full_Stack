# Frontend conventions

- Keep every page in `Frontend/src/Pages/<Page>/`, with UI in `index.jsx` and page state, refs, derived behavior, and handlers in its single `index.function.js` hook.
- Keep components used by only one page in that page's lowercase `components/` folder. Keep components shared across pages or routes in the global `Frontend/src/Components/` folder.
- Each global component has its own `Frontend/src/Components/<Component>/` folder with UI in `index.jsx` and its own state, refs, calculations, validation, and handlers in `index.function.js`. Do not group global components into Auth, Cart, or Common category folders. Static components may leave their function module empty until functionality is needed.
- Page components receive state, refs, and handlers through props from the page hook. Do not create component-specific function files or separate component hooks inside page folders.
- Put static datasets, default objects, and settings in `Frontend/src/config/index.js`. UI components import static config directly instead of receiving unchanged config through page hooks or props. Function files may import config when required for initialization or calculations.
- Keep all image assets in `Frontend/src/assets/images/` and import them through its `index.js` exports.
- Match the Home page's spacing: blank lines between logical statements and UI sections, multiline destructuring and returned objects, four-space indentation in page files.
- Avoid explanatory source comments and unused imports. Keep necessary tooling directives.
- Keep global CSS and Tailwind settings in `Frontend/src/App.css`.
- Run frontend lint and an appropriate build check after functional changes. Do not commit or push unless requested.
