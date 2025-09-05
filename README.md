# Mini E-Commerce API

## Overview

This is a backend API for a mini e-commerce application built with **TypeScript, Node.js, Express, MongoDB, and Mongoose**. The API allows managing **products**, **cart**, and **orders**. Authentication is not required. All data is stored in MongoDB.

---

## Table of Contents

1. [Technologies](#technologies)
2. [Setup Instructions](#setup-instructions)
3. [Environment Variables](#environment-variables)
4. [Running the Server](#running-the-server)
5. [API Endpoints](#api-endpoints)

   * [Products](#products)
   * [Cart](#cart)
   * [Orders](#orders)
6. [Postman Collection](#postman-collection)
7. [Best Practices](#best-practices)

---

## Technologies

* Node.js
* TypeScript
* Express.js
* MongoDB
* Mongoose
* Postman (for testing)
* ts-node-dev
* dotenv
* morgan

---

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate into the project directory:

```bash
cd mini-ecommerce-api
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URI=<your_mongodb_connection_string>
NODE_ENV=development
```

5. Run the server in development mode:

```bash
npm run dev
```

6. Open Postman to test the API using the exported collection or manually.

---

## Environment Variables

| Variable   | Description                                |
| ---------- | ------------------------------------------ |
| PORT       | Port number for the server (default: 4000) |
| MONGO\_URI | MongoDB connection string                  |
| NODE\_ENV  | Environment mode (development/production)  |

---

## Running the Server

* Development mode with auto-reload:

```bash
npm run dev
```

* Build and run production version:

```bash
npm run build
npm start
```

Server should run on `http://localhost:4000` (or the port you set in `.env`).

---

## API Endpoints

### Products

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| POST   | /products      | Create a new product |
| GET    | /products      | Get all products     |
| GET    | /products/\:id | Get product by ID    |
| PUT    | /products/\:id | Update a product     |
| DELETE | /products/\:id | Delete a product     |

### Cart

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| POST   | /cart             | Add an item to the cart      |
| GET    | /cart             | Get all cart items           |
| PUT    | /cart/\:productId | Update quantity of an item   |
| DELETE | /cart/\:productId | Remove an item from the cart |

### Orders

| Method | Endpoint     | Description                  |
| ------ | ------------ | ---------------------------- |
| POST   | /orders      | Place an order from the cart |
| GET    | /orders      | Get all orders               |
| GET    | /orders/\:id | Get order by ID              |
| DELETE | /orders/\:id | Cancel an order              |

---

## Postman Collection

* Import the provided Postman collection JSON for ready-to-use requests.
* Collection variables used:

  * `{{baseUrl}}` → `http://localhost:4000`
  * `{{productId}}` → saved automatically after creating a product
  * `{{orderId}}` → saved automatically after placing an order

---

## Best Practices

* Validate all required fields and return appropriate HTTP status codes (200, 201, 400, 404).
* Use TypeScript interfaces for strong typing.
* Handle errors gracefully.
* Calculate totals and subtotals server-side.
* Persist cart and orders in MongoDB.
* Include timestamps for created and updated items.
* Organize routes, controllers, and models separately.
* Use Postman tests to validate API responses automatically.

---

## Example Request Body

### Create Product

```json
{
  "name": "Laptop",
  "description": "Powerful gaming laptop",
  "price": 1200,
  "imageUrl": "https://example.com/laptop.jpg",
  "category": "electronics"
}
```

### Add to Cart

```json
{
  "productId": "{{productId}}",
  "quantity": 2
}
```

### Place Order

```json
{
  "items": [
    { "productId": "{{productId}}", "quantity": 2 }
  ]
}
```

---

**Congratulations!** Your mini e-commerce API is now fully functional and ready for testing and submission.
