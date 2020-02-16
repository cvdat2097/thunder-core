import passport from 'passport';
import passportCustom from 'passport-custom';
import jwt from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import core from 'express-serve-static-core';

import users from '@/mock/users';
import { JWTStrategyName } from './auth-type.enum';
import { jwtAuthValidator } from './validator';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

const sign = (payload: any) => {
  const token = jwt.sign(payload, JWT_PRIVATE_KEY, { algorithm: 'HS256' });
  return token;
};

const authenticate = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_PRIVATE_KEY, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (exc) {
    return null;
  }
};

const init = () => {
  passport.use(
    JWTStrategyName.LOGIN,
    new passportCustom.Strategy((req, done) => {
      const { username, password } = req.body;
      const user = users.find(u => u.username === username);
      if (user?.password === password) {
        const token = sign(user);
        return done(null, token);
      }
      return done(new Error('User not found'));
    }),
  );

  passport.use(
    JWTStrategyName.VALIDATE,
    new passportCustom.Strategy((req, done) => {
      const { authorization: token } = req.headers;
      const user = authenticate(token as string);
      if (user) {
        return done(null, user);
      }
      return done(new Error('401 Access Denied'));
    }),
  );
};

export default (app: core.Express) => {
  init();

  app.use(
    '/login',
    passport.authenticate(JWTStrategyName.LOGIN, { session: false }),
    (req, res) => {
      req.user;
      res.send(req.user);
    },
  );

  app.use(
    jwtAuthValidator,
    passport.authenticate(JWTStrategyName.VALIDATE, {
      session: false,
    }),
  );
};
