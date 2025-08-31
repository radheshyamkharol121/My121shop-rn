#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Check build status
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Git operations
    echo "Committing changes..."
    git add .
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Determine branch name
    BRANCH=$(git branch --show-current)
    if [ -z "$BRANCH" ]; then
        BRANCH="main"
    fi
    
    echo "Pushing to GitHub (branch: $BRANCH)..."
    git push origin $BRANCH
    
    echo "Deploying to Firebase..."
    firebase deploy --only hosting
    
    echo "✅ Deployment complete! 🚀"
else
    echo "❌ Build failed! Fix errors and try again."
    exit 1
fi
