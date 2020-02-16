import passport from 'passport';
import passportCustom from 'passport-custom';
// eslint-disable-next-line no-unused-vars
import core from 'express-serve-static-core';
import expressSession from 'express-session';
import users from '@/mock/users';
import { LocalStrategyName } from './auth-type.enum';
import { localAuthValidator } from './validator';

const init = () => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
  });

  passport.use(
    LocalStrategyName.LOGIN,
    new passportCustom.Strategy((req, done) => {
      const { username, password } = req.body;
      const user = users.find(u => u.username === username);
      if (user?.password === password) {
        return done(null, user);
      }
      return done(new Error('User not found'));
    }),
  );
};

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

  init();

  app.use(
    '/login',
    localAuthValidator,
    passport.authenticate(LocalStrategyName.LOGIN),
    (req, res) => {
      res.send('Login successfully');
    },
  );

  app.use((req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    throw new Error('401 Access Denied');
  });
};
