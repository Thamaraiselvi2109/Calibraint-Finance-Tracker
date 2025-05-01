Here you can get the deployment link - https://thamarai-personal-finance-tracker.netlify.app/

Personal Finance Tracker — Project Overview
The Personal Finance Tracker is a full-stack React application that helps users manage their personal finances efficiently. It allows users to log in, track their income and expenses, view recent and full transaction history, and add, edit, or delete transactions. The app also includes filtering features, authentication, and state management using Redux Toolkit.

Key Features
1. Authentication: Mock login system with email and password using a JWT-like token. The token and user data are stored in Redux and persisted in localStorage.

2. Dashboard: Displays a greeting with the user’s name, a summary of total income, expenses, and current balance, along with a list of recent transactions.

3. Add/Edit Transaction: A form with fields like title, amount, type (income/expense), and date. Users can create or modify their transactions.

4. Transactions Page: A full history of transactions with filter options by type and date. Users can also edit or delete entries.

5. Logout: Clear authentication state and redirect users to the login screen.

Tech Stack
1. Frontend: React with TypeScript
2. Routing: React Router v6+
3.  Management: Redux Toolkit
4. HTTP Requests: Axios
5. Backend: JSON Server (http://localhost:3001)
6. Styling: Tailwind CSS
7. Auth Token: Mock token stored in Redux + localStorage

Design Pattern
Feature-Based Folder Structure: Code is organized by features (e.g., auth/, dashboard/, transactions/) for better scalability and maintainability.
