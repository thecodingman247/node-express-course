require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/task");

// Middleware
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `------------------ Server running on port ${PORT} ------------------`
  );
});
