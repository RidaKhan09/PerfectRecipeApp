# 🍽️ PerfectRecipe - AI Recipe Generator Web App

PerfectRecipe is a full-stack MERN application that helps users generate personalized recipes using AI. Users can buy coins to generate recipes, view recipe details, explore related meals, and manage their profiles. The platform is secure, responsive, and user-friendly, with seamless authentication and real-time coin tracking.

---

## 🌟 Features

- 🔐 **User Authentication**: Signup, Login, and JWT-based session management.
- 🤖 **AI-Powered Recipe Generator**: Generate recipes based on user preferences.
- 💰 **Coin System**: Users purchase coins via Stripe and spend them on recipe generation.
- 🍲 **Recipe Management**: View detailed recipe info, nutrition, ingredients, etc.
- 🔍 **Search & Filters**: Browse recipes by tags, cuisine, or collections.
- 🧠 **Redux State Management**: Global state handling for users, recipes, and coins.
- 💻 **Responsive Design**: Fully responsive UI built with Tailwind CSS.
---

## 🧱 Tech Stack

### 🖥️ Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router DOM
- React Icons

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Stripe for payments
- dotenv

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/PerfectRecipeApp.git
cd PerfectRecipeApp

**2. Backend Setup**
cd server
npm install

Create a .env file in /server with the following:
PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000

Start Backend Server:
npm run dev

**3. Frontend Setup**
cd Recipe_web
npm install

Start React Frontend:
npm start

💡 Folder Structure (Brief)
PerfectRecipe/
├── Recipe+web/           # React App
│   ├── components/       # Reusable components
│   ├── pages/            # Route-based pages
│   ├── redux/            # Redux slices
│   └── utils/            # Helper functions and configs
├── server/               # Express Server
│   ├── controllers/      # API Logic
│   ├── models/           # Mongoose Models
│   ├── routes/           # API Routes
│   ├── middleware/       # JWT Auth Middleware
│   └── config/           # DB and Stripe setup

🧪 API Endpoints (Sample)
**Auth**
POST /api/auth/register
POST /api/auth/login
**Recipes**
POST /api/recipes/generate
GET /api/recipes/:id
GET /api/recipes
**Coins**
POST /api/coins/purchase
GET /api/coins/user

**🧑‍💻 Developer
Rida Khan
🔗 LinkedIn
📧 krida2686@gmail.com**


git clone https://github.com/your-username/PerfectRecipeApp.git
cd PerfectRecipeApp
