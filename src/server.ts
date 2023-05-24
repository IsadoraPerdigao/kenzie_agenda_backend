import { app } from './app'
import "dotenv/config"
import { AppDataSource } from './data-source'


const PORT = process.env.PORT || 3000

AppDataSource.initialize()
    .then(() => {
        console.log("database is connected")
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
    })
    .catch((error) => console.log(error))