import express from "express";
import mediaRouter from "./routes/mediaRoutes";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/media', mediaRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
