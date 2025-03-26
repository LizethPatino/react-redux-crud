# Advanced CRUD Project with React, Redux, and Validations

## 📌 Description
This project is a web application developed with React and Redux that allows user management through CRUD operations (Create, Read, Update, Delete). However, it goes beyond a basic CRUD by including:

- **Advanced validations with Yup and React Hook Form**
- **State management with Redux Toolkit**
- **Modular design with pure CSS**
- **Clean and reusable componentization**

## 🚀 Technologies Used

- **React** with TypeScript
- **Redux Toolkit** for global state management
- **React Hook Form** for form management
- **Yup** for data validations
- **CSS Modules** for encapsulated styles

## 📂 Project Structure

```
📦 proyecto-crud
├── 📂 components
│   ├── 📜 Form.tsx       # Form component with validations
│   ├── 📜 Table.tsx      # Component to list users
│   ├── 📜 Modal.tsx      # Reusable modal component
├── 📂 pages
│   ├── 📜 CrudPage.tsx   # Main CRUD page
├── 📂 store
│   ├── 📜 userSlice.ts   # User state and actions in Redux
├── 📂 services
│   ├── 📜 userService.ts # API simulation to fetch users
├── 📂 types
│   ├── 📜 index.ts       # TypeScript types used in the project
├── 📂 styles
│   ├── 📜 Form.module.css  # Form styles
│   ├── 📜 Table.module.css # Table styles
│   ├── 📜 Modal.module.css # Modal styles
├── 📜 README.md         # Project documentation
├── 📜 package.json      # Dependencies and configuration
```

## 🛠 Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/lizethPatino/react-redux-crud.git
   ```
2. Navigate to the project folder:
   ```bash
   cd react-redux-crud
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open in your browser: `http://localhost:3000`

## 📌 Features

- ✅ **Add users with real-time validations**
- ✅ **Edit users with pre-filled data**
- ✅ **Delete users with instant updates**
- ✅ **Reusable modal for forms**
- ✅ **Responsive and accessible design**

## 📌 Future Improvements

- 🚀 **Unit tests**
- 🚀 **Integration with a real API**
- 🚀 **User authentication**
- 🚀 **Pagination and advanced search**

## 📄 License

This project is licensed under the MIT license.

