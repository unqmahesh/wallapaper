import fs from 'fs'

import addNewImgApi from "../../services/image-services/add-new-img.js";
import { addCreatedImgsApi } from '../../services/user-services/update-services/update-created-imgs-api.js';
import { imageName } from '../../config/multer-config.js';

const addNewImg = async (req, res, next) => {
    try{

        const {createdBy, aspectRatio, keyWords, height, width} = req.body

        const imageFile = fs.readFileSync(`uploads/${imageName}`)
   
        const response = await addNewImgApi(
            imageFile,
            createdBy, 
            aspectRatio,
            keyWords, 
            height, 
            width)
        
        const image_id = response.data.data._id

        await addCreatedImgsApi(createdBy, image_id)

        fs.unlinkSync(`uploads/${imageName}`)

        res.status(response.status).json(response.data)

    }catch(error){
        const err = new Error()
        err.name = error.name || null
        err.message = error.message || null
        err.status = error.status || null

        next(err)
    }
}

export default addNewImg