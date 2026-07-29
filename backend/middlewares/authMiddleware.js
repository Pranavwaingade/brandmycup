const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

    let token;

    // Authorization Header check
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {

        try {

            // Bearer TOKEN मधून actual token घेणे
            token = req.headers.authorization.split(" ")[1];

            // JWT verify करणे
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            // User ID request मध्ये ठेवणे
            req.user = decoded.id;

            // पुढच्या function कडे जाणे
            next();

        } catch (error) {

            res.status(401).json({
                message: "Not authorized, token failed"
            });

        }

    }

    // Token नाही
    if (!token) {

        return res.status(401).json({
            message: "Not authorized, token missing"
        });

    }

};

module.exports = protect;