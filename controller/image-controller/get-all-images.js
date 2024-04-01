import getAllImgsApi from "../../services/image-services/get-all-imgs.js";

const getAllImgs = async (req, res, next) => {

    try{
        const {pageNumber, pageSize} = req.body
        console.log(pageNumber, pageSize)
        const response = await getAllImgsApi(pageNumber, pageSize)

        res.status(response.status).json({success : response.data.success, data : response.data.data})

    }
    catch(error)
    {

        const err = new Error()
        err.name = error.name || null
        err.message = error.message || null
        err.status = error.status || null

        next(err)
    }
}

export default getAllImgs