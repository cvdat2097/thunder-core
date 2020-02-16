import passport from 'passport';
// eslint-disable-next-line no-unused-vars
import core from 'express-serve-static-core';
import expressSession from 'express-session';

import localAuth from './local-auth';
import { localAuthValidator } from './validator';

export default (app: core.Express) => {
  app.use(
    expressSession({
      secret: 'hihiihi',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  localAuth.init();
  app.use('/login', localAuthValidator, localAuth.authenticator, (req, res) => {
    res.send('Login successfully');
  });

  app.use((req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    throw new Error('401 Access Denied');
  });
};
