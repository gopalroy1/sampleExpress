#!/bin/bash

# Navigate to project directory
cd /home/ec2-user/sampleExpress || exit 1

# Install project dependencies
echo "Installing dependencies..."
pnpm install

# Set correct permissions
echo "Setting permissions..."
sudo chown -R ec2-user:ec2-user /home/ec2-user/sampleExpress
sudo chmod -R 755 /home/ec2-user/sampleExpress

# Restart the application using the script defined in package.json
echo "Restarting application using pnpm..."
pnpm restart || pnpm start

# Validate if application is running
echo "Validating application..."
if pgrep -x "node" > /dev/null
then
    echo "Application is running."
    exit 0
else
    echo "Application is NOT running."
    exit 1
fi
