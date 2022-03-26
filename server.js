// server.js
// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "codingTest", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("codingTest", "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 5080, () => console.log("Server running ....!"));