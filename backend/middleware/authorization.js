const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Token missing"
        });
    }
    
    jwt.verify(token, process.env.secret_key, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: false,
                message: "Invalid token"
            });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;
