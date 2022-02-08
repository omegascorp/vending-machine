import express from "express";
import passport from "passport";
import { User } from "../../shared/types/user";
import { signJwt } from "../services/jwtService";

const router = express.Router();

async function redirectHome(req: express.Request, res: express.Response) {
  const id = (req.user as User)._id;
  const token = await signJwt({
    id,
  });
  res.cookie("token", token);
  res.redirect("/");
}

router.get("/login", passport.authenticate("local"), redirectHome);

router.get("/logout", (req: express.Request, res: express.Response) => {
  res.cookie("token", "");
  res.redirect("/");
});

export default router;
