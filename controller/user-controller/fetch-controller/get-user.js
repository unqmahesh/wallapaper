import getUserApi from "../../../services/user-services/fetch-services/get-user-api.js"


const getUser = async (req, res, next) => {

    try{

        const {userId} = req.body

        const response = await getUserApi(userId)

        const responseStatus = response.status

        const responseData = {
            success : response.data.success,
            data : response.data.data
        }

        res.status(responseStatus).json({success : true, data : responseData})

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

export default getUser