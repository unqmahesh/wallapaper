import axios from 'axios'

const addExistingImgApi = async (base64Img, imageId, height, width) => {

    try{    

        const BASE_URL = process.env.IMAGE_SERVER_URL 
        const FULL_URL = `${BASE_URL}/add-existing-img`

        const imgData = {
            base64Img,
            imageId,
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

        next(err)

    }
}

export default addExistingImgApi