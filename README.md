# Grocery Application (React + TypeScript + Vite)

## Getting Started

The demo is hosted at ,

To run the application locally, follow the instructions:

- Install the application's dependencies:

```bash
npm install
```

- Run the local development server

```bash
npm run dev
```

- Open `http://localhost:5173` in your browser to interact with the application.

## Notes

### Features

- The user can view any grocery item
- The user can favourite and unfavourite any grocery item
- The user can view their list of favourite grocery items
- The user can place items (with varying quantities) in the cart.
- The user can remove items (with quantity set to 0) from the cart.
- The cart calculates the total price of the items in the cart based on the item's price and their quantity.
- The user can update their username.

### Styling

- Tailwind CSS is used for the styling with custom css variables for brand colors

```css
--brand-background: 220 67% 96%;
--brand-text-primary: 0 0% 0%;
--brand-text-secondary: 0 1% 26%;
--brand-text-muted: 0 0% 63%;

--brand-white-primary: 0 0% 100%;
--brand-teal-primary: 107 61% 94%;
--brand-pink-primary: 344 100% 95%;
--brand-orange-primary: 14 81% 51%;
```

### Data Persistence

- Dummy data is used to initialize the product data, located at `src/data/Products.json`
- Local storage is used to store the Favourites, Cart and User data
