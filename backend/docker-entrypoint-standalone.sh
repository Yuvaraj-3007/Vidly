#!/bin/sh

echo "Running database migrations..."
npm run db:up

echo "Starting the server..."
npm start
