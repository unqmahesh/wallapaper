import getSearchedImgsApi from "../../services/image-services/get-searched-imgs.js";

const getSearchedImgs = async (req, res, next) => {
    try{

        const {pageNumber, pageSize, searchedWords, aspectRatio} = req.body


        const response = await getSearchedImgsApi(pageNumber, pageSize, searchedWords, aspectRatio)

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

export default getSearchedImgs