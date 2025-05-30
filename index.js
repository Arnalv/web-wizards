import express from "express";

const app = express();
const port = 6500;

app.use(express.static("public"));

app.get("/", (req, res) => res.render("Index.ejs"));

app.listen(port, console.log(`listening on port ${port}`));