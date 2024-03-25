import signUpUserApi from "../../../services/user-services/auth-services/signup-user-api.js";

import { createAuthToken } from "../../../utils/auth-token.js";
import { createCookie } from "../../../utils/auth-cookie.js";

const signUpUser  = async (req, res, next) => {

    try{

        const {userName, userEmail, userPassword, userRole} = req.body


        const response = await signUpUserApi(userName, userEmail, userPassword, userRole)

        const responseStatus = response.status

        const responseData = {
            success : response.data.success,
            data : response.data.data 
        }
    
    
        const userId = response.data.data.userId
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

export default signUpUser