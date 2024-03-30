import axios from 'axios'
import FormData from 'form-data'

import { imageName } from '../../config/multer-config.js'

const addNewImgApi = async (imageFile, createdBy, aspectRatio, keyWords, height, width) => {

    try{    

        const BASE_URL = process.env.IMG_SERVER_URL 
        const FULL_URL = `${BASE_URL}/add-new-img`

        const imageFormat = imageName.split(".")[1]


        const formData = new FormData()

        formData.append("imageFile", imageFile, {filename : imageName, contentType : `image/${imageFormat}` })
        formData.append("createdBy", createdBy)
        formData.append("aspectRatio", aspectRatio)
        formData.append("keyWords", keyWords)
        formData.append("height", height)
        formData.append("width", width)


        const response = await axios.post(FULL_URL,
            formData,
            {headers : {'Content-Type' : 'multipart/form-data'}})

        return response

    }
    catch(error)
    {
        console.log(error.message)
        const err = new Error()
        err.name = error.name || null
        err.message = error.message || null
        err.status = error.status || null

        throw err

    }
}

export default addNewImgApi