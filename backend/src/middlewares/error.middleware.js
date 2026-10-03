const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (process.env.NODE_ENV === "development") {
        return res.status(statusCode).json({
            success: false,
            status: err.status || "error",
            message,
            errors: err.errors || [],
            stack: err.stack
        });
    }

    if (err.isOperational) {
        return res.status(statusCode).json({
            success: false,
            status: err.status || "error",
            message,
            errors: err.errors || []
        });
    }

    return res.status(500).json({
        success: false,
        status: "error",
        message: "Something went wrong"
    });
};

export default errorMiddleware;