# 🛒 Kirana Inventory Management System

## 📌 Problem Statement
Small shopkeepers (kirana stores) face challenges in **managing product inventory**, especially for items with **expiry dates**.  
Manual tracking often leads to:
- Losses due to expired stock ❌  
- Missed opportunities to sell products before expiry ⚠️  
- Customer dissatisfaction  

👉 This project solves the problem by creating a **digital inventory management system** that clearly categorizes products into:  
- 🟢 Fresh  
- 🟠 Expiring Soon  
- 🔴 Expired  

---

## 🎯 Project Motive
The goal of this project is to **digitize stock management** for small businesses using modern technologies.  
It highlights my ability to work on **end-to-end full-stack development**, apply **concepts like Axios, CORS, REST APIs**, and also handle **containerization & deployment**.

---
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/4d3cdab1-cf8f-4820-a796-2e60190c89e6" />
<img width="1919" height="872" alt="image" src="https://github.com/user-attachments/assets/8ebf0ca7-1c8f-497f-b19a-d6b73863a8c5" />
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/47b70dc4-8e82-4bbb-8a59-301808fee07b" />
<img width="1919" height="873" alt="image" src="https://github.com/user-attachments/assets/cc99c1ce-bb2c-4229-a315-d94830099643" />


## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React.js — UI library  
- 🎨 Material-UI — for a professional, responsive design  
- 🌐 Axios — to make HTTP requests to the backend  

### **Backend**
- ☕ Spring Boot — to build REST APIs  
- 🗄️ PostgreSQL — relational database for data persistence  
- 📦 Spring Data JPA — ORM for DB operations  
- 🔓 CORS — enabled for frontend-backend communication  

### **Deployment & Containerization**
- 🐳 **Docker** — containerized the backend for portability  
- ☁️ **Render** — hosted the backend API  
- ⚡ **Vercel** — hosted the frontend React app  

---

## ⚙️ Features
- ➕ Add new products (with purchase & expiry dates)  
- 📋 View all products in a **dashboard**  
- 🟢 **Fresh products**  
- 🟠 **Expiring soon (within 7 days)**  
- 🔴 **Expired products**  
- 🗑️ Delete products when no longer needed  
- 🔗 Frontend connects to backend via **Axios**  
- 🌍 CORS handled in backend for smooth deployment  

---

## 📚 Concepts Demonstrated
- Building **REST APIs** with Spring Boot  
- **React hooks & state management**  
- **Axios** for API requests  
- **CORS** policy handling for cross-origin requests  
- **PostgreSQL** schema design & integration with Spring Data JPA  
- **Docker containerization** of backend service  
- **Full-stack deployment** using Render (backend) and Vercel (frontend)  

---

## 🚀 Deployment Links
- **Frontend (React, Vercel):** 👉 [Live Demo](https://kirana-shop-products-management-sof.vercel.app/)  
- **Backend (Spring Boot, Render)
---

## 🐳 Dockerization (Backend)
The backend is containerized with Docker for easy deployment:

```bash
# Build Docker image
docker build -t kirana-backend .

# Run Docker container
docker run -p 8080:8080 kirana-backend
