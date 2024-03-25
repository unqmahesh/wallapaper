import addNewImgApi from "../../services/image-services/add-new-img.js";

const addNewImg = async (req, res, next) => {
    try{

        const {base64Img, createdBy, aspectRatio, keyWords, height, width} = req.body

        const response = await addNewImgApi(base64Img, createdBy, aspectRatio, keyWords, height, width)

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