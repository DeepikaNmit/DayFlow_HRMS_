# Dayflow HRMS

A full-stack Human Resource Management System using React/Vite, Node.js/Express, PostgreSQL and optional Python analytics.

## Demo credentials
- HR: `hr@dayflow.com` / `Dayflow@123`
- Employee: `employee@dayflow.com` / `Dayflow@123`

## Setup
1. Install Node.js 20+, PostgreSQL 15+ and Python 3.10+.
2. Create database `dayflow_hrms`.
3. Run `database/schema.sql`, then `database/seed.sql` in psql or pgAdmin.
4. Copy `backend/.env.example` to `backend/.env` and update DATABASE_URL/JWT_SECRET.
5. `cd backend && npm install && npm run dev`
6. In another terminal: `cd frontend && npm install && npm run dev`


## Stack
React + Vite + Tailwind-style custom CSS, Node/Express, PostgreSQL, JWT, bcrypt, Recharts, Python.

## Notes
The included implementation is a hackathon-ready MVP scaffold covering authentication, role access, dashboards, employee management, attendance, leave, payroll, notifications and analytics. Extend email verification, document uploads and PDF generation if your judging rubric requires those to be fully productionized.
