# CalibraPro – Calibration Lab Management System

This is a full-stack system built with **Django (backend)** and **React (frontend)**, using **MySQL** as the database.

This guide explains how to set up and run the system step by step.

---

## Prerequisites

Before getting started, make sure the following tools are installed:

**For the backend (Django / Python):**
- Python 3.10 or higher  
- Git (if cloning from GitHub)  
- Visual Studio Code (VS Code)

**For the frontend (React):**
- Node.js (includes npm)

**For the database:**
- MySQL Community Server  
- MySQL Workbench (comes with the MySQL installer)

---

## Backend Setup (Django)

1. Open VS Code or PowerShell  
2. Navigate to the server directory:

   ```bash
   cd CalibraPro/server
   
3. Create a virtual environment (only once):
   ```bash
   python -m venv .venv

4. Activate the virtual environment (each time you work on the project)
   ```bash
   .venv\Scripts\activate

5. Install required packages:
   ```bash
   pip install -r requirements.txt

6. Run migrations to create the database table:
   ```bash
   python manage.py migrate


7. Start the development server:
   ```bash
   python manage.py runserver
The backend will be available at: http://127.0.0.1:8000



## Frontend Setup (React)

1. Open a new terminal window
2. Navigate to the client directory
   ```bash
   cd CalibraPro/client
3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

The frontend will be available at: http://localhost:5173 (or another port, depending on configuration)

To build the app for production:
   ```bash
   npm run build