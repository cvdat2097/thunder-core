import passport from 'passport';
import passportCustom from 'passport-custom';

import users from '@/mock/users';
import { LocalStrategyName } from './auth-type.enum';

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

export default {
  init,
  authenticator: passport.authenticate(LocalStrategyName.LOGIN),
};
