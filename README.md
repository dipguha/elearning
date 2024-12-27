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

# Lecture 9: Registration page

# Lecture 10: Server
```
npm init -y
npm i express@4.17.1 mongoose@5.12.0 cors@2.8.5 dotenv@8.2.0 nodemon@2.0.7 esm@3.2.25 jsonwebtoken@8.5.1 bcrypt@5.0.1 morgan@1.10.0
touch server.js
npm start
```

# Lecture 11: Express
```
touch .env
touch client/.gitignore
touch server/.gitignore
```
- server.js


# Lecture 12: Routes
```
mkdir routes; cd routes
touch auth.js
```

# Lecture 13: Controllers
```
mkdir controllers; cd controllers
touch auth.js
```


# Lecture 14-16: 
- Mongodb atlas - admin, JS
- robo3T
- download compass
```
brew tap mongodb/brew
brew install mongodb-community@4.4
brew install mongodb-community@4.4
brew services start mongodb-community@4.4
brew services stop mongodb-community@4.4
brew services list
brew search mongodb
```
To install mongodb-compass, run:
  brew install --cask mongodb-compass

# Lecture 17: Axios post request
```
cd client
npm i axios@0.21.1
```
- register.js
```
git stash
```

# Lecture 18: 
```
mkdir models
touch user.js
mkdir utils
touch auth.js
```

# Lecture 20: Register user


# Lecture 21: Toast notification
```
npm i react-toastify@7.0.3
```
- add toastify in app.js
- register.js


# Lecture 22-23: 
```
touch .env.local
cd client; touch .gitignore
cd server; touch .gitignore
```

# Lecture 24: Custom next dev server
```
cd client 
npm i http-proxy-middleware@1.0.6
npm i express@4.17.1
touch server.js
```
- nextjs document custom server
- package.json change
- register.js

# Lecture 25: Active nav links
- register.js
- TopNav.js



# Lecture 26-28: Login 
- client/login.js
- server/routes/auth.js
- server/controllers/auth.js
- .env - JWT_SECRET
```
cd server
npm i jsonwebtoken@8.5.1
```


# Lecture 29: Global state
```
mkdir context
touch index.js
```
- app.js
- login.js
- google chrome extensions - react extension


# Lecture 31: Preserve user info
- login.js
- context/index.js

# Lecture 32: Logout
- routes/auth.js
- controllers/auth.js
- TopNav.js

# Lecture 33: conditional 
- TopNav.js

# Lecture 34: Protecting pages
- login.js
- register.js

# Lecture 35: Axios interceptor
- context/index.js

# Lecture 36: CSRF
- synopsis.com - what is csrf 
```
cd server
npm i csurf@1.11.0
npm i cookie-parser@1.4.5
npm remove csrf
```
- server.js
- client/contect/index.js

# Lecture 37: Verify token and get current user
```
cd server
mkdir middlewares; cd middlewares
touch index.js
npm i express-jwt@6.0.0
```
- routes/auth.js
- controllers/auth.js
- middlewares/index.js

# Lecture 38: Protected page
```
cd client/pages
mkdir user
touch index.js
```

# Lecture 39: Wrapper
- TopNav.js
```
cd client/components
mkdir routes
touch UserRoute.js
```
- controller/auth.js
- user/index.js

# Lecture 40: AWS setup IAM
- IAM - add user - group - access key, secret access key in .env
- group - attach policy - s3 and ses full access
- .env
- elearning, https://535002891355.signin.aws.amazon.com/console
- routes/auth.js
- controllers/auth.js

# Lecture 41-42:
```
npm i aws-sdk@2.874.0
```
- controller/auth.js


# Lecture 43-44-45: Password reset
- models/user.js - password reset code
- Login.js
```
cd pages
touch forgot-password.js
cd server
npm i nanoid@3.1.22
```
router/auth.js
controller/auth.js


# Lecture 4: 


# Lecture 4: 


# Lecture 4: 


# Lecture 4: 