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

## ⚙️ Database & Environment Setup

The backend is configured to run on port **8081** and connects to a local MongoDB instance. 

Ensure your `backend/src/main/resources/application.properties` matches the following configuration:
```properties
spring.application.name=StuEvent
server.port=8081
spring.mongodb.uri=mongodb://localhost:27017/stu_events
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
