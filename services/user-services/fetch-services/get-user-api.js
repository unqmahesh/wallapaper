import axios from 'axios'

const getUserApi = async (userId) => {
    try{

        const BASE_URL = process.env.USER_SERVER_URL
        const FULL_URL = `${BASE_URL}/get-user`

        const response = await axios.post(FULL_URL, {userId})

        return response

    }
    catch(error)
    {   

        const err = new Error()
        err.name = error.response.data.name || null
        err.message = error.response.data.message || null
        err.status = error.response.status || null


        throw err
    }
}

export default getUserApi