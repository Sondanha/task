import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "login.html"));
});

app.get("/login", (req, res) => {
  const { userid, userpw } = req.query;
  res.render("result", { userid, userpw });
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
