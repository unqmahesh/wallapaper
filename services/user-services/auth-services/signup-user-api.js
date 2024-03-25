import axios from 'axios'

const signUpUserApi = async (userName, userEmail, userPassword, userRole) => {

    try{

        const BASE_URL = process.env.USER_SERVER_URL
        const FULL_URL = `${BASE_URL}/signup`

        const userData = {
            userName,
            userEmail,
            userPassword, 
            userRole
        }


        const response = await axios.post(FULL_URL, userData)

        return response

    }catch(error){
        const err = new Error()
        err.name = error.response.data.name || null
        err.message = error.response.data.message || null
        err.status = error.response.status || null

        throw err
    }
}

export default signUpUserApi