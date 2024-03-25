import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// import cors from 'cors'


import errorHandler from './middleware/err-handler.js'
import indexRouter from './router/index-router.js'

const app = express()


// const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173"

app.use(express.static("dist"))
// app.set('trust proxy', 1)
// app.use(cors({origin : CLIENT_ORIGIN, credentials : true}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/wallpaper-main/api/v1', indexRouter)

app.use(errorHandler)


export default app