# elearning
Elearning using MEAN stack

# 0. Mark up and Git commands
```
    git checkout -b f001
    touch newfile.txt
    git add .
    git commit -m "added newfile.txt"
    git push -u origin f001 (-u for the first time)
    git checkout main
    git pull
    git merge f001
    git push

    git checkout f001
    git status
    git branch
```

# Lecture 4: Nextjs client setup
```
mkdir client and server
node -v
cd client
npm init -y
npm install next react react-dom
npm install next@latest react@latest react-dom@latest
mkdir pages
npm run dev
```

# Lecture 5: Bootstrap and Ant design
```
npm i bootstrap
npm i antd
sudo chown -R 501:20 "/Users/chandradipguha/.npm"
git clean -fd
```
- Create _app.js
- Add index.js

# Lecture 6: Custom CSS
```
mkdir public; cd public; mkdir css; touch styles.css
```
- create styles.css
- import in app.js

# Lecture 7: Pages
```
cd pages
touch login.js
touch register.js
cd client
mkdir components
touch TopNav.js
```
- include TopNav in app.js

# Lecture 8: Ant menu and Icons
- Install nvm - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
- nvm install 15.4.0
- nvm use 15.4.0
- change dependency as per the original source code