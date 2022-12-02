import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.use('/', (req, res) => { res.send('Pidoras') })

export default app