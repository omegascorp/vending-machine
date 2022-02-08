import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import crypto from "crypto";
import { userModel } from "../models/userModel";

passport.use(new LocalStrategy(
  async function(username, password, done) {
    const encryptedPassword = crypto.createHash("sha256").update(password).digest().toString();
    const user = userModel.findOne({
      username,
      password: encryptedPassword,
    });
    return done(null, user);
  }
));

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});
