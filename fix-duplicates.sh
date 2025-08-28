#!/bin/bash
echo "🧹 Cleaning duplicate root folders..."

# अगर my121shop-rn के अंदर structure है तो बाहर वाले delete कर दो
for d in src public functions .github .vscode; do
  if [ -d "./my121shop-rn/$d" ] && [ -d "./$d" ]; then
    echo "❌ Removing duplicate: $d"
    rm -rf "./$d"
  fi
done

echo "✅ Done. Now verifying..."
find ./my121shop-rn -type d | wc -l
find ./my121shop-rn -type f | wc -l
