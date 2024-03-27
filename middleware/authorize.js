import { verifyAuthToken } from "../utils/auth-token.js";

const authorize = async (req, res, next) => {
    try{

        const {authToken} = req.signedCookies
        const userId = await verifyAuthToken(authToken, next)
        req.body.userId = userId

        next()

    }
    catch(error)
    {
        const err = new Error()
        err.name = error.name || null
        err.message = error.message || null
        err.status = error.status || null
        
        next(err)
    }
}

export default authorize