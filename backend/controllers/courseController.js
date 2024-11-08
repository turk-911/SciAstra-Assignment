const db = require("../config/db");
exports.getAllCourses = (req, res) => {
  const query = "SELECT * FROM Courses WHERE available = true";
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
exports.purchaseCourses = (req, res) => {
  const { userId, courseId, paymentMethod } = req.body;
  const verified = true;
  if (verified) {
    const transactionQuery = `INSERT INTO Transaction (user_id, course_id, amount, payment_method, transaction_data) VALUES (?, ?, ?, ?, NOW())`;
    db.query(
      transactionQuery,
      [userId, courseId, 99.99, paymentMethod],
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Purchase successful" });
      }
    );
  } else res.status(400).json({ message: "Verification failed" });
};
