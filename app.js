import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'

import errorHandler from './middleware/err-handler.js'
import indexRouter from './router/index-router.js'

const app = express()

app.use(express.static("dist"))


app.get('/root/*', (req, res) => {
    const _filePath = fileURLToPath(import.meta.url)
    const _dirPath = path.dirname(_filePath)
    res.sendFile(path.join(_dirPath, 'dist', 'index.html'));
  });


app.use(cors({origin : process.env.CLIENT_ORIGIN, credentials : true}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/v1', indexRouter)

app.use(errorHandler)


export default app