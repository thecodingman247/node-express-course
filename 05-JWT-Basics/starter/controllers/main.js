exports.login = (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

exports.dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your lucky number ${luckyNumber}`,
  });
};
