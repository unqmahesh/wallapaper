import app from './app.js'


const PORT = process.env.PORT || 4000

const startServer = () => {
    try{

        app.listen(PORT, ()=> console.log(`Server is running port ${PORT}`))

    }catch(error){
        console.error(error)
    }
}

startServer()