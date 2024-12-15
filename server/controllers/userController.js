const User = require('../models/User');
const { verifyToken } = require('../middleware/auth');
const { validateUserInput } = require('../middleware/validation');

const register = [
  validateUserInput,
  async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      const token = user.generateToken();
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
];

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = user.generateToken();
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const me = [
  verifyToken,
  async (req, res) => {
    res.json(req.user);
  },
];

module.exports = { register, login, me };
