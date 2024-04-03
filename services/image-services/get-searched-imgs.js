import axios from 'axios'

const getSearchedImgsApi = async (pageNumber, pageSize, searchedWords, aspectRatio) => {
    try{

        const BASE_URL = process.env.IMG_SERVER_URL 
        const FULL_URL = `${BASE_URL}/get-searched-imgs`

        const response = await axios.post(FULL_URL, {pageNumber, pageSize, searchedWords, aspectRatio}, {withCredentials  : true})

        return response
    }
    catch(error){
        console.log(error)
        const err = new Error()
        err.name = error.response.data.name || null
        err.message = error.response.data.message || null
        err.status = error.response.status || null

        throw err
    }
}

export default getSearchedImgsApi