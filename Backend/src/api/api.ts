import express from "express";
import router from "../routes/routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
