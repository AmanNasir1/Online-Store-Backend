const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: "success" });
});

// User Route

app.use("/api/user", require("./routes/auth"));
app.use("/api/product", require("./routes/Product"));
app.use("/api/category", require("./routes/Category"));


mongoose.connect(process.env.MONGODB_URI, () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`);
  });
});
