🌤️ Weather Analytics Dashboard

A full-stack weather analytics web application built using React + Vite (frontend) and Django REST Framework (backend).
The app fetches real-time weather forecast data (hourly + daily) from OpenWeatherMap API and presents it in a clean UI with cards and structured data.

🚀 Features
Frontend (React)

Search for any city

Displays:

5-day / hourly forecast

7-day weather overview

Current weather (temperature, wind, humidity)

Component-based architecture:

CityCard

CityDetail

Dashboard

SearchBar

Uses React Router & Axios

Modern UI with TailwindCSS

Backend (Django)

REST API endpoint:
GET /api/weather/<city>/

Calls OpenWeatherMap API securely

Returns structured forecast JSON:

current

hourly

daily

Handles errors (invalid city, missing API key)

🧱 Project Structure
weather-analytics-dashboard/
│
├── backend/
│   ├── weather/
│   │   ├── views.py
│   │   ├── urls.py
│   ├── manage.py
│
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── CityCard.jsx
    │   │   ├── CityDetail.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── SearchBar.jsx
    │   ├── features/
    │   │   ├── favouriteSlice.js
    │   │   ├── weatherSlice.js
    │   ├── App.jsx
    │   ├── main.jsx

🔧 Tech Stack
Frontend

React

Vite

TailwindCSS

Axios

React Router DOM

Backend

Python

Django

Django REST Framework

Requests

OpenWeatherMap API

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/weather-analytics-dashboard.git
cd weather-analytics-dashboard

🖥️ Backend Setup (Django)
Create virtual environment
cd backend
python -m venv env
env\Scripts\activate   (Windows)

Install dependencies
pip install -r requirements.txt

Set your OpenWeatherMap API key

Edit views.py:

OWM_API_KEY = "YOUR_API_KEY_HERE"

Run backend server
python manage.py runserver


Backend runs at:
👉 http://127.0.0.1:8000/

💻 Frontend Setup (React)
Install dependencies
cd client
npm install

Run frontend
npm run dev


Frontend runs at:
👉 http://localhost:5173/

🧪 API Example
GET /api/weather/bangalore/

Response:
{
  "current": {...},
  "hourly": [...],
  "daily": [...],
}




🛠️ Future Enhancements

Interactive temperature graphs

Save favourite cities

Dark mode

Deploy backend on Render / Railway

Deploy frontend on Netlify / Vercel

🙌 Author

Priya Ambiger
Weather Analytics Dashboard — Full Stack Project

⭐ Show Support

If this project helped you, please ⭐ the repo!
