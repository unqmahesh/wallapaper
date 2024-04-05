import fs from 'fs'

import addExistingImgApi from '../../services/image-services/add-existing-img-api.js';
import { imageName } from '../../config/multer-config.js';

const addExistingImg = async (req, res, next) => {
    try{

        const {image_id, height, width} = req.body

        const imageFile = fs.readFileSync(`uploads/${imageName}`)

   
        const response = await addExistingImgApi(
            imageFile,
            image_id,
            height, 
            width)
        

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

export default addExistingImg