import express from 'express';

import morgan from 'morgan';
import * as dotenv from 'dotenv';
import connect from "./db.js";
import passport from "passport";
import googleMiddleware from './middlewares/googleMiddleware.js';
import session from 'express-session';
import authRouter from './routes/authRoutes.js'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
app.use(morgan('dev'));

app.use(express.json());
app.use(bodyParser.json()); 



app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use(
    session({
      secret: 'yourSecretKey21',
      resave: false,
      saveUninitialized: false,
    })
  );
  googleMiddleware(passport)

  //routes
  app.use(cookieParser());
  app.use('/api/auth', authRouter);

  

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
  const port = process.env.PORT || 5100;
  app.listen(port, () => {
    connect()
    console.log(`server running on PORT ${port}....`);
  });