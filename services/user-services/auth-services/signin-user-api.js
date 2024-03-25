import axios from 'axios'

const signInUserApi = async (userEmail, userPassword) => {

    try{

        const BASE_URL = process.env.USER_SERVER_URL
        const FULL_URL = `${BASE_URL}/signin`

        const userData = {
            userEmail,
            userPassword, 
        }

        const response = await axios.post(FULL_URL, userData)

        return response

    }catch(error){
        console.log(error)
        const err = new Error()
        err.name = error.response.data.name || null
        err.message = error.response.data.message || null
        err.status = error.response.status || null

        throw err
    }
}

export default signInUserApi