// userController.js
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

// Generate JWT Token
const createToken = (user) => {
    return jwt.sign({ _id: user._id, role: user.role }, SECRET, { expiresIn: "3d" });
};

// Signup Function
exports.Signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Validate input
        if (!email || !password || !role) {
            return res.status(400).json({ error: "All fields must be filled" });
        }

        // Create user
        const user = await User.signup(email, password, role);
        const token = createToken(user);

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login Function
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: "All fields must be filled" });
        }

        // Login user
        const user = await User.login(email, password);
        const token = createToken(user);

        res.status(200).json({ email, token, role: user.role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
