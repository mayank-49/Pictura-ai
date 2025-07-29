import jwt from 'jsonwebtoken';


const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    try {
        // Verify the token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            // Attach userId to request body
            req.userId = tokenDecode.id;
            next(); // Proceed to next middleware or route handler

        } else {
            return res.json({ success: false, message: "Not Authorized. Login Again" });
        }

    } catch (error) {
        console.log("JWT Auth Error:", error);
        return res.json({ success: false, message: error.message });
    }
};

export default userAuth;
