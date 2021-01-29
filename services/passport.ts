import { Application } from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import config from '../config';
import User from '../models/User';

class Passport {
  public init(app: Application): Application {
    app.use(
      cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
        keys: [config.cookieKey] // a random key to encrypt our cookie
      })
    );
    app = app.use(passport.initialize());
    app = app.use(passport.session());

    passport.serializeUser((user: { id: string }, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id).then((user) => {
        done(null, user);
      });
    });


    passport.use(
      new GoogleStrategy(
        {
          clientID: config.googleClientID,
          clientSecret: config.googleClientSecret,
          callbackURL: '/auth/google/callback',
          proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
          const existingUser = await User.findOne({ googleId: profile.id })
          console.log('existingUser');
          console.log(existingUser);
          if (existingUser) {
            console.log('existing user');
            console.log(existingUser);
            return done(null, existingUser);
          }

          const user = await new User({ googleId: profile.id }).save()

          console.log('new user');
          done(null, user);
        }
      )
    );

    return app;
  }
}
export default new Passport;