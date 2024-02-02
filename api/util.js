const handleErrorResponse = (res, err) => {
    if (!err || !err.response)
    {
        let message = 'An internal server error has occurred.';
        const errorDetail = process.env.ENVIRONMENT == 'DEV' ? err : '';
        
        if (process.env.ENVIRONMENT == 'DEV')
        {
            console.error(errorDetail);
            message += ` ${errorDetail}`;
        }

        return res.status(500).send({
            'status': '500',
            'message': message
        });
    }
    const response = err.response;

    return res.status(response.status).send(response.data);
};

module.exports = handleErrorResponse;