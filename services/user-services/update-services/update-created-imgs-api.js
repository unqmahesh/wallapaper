import axios from "axios";

const addCreatedImgsApi = async (user_id, image_id) => {

    try{

    const BASE_URL = process.env.USER_SERVER_URL
    const FULL_URL = `${BASE_URL}/add-created-img`


    const response = await axios.post(FULL_URL, {user_id, image_id})

    return response
    }
    catch(error)
    {
    const err = new Error()
    err.name = error.name || null
    err.message = error.message || null
    err.status = error.status || null

    throw err

    }
}

export {addCreatedImgsApi}