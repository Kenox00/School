const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

if (!SECRET) {
    console.error("JWT SECRET is not defined in environment variables.");
    throw new Error("JWT SECRET is missing");
}

// Middleware to verify JWT and extract user info
exports.protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided or invalid format. Expected: Bearer <token>" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded; // Attach user info to the request
        next();
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

// Middleware for role-based access control
exports.authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.status(403).json({ error: "User role not found in token" });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: `Access denied for role: ${req.user.role}` });
        }

        next();
    };
};
