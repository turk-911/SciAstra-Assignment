const db = require("../config/db");
exports.getAllPosts = (req, res) => {
  const query = "SELECT * FROM BlogPosts WHERE is_published = true";
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
exports.createPost = (req, res) => {
  const { title, content, publish_date } = req.body;
  const query = `INSERT INTO BlogPosts (title, content, publish_date, is_published)
                   VALUES (?, ?, ?, ?)`;
  db.query(query, [title, content, publish_date, false], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Blog post created successfully!" });
  });
};
