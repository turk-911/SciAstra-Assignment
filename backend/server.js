const express = require("express");
const app = express();
const mysql = require("./config/db");
const courseRoutes = require("./routes/courseRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoutes);
app.use("/api/blog", blogRoutes);
const PORT = 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));