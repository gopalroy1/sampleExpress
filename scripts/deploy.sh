#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH=$PATH:$HOME/.nvm/versions/node/v22.14.0/bin

echo "Checking if application is already running..."
if pm2 list | grep -q "index"; then
  echo "Application is already running. Restarting..."
  pm2 restart index
else
  echo "Application is not running. Starting..."
  pm2 start index.js
fi

# Check PM2 process status
echo "PM2 status after restart:"
pm2 list

# Validate that the application is running
if pm2 list | grep -w "index" | grep -w "online" > /dev/null; then
  echo "✅ Process 'index' is online."
else
  echo "❌ Process 'index' is NOT online."
  exit 1
fi
