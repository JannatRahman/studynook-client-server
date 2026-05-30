# 📚 StudyNook

StudyNook is a modern online library room booking platform that allows students to find and reserve study rooms based on their preferences. Users can browse available rooms, view detailed information, create listings, manage bookings, and track room reservations through an intuitive and responsive interface.

## 🚀 Live Demo

Live Site: [Add Your Live URL Here]

## ✨ Features

### Public Features

* Browse all available study rooms
* View room details
* Responsive design for desktop, tablet, and mobile devices
* User-friendly interface

### Authenticated User Features

* Secure user authentication
* Book study rooms online
* View booking history
* Create new room listings
* Edit existing room listings
* Delete room listings
* Manage personal bookings
* Track how many students have booked a room
* Access protected routes and private pages

## 🛠️ Technologies Used

### Frontend

* Next.js
* React.js
* Tailwind CSS
* DaisyUI / HeroUI
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* Auth.js / NextAuth (Update based on your project)

## 📂 Project Structure

```bash
StudyNook/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── public/
│
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   └── server.js
│
└── README.md
```

## 🔐 Access Control

### Without Login

Users can access:

* Home Page
* All Rooms Page
* Room Details

### After Login

Users can access:

* Home
* All Rooms
* Room Details
* My Listings
* My Bookings
* Create Room
* Edit Room
* Delete Room
* Booking Statistics

## 📋 Core Functionalities

### Room Management

* Add new study rooms
* Update room information
* Delete room listings
* View detailed room information

### Booking System

* Book available study rooms
* Store booking information in MongoDB
* Track room reservations
* View personal booking history

### User Dashboard

* Manage listings
* Manage bookings
* Monitor room booking activity

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

## 🌱 Environment Variables

Create a `.env.local` file for the frontend and a `.env` file for the backend.

### Frontend

```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
AUTH_SECRET=your_secret_key
```

## 🎯 Future Improvements

* Search and filtering options
* Room availability calendar
* Email notifications
* User reviews and ratings
* Admin dashboard
* Real-time booking updates

## 👨‍💻 Author

Jannat Amila Rahman

### Connect With Me

GitHub: https://github.com/JannatRahman

LinkedIn: Add Your LinkedIn Profile
