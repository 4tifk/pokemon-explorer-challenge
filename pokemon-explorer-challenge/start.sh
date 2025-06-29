#!/bin/bash

echo "Installing backend dependencies (http://localhost:3001)..."
cd backend
npm install

echo "Installing frontend dependencies (http://localhost:3000)"
cd ../frontend
npm install

echo "Starting backend..."
cd ../backend
npm start &  # run backend in background

echo "Starting frontend..."
cd ../frontend
npm run dev