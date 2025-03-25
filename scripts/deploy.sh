#!/bin/bash

# Enable debug mode to log every command (useful for debugging)
set -x  

# Log deployment start time
echo "Deployment started at: $(date)"

# Navigate to project directory
echo "Navigating to project directory..."
cd /home/ec2-user/sampleExpress || { echo "Directory not found! Exiting..."; exit 1; }

# Log available files (useful for debugging missing files)
echo "Files in project directory:"
ls -al

# Install project dependencies
echo "Installing dependencies..."
pnpm install --frozen-lockfile 2>&1 | tee install.log  # Log output for debugging

# Check if dependencies installed correctly
if [ $? -ne 0 ]; then
  echo "Dependency installation failed! Exiting..."
  exit 1
fi

# Set correct permissions
echo "Setting permissions..."
sudo chown -R ec2-user:ec2-user /home/ec2-user/sampleExpress
sudo chmod -R 755 /home/ec2-user/sampleExpress

# Log current PM2 processes (before restart)
echo "Current PM2 processes:"
pnpm list

# Check if the application is running
if pm2 list | grep -q "index"; then
  echo "✅ Application is running. Restarting..."
  pnpm restart
else
  echo "❌ Application is NOT running. Starting..."
  pnpm start
fi

# Log PM2 status after restart/start
echo "PM2 status after operation:"
pnpm list

# Validate if application is running
echo "Validating application..."
if pgrep -x "node" > /dev/null
then
    echo "✅ Application is running."
    exit 0
else
    echo "❌ Application is NOT running."
    exit 1
fi
