# nodejs
Start with Nodejs

## Install Nodejs
https://nodejs.org/en/
## Cheack Node version
node --version

## Create packege.json file
npm init
## Install Dev dependancies
npm i -D nodemon
npm i --save-dev nodemon

## Add starter scripts in packege.json
"start": "node index",
"dev": "nodemon index"

## Starter Server
npm run dev

## Install Git
https://git-scm.com/downloads
## Create an account to github
https://github.com
## Configure Git
https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
## Cheack git version
git --version

## Create an account to heroku
https://heroku.com
## Install heroku cli
https://devcenter.heroku.com/articles/heroku-cli#download-and-install

## Cheack heroku version
heroku --version
## Login to heroku
heroku login

## Create a .gitignore file
put "node_modules" inside

## Add everithing to git
git init
git add *
git commit -m "initial commit"

## Create a heroku app
heroku create

## Create repo in heroku
heroku git:remote -a quiet-oasis-03025

## Deploy your app
git push heroku master
git push heroku main

## Open your app
heroku open
