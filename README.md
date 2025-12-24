# 💬 MERN Chat App

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, full-stack real-time chat application built with the MERN stack featuring instant messaging, user authentication, and customizable themes.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Reference](#-api-reference) • [Contributing](#-contributing)

</div>

---

## ✨ Features

### 🔐 Authentication & Security
- **User Registration** - Create an account with email, full name, and password
- **Secure Login** - JWT-based authentication with HTTP-only cookies
- **Password Encryption** - Bcrypt hashing for secure password storage
- **Protected Routes** - Middleware-based route protection

### 💬 Real-Time Messaging
- **Instant Messages** - Socket.io powered real-time communication
- **Image Sharing** - Send and receive images in chat via Cloudinary
- **Message History** - Persistent message storage in MongoDB
- **Online Status** - See which users are currently online

### 👤 User Profile
- **Profile Picture** - Upload and update profile pictures via Cloudinary
- **User Settings** - Customize your profile and preferences
- **Cover Picture** - Optional cover picture support

### 🎨 Customization
- **32 Themes** - Choose from a wide variety of DaisyUI themes including:
  - Light, Dark, Cupcake, Synthwave, Cyberpunk, Dracula, Nord, and many more!
- **Live Preview** - Preview themes before applying
- **Persistent Settings** - Theme preferences saved in local storage

### 📱 Modern UI/UX
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Beautiful Interface** - Clean, modern design with Tailwind CSS & DaisyUI
- **Loading States** - Smooth loading animations and skeleton components
- **Toast Notifications** - Real-time feedback with react-hot-toast

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI Library |
| **Vite** | Build Tool & Dev Server |
| **React Router v7** | Client-side Routing |
| **Zustand** | State Management |
| **Axios** | HTTP Client |
| **Socket.io Client** | Real-time Communication |
| **Tailwind CSS** | Styling |
| **DaisyUI** | UI Components |
| **Lucide React** | Icons |
| **React Hot Toast** | Notifications |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime Environment |
| **Express.js** | Web Framework |
| **MongoDB** | Database |
| **Mongoose** | ODM |
| **Socket.io** | Real-time Communication |
| **JWT** | Authentication |
| **Bcrypt.js** | Password Hashing |
| **Cloudinary** | Image Storage |
| **Cookie Parser** | Cookie Handling |
| **CORS** | Cross-Origin Requests |

---

## 📁 Project Structure

```
Chat-App/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/               # Utilities & configurations
│   │   │   ├── cloudinary.js  # Cloudinary config
│   │   │   ├── db.js          # MongoDB connection
│   │   │   ├── socket.js      # Socket.io setup
│   │   │   └── utils.js       # Helper functions
│   │   ├── middleware/        # Express middlewares
│   │   ├── models/            # Mongoose schemas
│   │   │   ├── user.model.js
│   │   │   └── message.model.js
│   │   ├── routes/            # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   ├── seeds/             # Database seeders
│   │   └── index.js           # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── skeletons/
│   │   ├── constants/         # App constants
│   │   ├── lib/               # Utilities
│   │   ├── pages/             # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   └── SettingsPage.jsx
│   │   ├── store/             # Zustand stores
│   │   │   ├── useAuthStore.js
│   │   │   ├── useChatStore.js
│   │   │   └── useThemeStore.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json               # Root package.json
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local or Atlas)
- **Cloudinary Account** (for image uploads)

### Step 1: Clone the Repository
```bash
git clone https://github.com/Abdooo2235/MERN-Chat-App.git
cd MERN-Chat-App
```

### Step 2: Environment Setup

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Client URL (for CORS in production)
CLIENT_URL=http://localhost:5173
```

### Step 3: Install Dependencies

**Install all dependencies (backend + frontend):**
```bash
npm run build
```

**Or install separately:**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## 💻 Usage

### Development Mode

**Run Backend (with nodemon):**
```bash
cd backend
npm run dev
```
The server will start on `http://localhost:5001`

**Run Frontend (with Vite):**
```bash
cd frontend
npm run dev
```
The app will be available at `http://localhost:5173`

### Production Mode

**Build and Start:**
```bash
# From root directory
npm run build   # Installs dependencies and builds frontend
npm start       # Starts the backend server
```

In production, the backend serves the frontend static files.

---

## 📡 API Reference

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/signup` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login user | ❌ |
| `POST` | `/api/auth/logout` | Logout user | ✅ |
| `PUT` | `/api/auth/update-profile` | Update profile picture | ✅ |
| `GET` | `/api/auth/check` | Check authentication status | ✅ |

### Message Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/messages/users` | Get users for sidebar | ✅ |
| `GET` | `/api/messages/:id` | Get messages with a user | ✅ |
| `POST` | `/api/messages/send/:id` | Send a message | ✅ |

### Socket.io Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `connection` | Client → Server | User connects |
| `disconnect` | Client → Server | User disconnects |
| `getOnlineUsers` | Server → Client | List of online users |
| `newMessage` | Server → Client | New message received |

---

## 🔑 Getting Cloudinary Credentials

1. Go to [Cloudinary](https://cloudinary.com/) and create a free account
2. Navigate to **Dashboard**
3. Copy your:
   - Cloud Name
   - API Key
   - API Secret
4. Add them to your `.env` file

---

## 🎨 Available Themes

The app supports **32 beautiful themes** powered by DaisyUI:

<details>
<summary>Click to see all themes</summary>

| Theme | Theme | Theme | Theme |
|-------|-------|-------|-------|
| light | dark | cupcake | bumblebee |
| emerald | corporate | synthwave | retro |
| cyberpunk | valentine | halloween | garden |
| forest | aqua | lofi | pastel |
| fantasy | wireframe | black | luxury |
| dracula | cmyk | autumn | business |
| acid | lemonade | night | coffee |
| winter | dim | nord | sunset |

</details>

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Abdooo2235**

- GitHub: [@Abdooo2235](https://github.com/Abdooo2235)

---

<div align="center">

⭐ **Star this repo if you found it helpful!** ⭐

</div>
