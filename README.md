# Event Management System

This is a full-stack Event Management System for managing student events, built using a **React** frontend and a **Spring Boot** backend.

---

## 📁 Repository Structure
* `frontend/` - The React + Vite + TypeScript user interface.
* `backend/` - The Spring Boot REST API handles business logic and data.

---

## 🛠️ Tech Stack

### Frontend
* React
* TypeScript
* Vite

### Backend
* Java / Spring Boot
* Spring Data MongoDB
* MongoDB (Database)

---

## ⚙️ Database Setup

Before running the backend, make sure you have MongoDB running locally or have a MongoDB Atlas connection string.

1. Open `backend/src/main/resources/application.properties` (or `application.yml`).
2. Add your MongoDB configuration:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/event_db
   ```

---

## 🚀 How to Run Locally

To run the full application, you will need to start both the frontend and the backend in separate terminal windows.

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend Setup (Spring Boot)
Open a second, separate terminal window and run:
```bash
cd backend

./mvnw spring-boot:run

```
