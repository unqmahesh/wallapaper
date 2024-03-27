import signInUserApi from "../../../services/user-services/auth-services/signin-user-api.js";

import { createAuthToken } from "../../../utils/auth-token.js";
import { createCookie, clearCookie } from "../../../utils/auth-cookie.js";

const signInUser  = async (req, res, next) => {

    try{

        const {userEmail, userPassword} = req.body

        const response = await signInUserApi(userEmail, userPassword)

        const responseStatus = response.status

        const responseData = {
            success : response.data.success,
            data : response.data.data
        }

        const userId = response.data.data.userId
        await clearCookie(res, next)
        const authToken = await createAuthToken(userId, next)
        await createCookie(res, authToken, next)

        res.status(responseStatus).json(responseData)

    }catch(error){
        const err = new Error()
        err.name = error.name || null
        err.message = error.message || null
        err.status = error.status || null
        
        next(err)
    }
}

export default signInUser