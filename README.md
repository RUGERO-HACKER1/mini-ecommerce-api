# 📦 Mini E-Commerce API

A backend API for managing products, carts, orders, and authentication — built with **TypeScript**, **Express**, and **MongoDB**. Designed for scalability, security, and real-world use.

---

## 🚀 Features

- ✅ User authentication with JWT
- 🛒 Product management (CRUD)
- 🧺 Cart operations
- 📦 Order placement and tracking
- 🔐 Role-based access (admin/user)
- 📄 Swagger documentation (`/api-docs`)
- 🧪 Postman-ready endpoints

---

## 🧰 Tech Stack

| Layer       | Tools                          |
|-------------|--------------------------------|
| Language    | TypeScript                     |
| Framework   | Express.js                     |
| Database    | MongoDB + Mongoose             |
| Auth        | JWT + bcryptjs                 |
| Docs        | Swagger UI                     |
| Validation  | express-validator              |
| Dev Tools   | ts-node-dev, dotenv            |

---

## 📁 Project Structure

src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── config/
├── app.ts
├── server.ts


---

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/miniecommerceapi.git
   cd mini-ecommerce-api
npm install

PORT=4000
MONGO_URI=mongodb://localhost:27017/mini_ecommerce
JWT_SECRET=RUGERO_Secret_2025_Auth_Token_Key

npx ts-node-dev src/server.ts


## 📮 API Endpoints


## 🔐 Auth

Method	Endpoint	Description
POST	/api/auth/signup	Register a user
POST	/api/auth/login	Log in and get JWT


## 🛒 Products


Method	Endpoint	Description
GET	/api/products	List all products
POST	/api/products	Create a product
DELETE	/api/products/:id	Delete a product
## 📦 Orders


Method	Endpoint	Description

POST	/api/orders	Place an order
GET	/api/orders	Admin: view all orders
GET	/api/orders/:id	View specific order
DELETE	/api/orders/:id	Admin: delete order



## 📄 Swagger Docs

Visit: (http://localhost:4000/api-docs)


## 🧠 Author

RUGERO Fidele 
Kigali, Rwanda