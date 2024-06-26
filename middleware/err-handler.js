
const errorHandler = async(error, req, res, next) => {

    error.name = error.name || "INTERNAL_SERVER_ERROR"
    error.message = error.message || "internal server error"
    error.status = error.status || 500
    error.success = false
    error.data = []

    res.status(error.status).json({
        success : error.success,
        name : error.name,
        message : error.message,
        data : error.data})

}

export default errorHandler