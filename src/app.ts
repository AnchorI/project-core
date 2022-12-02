import express from "express"
import cors from "cors"
import config from "@root/config"

const app = express()

app.use(cors())

app.use('/', (req, res) => { res.send(`${config.env}`) })

export default app