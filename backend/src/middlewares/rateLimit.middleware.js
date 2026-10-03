import rateLimit from "express-rate-limit";

const rateLimiter = (windowMs, max, message = "Too many requests") => {
    return rateLimit({
        windowMs,
        limit: max,

        standardHeaders: "draft-8",
        legacyHeaders: false,

        message: {
            success: false,
            message
        }
    });
};

export default rateLimiter;