# NodeJS - bootcamp5 - RocketSeat (A barber appointment system)

1. Install dependencies: `yarn` or `npm install`
2. Run: `yarn start` or `npm start`
3. Start a database (I used postgres on docker). The config settings are in `/src/config/database.js`
4. Running migrations: `npx sequelize db:migrate`
5. On your browse, put this url: `http://localhost:3100/`

"dependencies": {
"bcryptjs": "^2.4.3",
"connect-flash": "^0.1.1",
"express": "^4.16.4",
"express-session": "^1.15.6",
"express-session-file-store": "^1.0.2",
"moment": "^2.24.0",
"multer": "^1.4.1",
"nunjucks": "^3.1.7",
"pg": "^7.8.1",
"sequelize": "^4.42.0",
"session-file-store": "^1.2.0"
},
