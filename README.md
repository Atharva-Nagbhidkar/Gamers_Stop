# Gamers Stop

Welcome to **Gamers Stop**! This is a full-stack project built using the MERN stack (MongoDB, Express, React, Node.js). The website provides a seamless user experience and robust functionality tailored for gamers.

## Features

### Authentication & Authorization
- **User Registration & Login**: Users can register and log in to the website.
- **Secure Data Storage**: All user data is securely stored in a MongoDB database.
- **Validation**: Validation checks ensure data integrity during registration and login.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for user verification.

### CRUD Operations
- **Full CRUD Functionality**: Create, read, update, and delete operations for user and service data.
- **Admin Panel**: Admins have exclusive access to manage user information and messages.

### Dynamic Content Display
- **Service Data**: Fetch and display data from the backend as HTML cards, providing users with up-to-date information on various gaming services.

### Contact Us
- **Message Submission**: Logged-in users can send messages through a dedicated contact page.
- **Admin Access**: Admins can view and manage these messages in the admin panel.

### Admin Panel
- **User Management**: Secure admin panel for comprehensive user management, including editing and deleting user data.
- **Message Management**: Admins can view and delete messages sent by users.
- **Access Control**: Non-admin users attempting to access the admin panel will see an access denied error.

### State Management with Context API
- **React Context API**: Seamless state management system for authentication and service data.

### User Feedback with Toast Messages
- **Instant Feedback**: Users receive instant feedback through toast messages on actions like login, registration, and errors.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/Atharva-Nagbhidkar/Gamers_Stop.git
2. Navigate to the project directory:
   ```sh
    cd Gamers_Stop
3. Install NPM packages for both frontend and backend:
   ```sh
    npm install
    cd client
    npm install
4. Start the development server:
    ```sh
    cd ..
    npm run dev

## Usage

- Open your browser and navigate to http://localhost:5173.
- Register for a new account or log in if you already have an account.
- Explore the features like viewing gaming services, sending messages, and, if you're an admin, managing user data and messages.
