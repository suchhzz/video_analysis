import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running at321321 http://localhost:${port}`);
});
