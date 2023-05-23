import express, { Application } from "express";
import "dotenv/config"

const PORT = process.env.PORT

const app: Application = express()
app.use(express.json())

app.listen(PORT, async () => {
    console.log("Server is listening on port: " + PORT)
})