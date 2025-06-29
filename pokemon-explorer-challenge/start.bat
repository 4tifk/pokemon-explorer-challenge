@echo off

echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo Starting backend server in a new window...
start "Backend Server" cmd /k "cd backend && npm start"

echo Starting frontend server...
cd frontend
call npm run dev

pause