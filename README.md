
# Sports Equipment Online Store

## Project Overview

You are tasked with developing a **Sports Equipment Online Store**. The goal is to create a responsive e-commerce platform where customers can browse, purchase, and review various sports accessories ranging from gear to apparel. The website caters to different sports disciplines and will support user authentication and product management.

**Live URL**: [https://sports-enquipment.web.app/](https://sports-enquipment.web.app/)

**Repo Link**: [https://github.com/tawhidbokth/sports-equipment-clint](https://github.com/tawhidbokth/sports-equipment-clint)

---

## Features

### 1. **Add Equipment Page** (Private Route)

- Create a form to add equipment data to the database with the following fields:
  - Image
  - Item Name
  - Category Name
  - Description
  - Price
  - Rating
  - Customization (e.g., bat with extra grip)
  - Processing Time (delivery time)
  - Stock Status (quantity available)
  - User Email (logged-in user email, read-only)
  - User Name (logged-in user name, read-only)
  
- After successfully adding the data to the database, a success message will be displayed.

### 2. **All Sports Equipment Page**

- Display all sports equipment in a table format with details such as:
  - Item Name
  - Category Name
  - Price
  - Rating
  - Stock Status
  - And more
- Add a **View Details** button for each product that redirects the user to the **View Details Page**.

### 3. **View Details Page** (Private Route)

- Display detailed information of a product using an attractive design (cards or custom layout).
- This will be a private route, accessible only to logged-in users.

### 4. **My Equipment List** (Private Route)

- Display all equipment added by the logged-in user in a card format.
- Include the following features:
  - Update button: Redirects to the Update Page for editing the product details.
  - Delete button: A confirmation modal will appear upon clicking the delete button, and after confirmation, the product will be deleted.

### 5. **Update Page** (Private Route)

- Create a form with all required fields that were used in the **Add Equipment Page**.
- User email and username will be read-only fields.
- Show a confirmation message upon successful data update.

### 6. **404 Page**

- Add a custom **404 page** for non-existing routes.

### 7. **Loading Spinner**

- Show a **loading spinner** when data is being loaded to enhance user experience.

---

## Challenges & Additional Features

### 1. **Sort Functionality (Price)**

- Implement a sorting functionality at the top of the **All Sports Equipment Page** to sort items based on price (ascending or descending).

### 2. **Dark/Light Theme Toggle**

- Implement a dark/light theme toggle feature on the homepage for a customizable user interface.

### 3. **Use of External Packages**

- Explore and implement at least two of the following React packages:
  - **Lottie React**: For adding animations.
  - **React Awesome Reveal**: For adding reveal animations.
  - **React Tooltip**: For tooltips on elements.

---

## Technologies Used

- **React.js** for building the frontend
- **Firebase** for authentication and database management
- **Tailwind CSS** for responsive styling
- **React Router** for routing and private routes
- **React Context API** for global state management

---

## Setup Instructions

To set up this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/tawhidbokth/sports-equipment-clint.git
   ```

2. Navigate to the project folder:

   ```bash
   cd sports-equipment-clint
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Conclusion

This Sports Equipment Online Store project demonstrates key features such as product management, user authentication, and a responsive user interface. The application also includes additional features like a theme toggle, sorting functionality, and interactive animations to enhance the user experience.

---

Feel free to contribute or use this project as a reference for your own work.
```

You can copy-paste this into your `README.md` file, and feel free to adjust any parts based on your actual implementation!
