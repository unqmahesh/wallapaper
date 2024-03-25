import express from 'express'


import addNewImg from '../controller/global-controller/add-new-img.js'

import signUpUser from '../controller/user-controller/auth-controller/signup-user.js'
import signInUser from '../controller/user-controller/auth-controller/signin-user.js'


const indexRouter = express.Router()

indexRouter.route('/health').get((req, res)=>{res.send("Api is healty")})


indexRouter.route('/img/add-new-img')//upload img , add it to the creations of the user
indexRouter.route('/img/delete')//delete img, remove it from the creations of the user
indexRouter.route('/img/update')//update img
indexRouter.route('/img/get-img')//get a single img data
indexRouter.route('/img/get-all-imgs')//get all images 

indexRouter.route('/user/signin').post(signInUser)//user signin
indexRouter.route('/user/signup').post(signUpUser)//user signup
indexRouter.route('/user/update-img-creations')//update saved imges and update img data of field saves
indexRouter.route('/user/update-profile')//update user profile
indexRouter.route('/user/delete-user')//delete user

indexRouter.route('user/get-user')//get a single user
indexRouter.route('user/get-all-users')//get all users


export default indexRouter