import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connectDB.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection error: ", err);
  });
