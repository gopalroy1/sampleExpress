#!/bin/bash

# Enable debug mode to log every command (useful for debugging)
set -x  

# Load NVM environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Ensure Node.js global binaries are in the PATH
export PATH=$PATH:$HOME/.nvm/versions/node/v22.14.0/bin

# Log deployment start time
echo "Deployment started at: $(date)"

# Navigate to project directory
echo "Navigating to project directory..."
cd /home/ec2-user/sampleExpress || { echo "Directory not found! Exiting..."; exit 1; }

# Log available files (useful for debugging missing files)
echo "Files in project directory:"
ls -al

# Check if pnpm and pm2 are available
which pnpm || { echo "❌ pnpm not found! Exiting..."; exit 1; }
which pm2 || { echo "❌ pm2 not found! Exiting..."; exit 1; }

# Install project dependencies
echo "Installing dependencies..."
pnpm install --frozen-lockfile 2>&1 | tee install.log

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
pm2 list

# Restart if running, else start the application
if pm2 describe index > /dev/null; then
  echo "Restarting application..."
  pnpm restart
else
  echo "Starting application..."
  pnpm start
fi

# Log PM2 status after restart
echo "PM2 status after restart:"
pm2 list

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
