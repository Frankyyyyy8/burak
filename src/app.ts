import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1-ENTRANCE **/
const app = express(); // backend framework
app.use(express.static(path.join(__dirname, "public"))); // middleware disign patern public folderni tashqriga ochiqlayapti
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true })); // bu esa traditional api ni support qilyapti
app.use(express.json()); // rest api ni support qilyapti
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT)); // login standard larni joriy qiladi consolda backendda

/** 2-SESSIONS **/ // Tamga qurish uchun
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6h
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // SSR
app.use("/", router); // SPA

export default app;
