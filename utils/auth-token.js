import jwt from 'jsonwebtoken'

const createAuthToken = async (userId, next) => {

    try{

        const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || "authtokensecret"

        const payload = {userId}
        
        const authToken = jwt.sign(payload, AUTH_TOKEN_SECRET, {expiresIn : "1d"})

        return authToken

    }
    catch(error)
    {

        const err = new Error()
        err.status = error.status || 500
        err.name = error.name || "auth_token_creation_failed"
        err.message = error.message || "Unable to create authentication Token"

        next(err)

    }
}


const verifyAuthToken = async (authToken, next) => {

    try{

        const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || "authenticationtokenkey"

        const payload = jwt.verify(authToken, AUTH_TOKEN_SECRET)

        const {userId} = payload

        return userId

    }
    catch(error)
    {

        const err = new Error()
        err.status = err.status || 500
        err.name = err.message || "auth_token_verification_failed"
        err.message = error.message || "failed to verify the authenticaion token"

        next(err)

    }
}

export {createAuthToken, verifyAuthToken}