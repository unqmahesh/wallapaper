import axios from 'axios'

const addNewImgApi = async (base64Img, createdBy, aspectRatio, keyWords, height, width) => {

    try{    

        const BASE_URL = process.env.IMAGE_SERVER_URL 
        const FULL_URL = `${BASE_URL}/add-new-img`

        const imgData = {
            base64Img,
            createdBy,
            aspectRatio,
            keyWords,
            height, 
            width
        }

        const response = await axios.post(FULL_URL, imgData)

        return response

    }catch(error){
        const err = new Error()
        err.name = error.name || null
        err.message = error.message || null
        err.status = error.status || null

        throw err

    }
}

export default addNewImgApi