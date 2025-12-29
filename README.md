
```markdown
# Forever E-commerce Admin Panel

This is the **Admin Panel** for the Forever E-commerce website. Admins can log in, manage products, and view orders. Built using **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**.

---

## Features

- Admin Authentication (Login)
- Add / Edit / Remove Products
- View Orders
- Dashboard overview
- Responsive UI with Tailwind CSS

---

## Tech Stack

| Layer           | Technology                     |
|-----------------|-------------------------------|
| Frontend        | React, Tailwind CSS           |
| Backend         | Node.js, Express              |
| Database        | MongoDB                        |
| Authentication  | JWT                            |
| Hosting         | Any Node.js supported service |

---

## Folder Structure

```

forever-admin-panel/
│
├─ backend/
│   ├─ models/         # MongoDB models
│   ├─ routes/         # API routes
│   ├─ controllers/    # Route controllers
│   ├─ middleware/     # Auth middleware
│   └─ server.js       # Express server entry
│
├─ frontend/
│   ├─ src/
│   │   ├─ components/ # UI components
│   │   ├─ pages/      # Pages (Dashboard, Login, Products, Orders)
│   │   ├─ services/   # API calls
│   │   └─ App.jsx
│   └─ tailwind.config.js
│
└─ README.md

````

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/forever-admin-panel.git
cd forever-admin-panel
````

### 2. Backend Setup

```bash
cd backend
npm install
```

#### .env file

Create `.env` in `backend/`:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Run backend

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

> Frontend runs on `http://localhost:5173`

---

---

