import express from 'express'

//global controllers
import addNewImg from '../controller/global-controller/add-new-img.js'

//user controllers
import signUpUser from '../controller/user-controller/auth-controller/signup-user.js'
import signInUser from '../controller/user-controller/auth-controller/signin-user.js'
import getUser from '../controller/user-controller/fetch-controller/get-user.js'

//image controllers
import getAllImgs from '../controller/image-controller/get-all-images.js'
import getSearchedImgs from '../controller/image-controller/get-searched-images.js'

//middlewares
import authorize from '../middleware/authorize.js'
import { upload } from '../config/multer-config.js'


const indexRouter = express.Router()

indexRouter.route('/health').get((req, res)=>{res.send("Api is healty")})


//image routers
indexRouter.route('/img/update')//update img

indexRouter.route('/img/get-img')//get a single img data
indexRouter.route('/img/get-all-imgs').post(getAllImgs)//get all images 
indexRouter.route('/img/get-searched-imgs').post(getSearchedImgs)

//global routers
indexRouter.route('/add-new-img').post(upload.single("imageFile"), addNewImg)
indexRouter.route('/add-existing-img')
indexRouter.route('/delete-img')

//user routers
indexRouter.route('/user/signin').post(signInUser)//user signin
indexRouter.route('/user/signup').post(signUpUser)//user signup
indexRouter.route('/user/update-img-creations')//update saved imges and update img data of field saves
indexRouter.route('/user/update-profile')//update user profile
indexRouter.route('/user/delete-user')//delete user

indexRouter.route('/user/get-user').get(authorize, getUser)//get a single user
indexRouter.route('/user/get-all-users')//get all users


export default indexRouter