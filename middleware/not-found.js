export default (req, res) =>
  res.status(404).json({
    msg: "Not Found",
  });
