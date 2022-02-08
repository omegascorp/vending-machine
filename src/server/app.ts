import express, { Request, NextFunction, Response } from "express";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

import logService from "./services/logService";
import pageRouter from "./routers/pageRouter";
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import "./services/passportService";
import "./services/dbService";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.set("trust proxy", true);

app.use(passport.initialize());
app.use("/", express.static(path.join(__dirname, "../../public")));
app.use("/scripts", express.static(path.join(__dirname, "../client")));

app.use((req: express.Request, res: express.Response, next: () => void) => {
  logService.info(
    req.method,
    req.hostname,
    req.originalUrl,
    req.headers["content-type"],
  );
  next();
});


app.use(authRouter);
app.use(pageRouter);
app.use(userRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  logService.error("[default error handler]", error.stack);
  res.status(500).send({
    error: {
      message: error.message || "Internal Error",
    },
  });
});

app.listen(8080);
