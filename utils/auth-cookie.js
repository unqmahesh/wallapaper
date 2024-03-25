
const createCookie = async (res, authToken, next) => {
    try{
        const expiryDate = new Date()
        expiryDate.setDate(expiryDate.getDate() + 1)
        const options = {
            HttpOnly : true,
            secure : true,
            //expires : expiryDate,
            maxAge : 1000 * 60 * 60 * 24,
            sameSite : 'None',
        }

        res.cookie("authToken", authToken , options)

    }
    catch(error)
    {

        const err = new Error()
        err.name = error.name || "auth_cookie_creation_failed"
        err.message = error.message || "unable to create authentication cookie"
        err.status = err.status || 500

        next(err)
    }
}

const clearCookie = async (res, next) => {
    try{

        const options = {
            httpOnly : true,
            secure : true,
            sameSite : 'None'
        }

        res.clearCookie("authToken", options )

    }catch(error){
        const err = new Error()
        err.name = error.name || "auth_cookie_clear_failed"
        err.message = error.message || "unable to clear the authentication cookie"
        err.status = error.status || 500

        next(err)
    }
}

export {createCookie, clearCookie}