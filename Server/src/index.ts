import express from "express";
import { connect as mongooseconnect } from "mongoose";
import { DB_LINK } from "./Constants/constants";
import registerroute from "./Routes/register";
import loginroute from "./Routes/login";
import cors from "cors";

(async () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(registerroute);
  app.use(loginroute);

  try {
    await mongooseconnect(DB_LINK);
    await app.listen(9000);
    console.log("Server is running on 9000");
  } catch (error) {
    console.log(error);
  }
})();
