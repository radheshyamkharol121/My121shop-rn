#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Git operations
echo "Committing changes..."
git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to GitHub..."
git push origin main

echo "Deploying to Firebase..."
firebase deploy --only hosting

echo "Deployment complete! 🚀"
