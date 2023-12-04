const errorMiddleware = (err, req, res) => {
    res.status(500).json({
        message: err
    });
};

module.exports = errorMiddleware;